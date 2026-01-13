import zipfile
import tempfile
import os
from app.services.analyzer import analyze_project

async def handle_zip(file):
    with tempfile.TemporaryDirectory() as temp_dir:
        zip_path = os.path.join(temp_dir, file.filename)

        # Save uploaded ZIP
        with open(zip_path, "wb") as f:
            f.write(await file.read())

        # Validate ZIP
        if not zipfile.is_zipfile(zip_path):
            return {"error": "Invalid or corrupted ZIP file"}

        # Extract ZIP
        with zipfile.ZipFile(zip_path, "r") as zip_ref:
            zip_ref.extractall(temp_dir)

        # Analyze extracted project
        result = analyze_project(temp_dir)

        return result

