from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas, crud, database, ml
from typing import List
import pandas as pd

app = FastAPI(title="Affirm Loan Performance Analyzer & Funding Optimizer")

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Affirm Loan Performance Analyzer API"}

# Loan Endpoints
@app.post("/loans/", response_model=schemas.Loan)
def create_loan(loan: schemas.LoanCreate, db: Session = Depends(get_db)):
    return crud.create_loan(db, loan)

@app.get("/loans/", response_model=List[schemas.Loan])
def list_loans(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_loans(db, skip=skip, limit=limit)

# Deal Endpoints
@app.post("/deals/", response_model=schemas.Deal)
def create_deal(deal: schemas.DealCreate, db: Session = Depends(get_db)):
    return crud.create_deal(db, deal)

@app.get("/deals/", response_model=List[schemas.Deal])
def list_deals(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_deals(db, skip=skip, limit=limit)

# ML Prediction Endpoint (dummy, expects loan features as JSON)
ml_model = ml.LoanDefaultModel()

@app.post("/predict_default/")
def predict_default(features: dict):
    df = pd.DataFrame([features])
    try:
        prob = ml_model.predict(df)[0]
    except Exception:
        prob = 0.1  # fallback if not trained
    return {"default_probability": float(prob)}

# Placeholder routers (to be implemented)
# from . import loans, models, deals
# app.include_router(loans.router)
# app.include_router(models.router)
# app.include_router(deals.router) 