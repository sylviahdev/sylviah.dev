"use client";
import Image from "next/image";
import { useState } from "react";
import { Github, ExternalLink, Book, Mail, Phone, Linkedin, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const sectionAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Monitor className="w-6 h-6" />
            </button>
          </div>
        </div>

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
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Sylviah Rutto</h1>
            <p className="text-blue-600 font-medium mt-1">Frontend & Fullstack Developer</p>
            <div className="text-gray-600 text-sm space-y-1">
              <p><Mail className="inline w-4 h-4 mr-1" /> sylviah.rutto@gmail.com</p>
              <p><Phone className="inline w-4 h-4 mr-1" /> +254758668360</p>
              <p><Linkedin className="inline w-4 h-4 mr-1" /> <a href="https://www.linkedin.com/in/sylviah-rutto-a7a17378/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sylviah-rutto-a7a17378</a></p>
              <p><Github className="inline w-4 h-4 mr-1" /> <a href="https://github.com/sylviahdev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/sylviahdev</a></p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <motion.section id="summary" variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-2 bg-blue-50 p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-blue-200 pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Frontend and Fullstack Developer specializing in building modern, responsive web applications using React, Next.js, and TypeScript. Experienced in backend development with Python, Django, and Flask, integrating APIs and building scalable, production-ready solutions. Passionate about creating intelligent, automation-driven systems and AI-powered applications.
          </p>
        </motion.section>

        {/* Technical Skills */}
        <motion.section id="skills" variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-2 bg-green-50 p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-green-200 pb-1">Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 text-sm md:text-base">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Projects</h2>

          {/* Project Cards */}
          {[
            {
              title: "Task Tracker — React & Local Storage",
              desc: "Built a task management application with CRUD functionality and persistent local storage, improving task tracking efficiency and demonstrating state management using React hooks.",
              tech: "React, JavaScript, Local Storage, Tailwind CSS",
              live: "https://task-tracker-eight-mu.vercel.app/",
              code: "https://github.com/sylviahdev/react-hub",
            },
            {
              title: "Weather App — React & API Integration",
              desc: "Developed a weather application displaying real-time weather data using external APIs.",
              tech: "React, REST API, JavaScript, CSS",
              live: "https://weathernow-wine.vercel.app/",
              code: "https://github.com/sylviahdev/weathertoday",
            },
            {
              title: "Professional Portfolio — Next.js & TypeScript",
              desc: "Designed and developed a responsive portfolio using Next.js and TypeScript.",
              tech: "Next.js, TypeScript, React, Tailwind CSS",
              code: "https://github.com/sylviahdev/myportfolio",
            },
            {
              title: "Blog API — Django REST Framework",
              desc: "Built a backend API for a blog platform.",
              tech: "Python, Django, Django REST Framework, PostgreSQL",
              code: "https://github.com/sylviahdev/django-blog-api",
            },
            {
              title: "Automation Tool — Python & Flask",
              desc: "Built an automation web tool with Flask, integrating Python scripts to handle data processing.",
              tech: "Python, Flask",
              code: "https://github.com/sylviahdev/flask-automation",
            },
          ].map((p, i) => (
            <div key={i} className="transition transform hover:scale-105 hover:shadow-lg p-4 rounded bg-white">
              <h3 className="font-bold text-gray-900">{p.title}</h3>
              <p className="text-gray-700 text-sm mt-1">{p.desc}</p>
              <p className="text-gray-700 text-sm font-medium mt-1">Technologies: {p.tech}</p>
              {p.live && (
                <p className="text-gray-700 text-sm mt-1">
                  Live: <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Live</a> |{" "}
                  Code: <a href={p.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Code</a>
                </p>
              )}
              {!p.live && (
                <p className="text-gray-700 text-sm mt-1">
                  Code: <a href={p.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Code</a>
                </p>
              )}
            </div>
          ))}
        </motion.section>

        {/* Education */}
   <motion.section
  id="education"
  variants={sectionAnimation}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  className="space-y-4 bg-purple-50 p-4 rounded shadow-sm"
>
  <h2 className="text-xl font-semibold text-gray-800 border-b border-purple-200 pb-1">Education</h2>
  <ul className="text-gray-700 text-sm md:text-base space-y-2">
    <li><Book className="inline w-4 h-4 mr-1" /> Moringa School – Software Development – 2019</li>
    <li><Book className="inline w-4 h-4 mr-1" /> Kisii University – Bachelor of Information Technology – 2016</li>
    <li><Book className="inline w-4 h-4 mr-1" /> Shepherds Computer College – Certificate in Computer Packages – 2011</li>
  </ul>
</motion.section>

        {/* Tools & Deployment */}
        <motion.section variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-2 bg-yellow-50 p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-yellow-200 pb-1">Tools & Deployment</h2>
          <ul className="text-gray-700 text-sm md:text-base space-y-1">
            <li>Git & GitHub</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </motion.section>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sylviah Rutto
        </div>

      </div>
    </main>
  );
}