locals {
  ato-web-distro-origin-id = "ato-web-bucket-origin"
}

resource "aws_cloudfront_distribution" "ato-web-distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.ato-site-config.website_endpoint
    origin_id   = local.ato-web-distro-origin-id

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }

  }



  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2"
  comment             = "ato-web-distribution"
  default_root_object = "index.html"

  aliases = [
    var.domain_name,
    # var.www_domain_name
  ]

  logging_config {
    include_cookies = false
    bucket          = aws_s3_bucket.ato-cf-logging-bucket.bucket_domain_name
    prefix          = "ato-web-cf-logs/"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.ato-web-distro-origin-id
    compress         = true

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
