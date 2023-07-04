
variable "domain_name" {
  type        = string
  description = "The domain name to use for the website"
}

variable "www_domain_name" {
  type        = string
  description = "The domain name to use for the www redirect"
}

variable "cf_log_retention_days" {
  type        = number
  description = "The number of days to retain cloudfront logs"
  default     = 28
}
