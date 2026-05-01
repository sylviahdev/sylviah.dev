from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional

app = FastAPI(title="Portfolio Backend Service")

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your portfolio URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    details: str

class Project(BaseModel):
    id: int
    title: str
    problem: str
    solution: str
    tools: List[str]
    result: str
    link: str

@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    # Here you would typically integrate with SendGrid, SES, or a DB
    # For now, we simulate a successful processing
    print(f"Received inquiry from: {form.name} ({form.email})")
    return {"status": "success", "message": "Inquiry received. We'll be in touch."}

@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    return [
        {
            "id": 1,
            "title": "M-Unit Media Engine",
            "problem": "Manual booking processes causing lead drop-off.",
            "solution": "Full-stack automation with Daraja API integration.",
            "tools": ["Next.js", "Python", "FastAPI"],
            "result": "45% conversion increase.",
            "link": "https://munitmediawebsite-msxp.vercel.app/"
        }
    ]
