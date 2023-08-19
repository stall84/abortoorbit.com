# data "aws_ami" "aws_ubuntu23" {
#   most_recent = true

#   filter {
#     name   = "name"
#     values = ["al2023-ami-2023*"]
#   }

#   filter {
#     name   = "virtualization-type"
#     values = ["hvm"]
#   }

#   filter {
#     name   = "root-device-type"
#     values = ["ebs"]
#   }

#   filter {
#     name   = "architecture"
#     values = ["x86_64"]
#   }
# }
