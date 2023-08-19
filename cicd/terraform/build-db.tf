resource "aws_dynamodb_table" "ato_build_data_db" {
  name           = "ato_build_data"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "JobId"


  attribute {
    name = "JobId"
    type = "S"
  }
  attribute {
    name = "JobStatus"
    type = "S"
  }
  attribute {
    name = "CreatedAt"
    type = "N"
  }
  attribute {
    name = "StartedAt"
    type = "N"
  }
  attribute {
    name = "CompletedAt"
    type = "N"
  }
  attribute {
    name = "Duration"
    type = "N"
  }
  attribute {
    name = "AuthorName"
    type = "S"
  }
  attribute {
    name = "AuthorEmail"
    type = "S"
  }


  tags = {
    Name = "ato_build_server"
  }
}

resource "aws_dynamodb_table" "ato_build_logs_db" {
  name           = "ato_build_logs"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "BuildId"


  attribute {
    name = "BuildId"
    type = "S"
  }
  attribute {
    name = "Timestamp"
    type = "N"
  }
  attribute {
    name = "Message"
    type = "S"
  }
  attribute {
    name = "Command"
    type = "S"
  }
  attribute {
    name = "SourceStream"
    type = "S"
  }

  tags = {
    Name = "ato_build_server"
  }

}
