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
  description = "Security group for ATO Build Server (SSH)"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["162.255.89.199"] // Home Public IP, Atlanta, GA on 8/20/2023 (GigaSouth)
  }
}

resource "aws_instance" "ato_build_server_instance" {
  //
}
