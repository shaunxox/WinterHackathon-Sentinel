from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.zip_handler import handle_zip

router = APIRouter(prefix="/analyze", tags=["Analysis"])

@router.post("/")
async def analyze_project(file: UploadFile = File(...)):
    if not file.filename.endswith(".zip"):
        raise HTTPException(status_code=400, detail="Only ZIP files allowed")

    result = await handle_zip(file)
    return result
