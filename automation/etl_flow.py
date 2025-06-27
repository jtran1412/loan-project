from prefect import flow, task
import pandas as pd
import requests

@task
def load_data(path):
    return pd.read_csv(path)

@task
def clean_data(df):
    # Placeholder: drop NA, convert types, etc.
    return df.dropna()

@task
def insert_loans(df):
    for _, row in df.iterrows():
        payload = {
            'amount': row['amount'],
            'term': row['term'],
            'rate': row['rate'],
            'status': row['status'],
            'defaulted': bool(row['defaulted'])
        }
        requests.post('http://backend:8000/loans/', json=payload)

@task
def summarize_data(df):
    print(df.describe())
    print(df['defaulted'].value_counts())

@task
def retrain_model(df):
    print("Retraining model... (placeholder)")

@flow
def etl_flow():
    df = load_data("../data/sample_loans.csv")
    df_clean = clean_data(df)
    summarize_data(df_clean)
    insert_loans(df_clean)
    retrain_model(df_clean)

if __name__ == "__main__":
    etl_flow() 