# --- 1. Build Angular frontend ---
FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build -- --output-path=dist

# --- 2. Build Flask backend ---
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend files
COPY backend/ backend/
# Copy Angular build output
COPY --from=frontend-build /app/frontend/dist/ frontend/dist/

# Set environment variable for Flask
ENV FLASK_APP=backend/main.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000

# Expose port
EXPOSE 5000

# Start Flask server
CMD ["flask", "run"]
