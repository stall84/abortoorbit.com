data "aws_acm_certificate" "ato_issued" {
  domain   = "aborttoorbit.com"
  statuses = ["ISSUED"]
}
