# Verity

**Verity** is an AI-powered documentation quality checker that analyzes project repositories or uploaded ZIP files to evaluate the completeness, clarity, and reliability of technical documentation. It helps developers, students, and hackathon teams quickly understand whether a project is well-documented and ready for real-world use.

---

##  Problem Statement

Many projects fail to communicate their purpose and usage clearly due to poor or incomplete documentation. Reviewers, judges, and new contributors often struggle to understand setup steps, features, or limitations.

**Verity solves this by automatically validating documentation quality.**

---

##  Solution Overview

Verity scans project documentation (such as `README.md`) and checks for the presence, structure, and clarity of essential sections. It provides instant feedback and a quality score.

---

##  Key Features

*  **README Structure Validation** – Checks for mandatory sections like:

  * Project Description
  * Installation Steps
  * Usage Instructions
  * Tech Stack
  * License
*  **AI-based Content Analysis** – Evaluates clarity and relevance of documentation text
*  **ZIP File Support** – Upload and analyze projects without GitHub integration
*  **Fast & Lightweight** – No database required
*  **Beginner-Friendly** – Useful for students, hackathons, and reviewers

---

##  Tech Stack

* **Frontend:** HTML, CSS, JavaScript (or React – optional)
* **Backend:** Python (Flask)
* **AI/NLP:** Rule-based + lightweight AI logic
* **Deployment:** Local / Manual deployment (ZIP-based)

---

##  Project Structure

```
verity/
├── backend/
│   ├── app.py
│   └── analyzer.py
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── sample_project.zip
└── README.md
```

---

##  Installation & Setup

### Prerequisites

* Python 3.x

### Steps

```bash
# Clone the repository
git clone <repository-url>

# Navigate to backend
cd backend

# Install dependencies
pip install flask

# Run the server
python app.py
```

Open `index.html` from the frontend folder in your browser.

---

##  How It Works

1. User uploads a ZIP file or README
2. Backend extracts and scans documentation
3. Verity checks for required sections
4. AI logic analyzes content quality
5. Results and score are displayed

---

##  Use Cases

* Hackathon project evaluation
* Student project review
* Open-source contribution checks
* Documentation quality audits

---

##  Limitations

* No real-time GitHub integration
* AI analysis is lightweight (not LLM-based)
* Works best with English documentation

---

##  Future Enhancements

* GitHub repository integration
* Advanced AI scoring model
* PDF documentation support
* Exportable reports

---

## License

This project is licensed under the MIT License.

---

## Team Members
*Shaun Joshua Sequeira
*Shreyas Bhat
*Nidhi Kulal
*Shreesha A S


---

##  Acknowledgements

Built as part of a hackathon project to improve software documentation quality.


