terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5"
    }
  }

}

provider "aws" {
  profile = "ato-tf"
  region  = "us-east-1"
}

resource "aws_s3_bucket" "ato-web-bucket" {
  bucket = "ato-web-bucket-aborttoorbit.com"
  acl    = "public-read"
  tags = {
    Name        = "ato-web-bucket"
    Environment = "Production"
  }

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "404.html"
  }
}
