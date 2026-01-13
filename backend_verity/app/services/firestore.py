import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase only once
if not firebase_admin._apps:
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)

db = firestore.client()

def save_result(result):
    db.collection("analysis_results").add({
        "score": result["score"],
        "missing_sections": result["missing_sections"]
    })
