from fastapi import FastAPI
from app.api.analyze import router as analyze_router

app = FastAPI(title="Verity Backend")

app.include_router(analyze_router)

@app.get("/")
def root():
    return {"message": "Verity backend is running"}
