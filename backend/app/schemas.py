from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class LoanBase(BaseModel):
    amount: float
    term: int
    rate: float
    status: Optional[str] = 'active'
    defaulted: Optional[bool] = False

class LoanCreate(LoanBase):
    pass

class Loan(LoanBase):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True

class DealBase(BaseModel):
    name: str
    tranche: str
    rate: float
    amount: float

class DealCreate(DealBase):
    pass

class Deal(DealBase):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True 