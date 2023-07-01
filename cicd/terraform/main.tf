terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5"
    }
  }

}

provider "aws" {

  region = "us-east-1"
}

resource "aws_s3_bucket" "ato-web-bucket" {

}
