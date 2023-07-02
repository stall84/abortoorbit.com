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

resource "aws_s3_bucket_block_public_access" "ato-web-aws_s3_bucket_public_access" {
  bucket = aws_s3_bucket.ato-web-bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

data "aws_iam_policy_document" "ato-web-bucket-policy-document" {
  // Allow public read of all objects in the bucket
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.ato-web-bucket.arn}/*"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    effect = "Allow"
  }
}

resource "aws_s3_bucket_policy" "ato-web-bucket-policy" {
  bucket = aws_s3_bucket.ato-web-bucket.id
  policy = data.aws_iam_policy_document.ato-web-bucket-policy-document.json
}

locals {
  https = data.aws_acm_certificate.ato_issued.arn != ""
}
