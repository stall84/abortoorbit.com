terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5"
    }
  }

  backend "s3" {
    bucket = "ato-tf-state"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }

}
