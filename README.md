# Affirm Loan Performance Analyzer & Funding Optimizer

A full-stack portfolio project simulating Affirm's core business: analyzing and predicting consumer loan performance, structuring and pricing debt funding deals, and optimizing funding strategies using data-driven models and automation.

## Features
- **Loan Performance Dashboard:** Upload/view loan data, visualize performance, predict defaults.
- **Funding Deal Structuring:** Simulate and price debt funding deals, optimize asset-liability management.
- **Automation & ETL:** Prefect pipelines for data ingestion, cleaning, and model retraining.
- **Backend API:** FastAPI endpoints for data, models, and optimization.
- **Frontend:** React + TypeScript + Chakra UI + D3.js dashboard.
- **Database:** PostgreSQL for persistent storage.
- **Deployment:** Docker, AWS-ready, CI/CD with GitHub Actions.

## Tech Stack
- **Backend:** Python (FastAPI)
- **Data/ML:** Pandas, NumPy, Scikit-learn, XGBoost
- **Automation:** Prefect
- **Frontend:** React, TypeScript, Chakra UI, D3.js
- **Database:** PostgreSQL
- **Deployment:** Docker, AWS (ECS, RDS, ECR), GitHub Actions

## Setup (Local)

### Prerequisites
- Docker & Docker Compose
- Node.js (for frontend dev)
- Python 3.9+ (for backend/automation dev)

### Quick Start
```bash
git clone <this-repo-url>
cd loan
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/docs
- Prefect UI: http://localhost:4200 (if enabled)

## 🚀 AWS Production Deployment

This project is ready for production deployment on AWS:

- **Containers:** Dockerized backend, frontend, and ETL services.
- **Orchestration:** Deployable to Amazon ECS (Fargate).
- **Database:** Amazon RDS (PostgreSQL).
- **CI/CD:** GitHub Actions builds and pushes images to ECR, then deploys to ECS.
- **Secrets:** Managed via AWS SSM Parameter Store.
- **Monitoring:** CloudWatch for logs and metrics.
- **IaC:** All infra defined in `infra/terraform/` (VPC, ECS, ECR, RDS, IAM, SSM).

### Architecture

```mermaid
graph TD
  subgraph VPC
    FE[Frontend (ECS Service)]
    BE[Backend (ECS Service)]
    ETL[Prefect/ETL (ECS Service)]
    DB[(RDS PostgreSQL)]
  end
  FE -- API Calls --> BE
  BE -- DB Access --> DB
  ETL -- DB Access --> DB
  FE -- S3/CloudFront (optional) --> User
  BE -- CloudWatch Logs --> CW[CloudWatch]
  ETL -- CloudWatch Logs --> CW
```

### Deploy Steps
1. **Provision AWS resources:**
   ```bash
   cd infra/terraform
   terraform init
   terraform apply
   ```
2. **Build & push Docker images:**
   - Handled by GitHub Actions on push to `main` (see `.github/workflows/aws-deploy.yml`).
3. **Update ECS services:**
   - Handled by GitHub Actions after image push.

## Folder Structure
- `backend/` — FastAPI app, ML, DB
- `frontend/` — React app
- `data/` — Sample datasets
- `automation/` — Prefect ETL flows
- `infra/terraform/` — AWS Infrastructure as Code

## License
MIT 