data "aws_ami" "aws_linux_23" {
  most_recent = true

  filter {
    name   = "name"
    values = ["al2023-ami-2023*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }

  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
}

resource "aws_security_group" "ato_build_server_sg" {
  name        = "ato_build_server_sg"
  description = "Security group for ATO Build Server (SSH/HTTPS/OUTBOUND)"

  # Allow only my atlanta home IP for SSH access.
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["162.255.89.199"] // Home Public IP, Atlanta, GA on 8/20/2023 (GigaSouth)
  }

  # Allow all https traffic inbound from internet .
  ingress {
    from_port = 443
    protocol = "TCP"
    to_port = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    protocol = "-1"
    to_port = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_iam_role" "ec2_iam_role" {
  name = "EC2-ATO-Build-Server-Role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": 
  [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": ["ec2.amazonaws.com"]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
  EOF
}

resource "aws_iam_role_policy" "ec2_iam_role_policy" {
  name = "EC2-ATO-Build-Server-Policy"
  role = aws_iam_role.ec2_iam_role.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": 
  [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:*", "cloudwatch:*", "logs:*", "s3:*"
        ],
      "Resource": "*"
    }
  ]
}
  EOF
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "EC2-ATO-Build-Server-Instance-Profile"
  role = aws_iam_role.ec2_iam_role.name
}

resource "aws_key_pair" "ssh_key" {
  key_name = "build_server_ssh_key"
  public_key = file("~/.ssh/build_id_rsa.pub")
}

resource "aws_launch_configuration" "ato_build_server_launch_config" {
  name = "ATO-Build-Server-Launch-Config"
  image_id = data.aws_ami.aws_linux_23.id
  instance_type = "t2.micro"
  iam_instance_profile = aws_iam_instance_profile.ec2_instance_profile.name
  security_groups = [aws_security_group.ato_build_server_sg.name]
  key_name = aws_key_pair.ssh_key.key_name
  user_data = <<EOF
}

