variable "aws_region" {
  description = "AWS region to deploy to"
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name prefix"
  default     = "affirm-loan"
}

variable "vpc_cidr" {
  description = "VPC CIDR block"
  default     = "10.0.0.0/16"
}

variable "db_password" {
  description = "RDS DB password"
  type        = string
  sensitive   = true
}

variable "backend_image_tag" {
  description = "Backend Docker image tag"
  default     = "latest"
}

variable "frontend_image_tag" {
  description = "Frontend Docker image tag"
  default     = "latest"
}

variable "etl_image_tag" {
  description = "ETL Docker image tag"
  default     = "latest"
} 