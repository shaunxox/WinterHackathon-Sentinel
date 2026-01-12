from fastapi import APIRouter, UploadFile, File
from app.services.zip_handler import extract_zip
from app.services.readme_parser import find_and_read_readme
from app.services.analyzer import generate_score
from app.services.pdf_generator import generate_pdf_report
import shutil
import os

router = APIRouter()

@router.post("/analyze")
async def analyze_zip(file: UploadFile = File(...)):
    temp_dir, extract_path = extract_zip(file)

    file_count = sum(len(files) for _, _, files in os.walk(extract_path))
    readme_info = find_and_read_readme(extract_path)
    analysis = generate_score(file_count, readme_info)

    # Prepare data for PDF
    report_data = {
        "files_found": file_count,
        "readme": readme_info,
        "analysis": analysis
    }

    pdf_path = generate_pdf_report(report_data)

    shutil.rmtree(temp_dir)

    return {
        "analysis": report_data,
        "pdf_generated": True,
        "pdf_path": pdf_path
    }

