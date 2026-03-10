"use client";
import Image from "next/image";
import { Github, ExternalLink, Code, Book, Menu } from "lucide-react";
import { useState } from "react";

export default function CVPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const downloadPDF = async () => {
    if (typeof window !== "undefined") {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("cv-content");
      if (element) {
        html2pdf()
          .from(element)
          .set({
            margin: 0.5,
            filename: "Sylviah_Rutto_CV.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          })
          .save();
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          <div className="font-bold text-lg text-gray-900 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Sylviah Rutto CV
          </div>
          <div className="hidden md:flex gap-4 text-sm">
            <button onClick={() => scrollTo("summary")} className="hover:text-blue-600 transition">Summary</button>
            <button onClick={() => scrollTo("skills")} className="hover:text-blue-600 transition">Skills</button>
            <button onClick={() => scrollTo("projects")} className="hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollTo("education")} className="hover:text-blue-600 transition">Education</button>
            <button onClick={downloadPDF} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Download PDF
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow px-4 py-2 space-y-2">
            <button onClick={() => scrollTo("summary")} className="block w-full text-left hover:text-blue-600">Summary</button>
            <button onClick={() => scrollTo("skills")} className="block w-full text-left hover:text-blue-600">Skills</button>
            <button onClick={() => scrollTo("projects")} className="block w-full text-left hover:text-blue-600">Projects</button>
            <button onClick={() => scrollTo("education")} className="block w-full text-left hover:text-blue-600">Education</button>
            <button onClick={downloadPDF} className="block w-full text-left text-white bg-blue-600 px-2 py-1 rounded hover:bg-blue-700">Download PDF</button>
          </div>
        )}
      </nav>

      {/* CV Content */}
      <div id="cv-content" className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-10 space-y-8 mt-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b-2 border-blue-100 pb-6">
          <Image src="/profile.jpg" alt="Sylviah Rutto" width={150} height={150} className="rounded-full shadow-lg" priority />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Sylviah Rutto</h1>
            <p className="text-blue-600 font-medium mt-1">Frontend & Fullstack Developer</p>
            <div className="mt-3 text-gray-600 text-sm space-y-1">
              <p>Email: your@email.com</p>
              <p>Phone: +254 XXX XXX XXX</p>
              <p>Location: Nairobi, Kenya</p>
              <p><Github className="inline w-4 h-4 mr-1" /><a href="https://github.com/sylviahdev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/sylviahdev</a></p>
              <p><ExternalLink className="inline w-4 h-4 mr-1" /><a href="https://www.linkedin.com/in/sylviah-rutto-a7a17378/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sylviah-rutto-a7a17378</a></p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section id="summary" className="space-y-2 bg-blue-50 p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-blue-200 pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Frontend and Fullstack Developer specializing in building modern, responsive web applications using React, Next.js, and TypeScript. Experienced in backend development with Python, Django, and Flask, integrating APIs and building scalable, production-ready solutions. Passionate about creating intelligent, automation-driven systems and AI-powered applications.
          </p>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="space-y-2 bg-green-50 p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-green-200 pb-1">Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 text-sm md:text-base">
            <li><Code className="inline w-4 h-4 mr-1" /> React.js</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Next.js</li>
            <li><Code className="inline w-4 h-4 mr-1" /> TypeScript</li>
            <li><Code className="inline w-4 h-4 mr-1" /> JavaScript (ES6+)</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Tailwind CSS</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Python</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Django</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Flask</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Node.js</li>
            <li><Code className="inline w-4 h-4 mr-1" /> REST APIs</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Git & GitHub</li>
            <li><Code className="inline w-4 h-4 mr-1" /> Responsive Design</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Projects</h2>

          {/* Project cards with hover effect */}
          {[
            {
              title: "Task Tracker – React & Local Storage",
              desc: "Built a task management app supporting CRUD operations and persistent local storage.",
              live: "https://task-tracker-eight-mu.vercel.app/",
              code: "https://github.com/sylviahdev/react-hub",
            },
            {
              title: "Weather App – React & API Integration",
              desc: "Developed a weather application using React and external APIs to display real-time weather data dynamically.",
              live: "https://weathernow-wine.vercel.app/",
              code: "https://github.com/sylviahdev/weathertoday",
            },
            {
              title: "Professional Portfolio – Next.js & TypeScript",
              desc: "Designed and developed a responsive portfolio using Next.js and TypeScript.",
              code: "https://github.com/sylviahdev/myportfolio",
            },
            {
              title: "Blog API – Python, Django & REST",
              desc: "Developed a backend API for a blog system using Django REST framework.",
              code: "https://github.com/sylviahdev/django-blog-api",
            },
            {
              title: "Automation Tool – Python & Flask",
              desc: "Built an automation web tool with Flask, integrating Python scripts to handle data processing.",
              code: "https://github.com/sylviahdev/flask-automation",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="transition transform hover:scale-105 hover:shadow-lg p-4 rounded bg-white"
            >
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-700 text-sm">
                {p.desc}{" "}
                {p.live && (
                  <>
                    Live demo:{" "}
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Live
                    </a>{" "} |{" "}
                  </>
                )}
                GitHub:{" "}
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Code
                </a>
              </p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section id="education" className="space-y-2 bg-purple-50 p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-purple-200 pb-1">Education</h2>
          <ul className="text-gray-700 text-sm md:text-base space-y-1">
            <li><Book className="inline w-4 h-4 mr-1" /> Kisii University - Degree </li>
            <li><Book className="inline w-4 h-4 mr-1" /> Moringa School - Software Development</li>
            <li><Book className="inline w-4 h-4 mr-1" /> Shepherds Computer College </li>
            <li><Book className="inline w-4 h-4 mr-1" /> Ruth Kiptui Girls Highschool - KCSE</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sylviah Rutto
        </div>
      </div>
    </main>
  );
}