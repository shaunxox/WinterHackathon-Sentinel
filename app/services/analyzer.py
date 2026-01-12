def generate_score(file_count, readme_info):
    score = 0
    reasons = []

    # README presence
    if readme_info["found"]:
        score += 40
        reasons.append("README.md found")
    else:
        reasons.append("README.md missing")

    # README quality
    if readme_info["found"]:
        if readme_info["length"] >= 500:
            score += 30
            reasons.append("README has sufficient detail")
        else:
            score += 10
            reasons.append("README exists but is too short")

    # Project structure
    if file_count >= 5:
        score += 20
        reasons.append("Project has reasonable file structure")
    else:
        reasons.append("Project is very small")

    # Cap score at 100
    return {
        "score": min(score, 100),
        "reasons": reasons
    }
