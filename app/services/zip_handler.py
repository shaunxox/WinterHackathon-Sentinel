import zipfile
import os
import tempfile
import shutil

def extract_zip(upload_file):
    temp_dir = tempfile.mkdtemp()

    zip_path = os.path.join(temp_dir, upload_file.filename)

    with open(zip_path, "wb") as f:
        f.write(upload_file.file.read())

    extract_path = os.path.join(temp_dir, "extracted")
    os.makedirs(extract_path, exist_ok=True)

    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(extract_path)

    return temp_dir, extract_path
