resource "aws_cloudfront_distribution" "ato-web-distribution" {
  origin {
    domain_name = aws_s3_bucket.ato-web-bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.ato-web-bucket.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "ato-web-distribution"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.ato-web-bucket.id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.ato_issued.arn
    ssl_support_method  = "sni-only"
  }

  tags = {
    Environment = "Production"
  }
}
