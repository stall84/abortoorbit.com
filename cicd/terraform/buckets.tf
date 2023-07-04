data "aws_canonical_user_id" "current" {}

resource "aws_s3_bucket" "ato-web-bucket" {
  bucket = "ato-web-bucket-aborttoorbit.com"
  tags = {
    Name        = "ato-web-bucket"
    Environment = "Production"
    Description = "Main static-site bucket for Abort To Orbit"
  }

}

resource "aws_s3_bucket" "ato-cf-logging-bucket" {
  bucket = "ato-cf-logging-bucket-aborttoorbit.com"
  tags = {
    Name        = "ato-cf-logging-bucket"
    Environment = "Production"
    Description = "Logging bucket for CloudFront"
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

# resource "aws_s3_bucket_ownership_controls" "ato-cf-logging-bucket-ownership" {
#   bucket = aws_s3_bucket.ato-cf-logging-bucket.id

#   rule {
#     object_ownership = "BucketOwnerPreferred"
#   }
# }

resource "aws_s3_bucket_acl" "ato-cf-logging-bucket-acl" {
  bucket = aws_s3_bucket.ato-cf-logging-bucket.id
  access_control_policy {
    owner {
      id = data.aws_canonical_user_id.current.id
    }
    grant {
      grantee {
        id   = data.aws_canonical_user_id.current.id
        type = "CanonicalUser"
      }
      permission = "FULL_CONTROL"
    }

    grant {
      grantee {
        id   = "c4c1ede66af53448b93c283ce9448c4ba468c9432aa01d700d3878632f77d2d0"
        type = "CanonicalUser"
      }
      permission = "FULL_CONTROL"
    }
  }

}

resource "aws_s3_bucket_lifecycle_configuration" "ato-cf-logging-bucket-lifecycle" {
  bucket = aws_s3_bucket.ato-cf-logging-bucket.id

  rule {
    id     = "expiration"
    status = "Enabled"

    expiration {
      days = var.cf_log_retention_days
    }

  }
}

# We'll need to use a json map for what file extension matches to which mime type
# We'll then loop over and recursively upload all files in the public directory
# after they have had their correct Content-Type set

locals {
  mime_types = jsondecode(file("${path.module}/utils/mime.json"))
}

resource "aws_s3_object" "ato-static-objects" {
  for_each     = fileset("${path.module}/../../public", "**")
  bucket       = aws_s3_bucket.ato-web-bucket.id
  key          = each.value
  source       = "${path.module}/../../public/${each.value}"
  etag         = filemd5("${path.module}/../../public/${each.value}")
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}
