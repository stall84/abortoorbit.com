resource "aws_s3_bucket" "ato-web-bucket" {
  bucket = "ato-web-bucket-aborttoorbit.com"
  # acl    = "public-read"
  tags = {
    Name        = "ato-web-bucket"
    Environment = "Production"
  }

}

resource "aws_s3_bucket_website_configuration" "ato-site-config" {
  bucket = aws_s3_bucket.ato-web-bucket.id

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_public_access_block" "ato-web-bucket-public-access" {
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

resource "aws_s3_object" "ato-static-objects" {
  for_each = fileset("${path.module}/../../public", "**")
  bucket   = aws_s3_bucket.ato-web-bucket.id
  key      = each.value
  source   = "${path.module}/../../public/${each.value}"
  etag     = filemd5("${path.module}/../../public/${each.value}")
}
