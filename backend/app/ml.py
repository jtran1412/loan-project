import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier

# Placeholder ML pipeline
class LoanDefaultModel:
    def __init__(self):
        self.model = RandomForestClassifier()
        self.is_trained = False

    def train(self, df: pd.DataFrame):
        X = df.drop(['defaulted'], axis=1)
        y = df['defaulted']
        self.model.fit(X, y)
        self.is_trained = True

    def predict(self, df: pd.DataFrame):
        if not self.is_trained:
            raise Exception("Model not trained.")
        return self.model.predict_proba(df)[:, 1] 