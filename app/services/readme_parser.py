import os

def find_and_read_readme(extract_path):
    for root, dirs, files in os.walk(extract_path):
        for file in files:
            if file.lower() == "readme.md":
                readme_path = os.path.join(root, file)
                with open(readme_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                return {
                    "found": True,
                    "path": readme_path,
                    "length": len(content),
                    "preview": content[:300]
                }

    return {
        "found": False,
        "path": None,
        "length": 0,
        "preview": ""
    }
