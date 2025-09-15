# Affirm Loan Performance Analyzer & Funding Optimizer

## Section 1: Loan Management
- Input:
- Amount: Loan amount in dollars (e.g., 1000)
- Term: Loan duration in months (e.g., 12)
- Rate: Interest rate as decimal (e.g., 0.15 for 15%)
- Output:
- Loan Table: Shows all loans with their status, creation date, and default status
- Performance Analytics: Visual representation of loan portfolio

## Section 2: Deal Structuring
- Input:
- Name: Deal identifier (e.g., "Q1 2024 Senior Funding")
- Tranche: Deal type (e.g., "Senior", "Mezzanine", "Subordinate")
- Rate: Funding rate as decimal (e.g., 0.08 for 8%)
- Amount: Funding amount in dollars (e.g., 100000)
- Output:
- Deal Table: Shows all structured deals with pricing and terms
- Risk Assessment: Analysis of deal structure and profitability

## Section 3: ML Default Prediction
- Input:
- Amount: Loan amount to analyze (e.g., 1500)
- Term: Loan term in months (e.g., 18)
- Rate: Interest rate as decimal (e.g., 0.20)
- Output:
- Default Probability: Percentage chance the loan will default (e.g., 23.45%)
- Risk Score: ML-generated risk assessment

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
