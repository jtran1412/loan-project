FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY etl_flow.py ./
CMD ["python", "etl_flow.py"] 