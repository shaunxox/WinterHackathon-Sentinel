from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import tempfile
import os
import uuid

def generate_pdf_report(report_data):
    # Create a cross-platform temp directory
    temp_dir = tempfile.gettempdir()

    filename = f"verity_report_{uuid.uuid4()}.pdf"
    file_path = os.path.join(temp_dir, filename)

    c = canvas.Canvas(file_path, pagesize=A4)
    width, height = A4

    y = height - 50

    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, y, "Verity – Documentation Analysis Report")
    y -= 40

    c.setFont("Helvetica", 11)
    c.drawString(50, y, f"Files found: {report_data['files_found']}")
    y -= 20

    c.drawString(50, y, f"README found: {report_data['readme']['found']}")
    y -= 20

    c.drawString(50, y, f"README length: {report_data['readme'].get('length', 0)}")
    y -= 30

    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, f"Score: {report_data['analysis']['score']}")
    y -= 30

    c.setFont("Helvetica", 11)
    c.drawString(50, y, "Reasons:")
    y -= 20

    for reason in report_data['analysis']['reasons']:
        c.drawString(70, y, f"- {reason}")
        y -= 15

    c.save()

    return file_path

