import os

IMPORTANT_KEYWORDS = [
    "install",
    "installation",
    "setup",
    "run",
    "usage",
    "requirements"
]

def analyze_project(project_path):
    readme_path = None

    # Find README.md
    for root, dirs, files in os.walk(project_path):
        for file in files:
            if file.lower() == "readme.md":
                readme_path = os.path.join(root, file)
                break

    if not readme_path:
        return {
            "score": 0,
            "error": "README.md not found"
        }

    # Read README content
    try:
        with open(readme_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read().lower()
    except Exception:
        return {
            "score": 0,
            "error": "Unable to read README"
        }

    missing_keywords = []

    for keyword in IMPORTANT_KEYWORDS:
        if keyword not in content:
            missing_keywords.append(keyword)

    score = 100 - (len(missing_keywords) * 15)
    score = max(score, 0)

    result = {
        "score": score,
        "missing_sections": missing_keywords,
        "readme_found": True
    }

    # 🔥 SAVE TO FIRESTORE (safe + non-crashing)
    try:
        from app.services.firestore import save_result
        save_result(result)
    except Exception as e:
        print("FIRESTORE ERROR:", e)

    return result

