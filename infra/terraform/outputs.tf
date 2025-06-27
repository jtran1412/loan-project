output "backend_service_name" {
  value = aws_ecs_service.backend.name
}

output "frontend_service_name" {
  value = aws_ecs_service.frontend.name
}

output "etl_service_name" {
  value = aws_ecs_service.etl.name
}

output "rds_endpoint" {
  value = aws_db_instance.main.endpoint
}

output "ecr_backend_url" {
  value = aws_ecr_repository.backend.repository_url
}

output "ecr_frontend_url" {
  value = aws_ecr_repository.frontend.repository_url
}

output "ecr_etl_url" {
  value = aws_ecr_repository.etl.repository_url
} 