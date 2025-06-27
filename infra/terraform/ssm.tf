resource "aws_ssm_parameter" "db_url" {
  name  = "/${var.project_name}/DATABASE_URL"
  type  = "SecureString"
  value = "postgresql://postgres:${var.db_password}@${aws_db_instance.main.address}:5432/loans"
} 