"use client";
import Image from "next/image";
import { useState } from "react";
import { Github, ExternalLink, Mail, Linkedin, Menu, X, ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 }, // Reduced y for better mobile stability
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Smoother ease
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1, // Slightly increased stagger and delay
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export default function CVPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Framer Motion hooks for scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] dark:bg-[#0f0f0d] overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#fafaf8]/80 dark:bg-[#0f0f0d]/80 border-b border-[#e5e0d9] dark:border-[#2a2a26] z-50 print:hidden">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-playfair font-semibold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Sylviah
          </motion.div>

          <div className="hidden md:flex gap-8 text-sm">
            {["Summary", "Experience", "Skills", "Projects", "Education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="relative font-sans font-medium tracking-wide text-[#1a1a1a] dark:text-[#fafaf8] hover:text-[#666] dark:hover:text-[#ccc] transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#1a1a1a] dark:after:bg-[#fafaf8] after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:sylviah.rutto@gmail.com'}
            className="hidden md:block px-6 py-2 bg-[#c5a358] text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all"
          >
            Open to Work
          </motion.button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-[#f3f1ed] dark:hover:bg-[#1f1f1b] rounded-lg transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#fafaf8] dark:bg-[#0f0f0d] border-t border-[#e5e0d9] dark:border-[#2a2a26] px-6 py-4 space-y-3"
          >
            {["Summary", "Experience", "Skills", "Projects", "Education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left font-medium hover:text-[#666] dark:hover:text-[#ccc] transition-colors py-2"
              >
                {item}
              </button>
            ))}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = 'mailto:sylviah.rutto@gmail.com';
                setMenuOpen(false);
              }}
              className="w-full mt-2 px-4 py-3 bg-[#c5a358] text-white rounded-full font-medium text-base shadow-sm"
            >
              Open to Work
            </motion.button>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <div id="cv-content" className="pt-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto px-6 py-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#1a1a1a]/10 to-transparent dark:from-[#fafaf8]/10 rounded-2xl blur-2xl" />
              <Image
                src="/profile.jpg"
                alt="Sylviah Rutto"
                width={200}
                height={200}
                className="rounded-2xl shadow-2xl relative z-10 object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left flex-1"
            >
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <p className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-[#666] dark:text-[#999] mb-3">
                  Full-Stack Developer
                </p>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-[#1a1a1a] dark:text-[#fafaf8] leading-[1.1] tracking-tight">
                Sylviah Rutto
              </h1>

              <p className="text-lg md:text-xl font-sans font-light text-[#555] dark:text-[#ccc] mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                Full-stack developer building secure Python APIs and React/Next.js frontends. Recent work includes a production fintech API for bank statement analysis with JWT auth, rate limiting, and a hardened upload pipeline.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start print:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 bg-[#c5a358] text-white rounded-full font-sans font-bold text-lg shadow-lg hover:shadow-[#c5a358]/20 transition-all"
                >
                  Let's Work Together
                </motion.button>
                <motion.button
                  onClick={() => window.print()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-[#c5a358] text-[#c5a358] rounded-full font-sans font-bold text-lg hover:bg-[#c5a358]/10 transition-all flex items-center gap-2"
                  aria-label="Download CV as PDF via browser print dialog"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo('projects')}
                  className="px-8 py-4 border border-[#e2dfd7] dark:border-[#141414] text-[#1a1a1a] dark:text-[#fafaf8] rounded-full font-sans font-bold text-lg hover:bg-[#f3f1ed] dark:hover:bg-[#1f1f1b] transition-all"
                >
                  View Projects
                </motion.button>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center md:justify-start">
                <motion.a
                  href="mailto:sylviah.rutto@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2dfd7] dark:border-[#2a2a26] bg-[#f5f5f3] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#fafaf8]
                             font-sans font-medium text-sm hover:bg-[#c5a358]/10 hover:border-[#c5a358] hover:text-[#c5a358]
                             focus:outline-none focus:ring-2 focus:ring-[#c5a358] focus:ring-offset-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  sylviah.rutto@gmail.com
                </motion.a>
                <motion.a
                  href="https://wa.me/254758668360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2dfd7] dark:border-[#2a2a26] bg-[#f5f5f3] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#fafaf8]
                             font-sans font-medium text-sm hover:bg-[#c5a358]/10 hover:border-[#c5a358] hover:text-[#c5a358]
                             focus:outline-none focus:ring-2 focus:ring-[#c5a358] focus:ring-offset-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </motion.a>
                <motion.a
                  href="https://github.com/sylviahdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2dfd7] dark:border-[#2a2a26] bg-[#f5f5f3] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#fafaf8]
                             font-sans font-medium text-sm hover:bg-[#c5a358]/10 hover:border-[#c5a358] hover:text-[#c5a358]
                             focus:outline-none focus:ring-2 focus:ring-[#c5a358] focus:ring-offset-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sylviah-rutto-a7a17378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2dfd7] dark:border-[#2a2a26] bg-[#f5f5f3] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#fafaf8]
                             font-sans font-medium text-sm hover:bg-[#c5a358]/10 hover:border-[#c5a358] hover:text-[#c5a358]
                             focus:outline-none focus:ring-2 focus:ring-[#c5a358] focus:ring-offset-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          id="summary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <div className="grid md:grid-cols-3 gap-12 md:gap-16"> {/* Increased gap */}
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#121212] dark:text-[#ececec] mb-4 md:mb-0">About</h2>
            </div>
            <div className="md:col-span-2 space-y-6"> {/* Increased space between paragraphs */}
              <p className="text-xl font-sans font-light text-[#444] dark:text-[#aaa] leading-relaxed">
                Backend-focused full-stack developer with strong frontend craft. I build secure Python APIs with Flask and Django and the React/Next.js interfaces that sit on top of them.
              </p>
              <p className="text-xl font-sans font-light text-[#444] dark:text-[#aaa] leading-relaxed">
                Full-stack developer building secure APIs, scalable backend systems, and modern web applications with a strong focus on performance, reliability, and production-ready architecture.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#121212] dark:text-[#ececec] mb-4 md:mb-0">Experience</h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              className="md:col-span-2 space-y-10"
            >
              <motion.div
                variants={fadeInUp}
                className="p-7 md:p-8 bg-[#f5f5f3] dark:bg-[#0c0c0c] rounded-2xl border border-[#e2dfd7] dark:border-[#141414]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="font-playfair font-semibold text-xl md:text-2xl text-[#121212] dark:text-[#ececec] tracking-tight">
                     Full-Stack Developer
                  </h3>
                  <p className="text-sm font-sans font-medium text-[#999] dark:text-[#666]">2019 – Present</p>
                </div>
                <p className="text-sm font-sans text-[#666] dark:text-[#999] mb-5 italic">
                  Freelance & self-directed client work · Remote
                </p>

                <ul className="space-y-3 text-base font-sans font-light text-[#444] dark:text-[#aaa] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#c5a358] mt-2 flex-shrink-0">•</span>
                    <span>
                      Designed and shipped production web applications across client and self-directed work, spanning fintech, media, and productivity tools  full-stack delivery with React/Next.js on the frontend and Python (Flask/Django) on the backend.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#c5a358] mt-2 flex-shrink-0">•</span>
                    <span>
                      Built a production fintech JSON API (Bank Analyzer) for bank statement parsing and transaction categorization  secured with JWT auth and a DB-backed token denylist, bcrypt password hashing, per-user file isolation, Flask-Talisman CSP/HSTS, and rate limiting on sensitive endpoints. Deployed on Render with PostgreSQL and Gunicorn.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#c5a358] mt-2 flex-shrink-0">•</span>
                    <span>
                      Delivered client work for M-Unit Media a videography studio platform with booking, dynamic package management, and an M-Pesa payment pipeline via the Daraja API featuring idempotent handlers, webhook verification, and callback validation.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#c5a358] mt-2 flex-shrink-0">•</span>
                    <span>
                      Shipped additional production deployments on Vercel and Render across the stack Next.js/TypeScript frontends, Django REST APIs, and PostgreSQL persistence layers.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#e2dfd7] dark:border-[#141414]">
                  {["React", "Next.js", "TypeScript", "Python", "Flask", "Django", "PostgreSQL", "JWT", "Daraja API"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-sans font-medium rounded-full bg-[#e2dfd7] dark:bg-[#1a1a1a] text-[#121212] dark:text-[#ececec] border border-[#e2dfd7] dark:border-[#2a2a26]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#121212] dark:text-[#ececec] mb-16">Skills</h2>

          <div className="space-y-12">
            {[
              {
                tier: "Primary",
                hint: "Load-bearing in shipped production work",
                items: ["Python", "Flask", "PostgreSQL", "REST APIs", "JWT / Auth", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
              },
              {
                tier: "Working Knowledge",
                hint: "Used in projects or smaller tools",
                items: ["Django", "JavaScript", "Node.js", "SQLAlchemy", "Pandas", "Git & GitHub", "Docker", "Gunicorn"],
              },
            ].map((group) => (
              <div key={group.tier}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-5">
                  <h3 className="text-xl md:text-2xl font-playfair font-semibold tracking-tight text-[#121212] dark:text-[#ececec]">
                    {group.tier}
                  </h3>
                  <p className="text-sm font-sans text-[#999] dark:text-[#666] italic">{group.hint}</p>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                >
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={fadeInUp}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                      className={`px-5 py-3 rounded-xl border text-center font-sans font-medium text-base transition-all duration-200 cursor-pointer ${
                        group.tier === "Primary"
                          ? "bg-white dark:bg-[#1a1a1a] border-[#c5a358]/40 text-[#121212] dark:text-[#ececec] hover:border-[#c5a358]"
                          : "bg-[#f5f5f3] dark:bg-[#0c0c0c] border-[#e2dfd7] dark:border-[#141414] text-[#444] dark:text-[#aaa] hover:border-[#c5a358] dark:hover:border-[#c5a358]"
                      }`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#121212] dark:text-[#ececec] mb-16">Featured Work</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "-50px" }}
            className="space-y-12 md:space-y-16" // Increased space between projects
          >
            {[
              {
                title: "M-Unit Media Website",
                desc: "Full-stack videography studio platform architected with a React frontend and Flask backend. Features a booking system with real-time availability, dynamic package management, and integrated payment processing. Implements secure M-Pesa transaction handling via the Daraja API with idempotent payment handlers, webhook verification, and callback validation. Modern luxury design optimized for conversion with WhatsApp and multi-channel contact integration.",
                tech: ["React", "Flask", "TypeScript", "Tailwind CSS", "Daraja API", "M-Pesa"],
                live: "https://munitmediawebsite-msxp.vercel.app/",
                code: "https://github.com/sylviahdev/munitmediawebsite",
                featured: true,
              },
              {
                title: "Bank Analyzer",
                desc: "Production-grade JSON API for uploading bank statements (.xlsx/.csv), automatically categorizing transactions, and generating downloadable summary spreadsheets. Implements secure JWT auth with bcrypt password hashing, token revocation via DB-backed denylist, per-user file isolation, strict CSP and HSTS headers via Flask-Talisman, and rate limiting on sensitive endpoints. Deployed on Render with PostgreSQL and Gunicorn.",
                tech: ["Flask", "SQLAlchemy", "PostgreSQL", "JWT", "Pandas", "Gunicorn"],
                live: "https://bankanalyzer-j0mk.onrender.com/",
                code: "https://github.com/sylviahdev/bankanalyzer",
              },
              {
                title: "Ekatrack",
                desc: "Modern tracking application built with Next.js and deployed on Vercel. Delivers a fast, responsive interface with clean architecture and a focus on usability across devices.",
                tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
                live: "https://ekatrack.vercel.app/",
                code: "https://github.com/sylviahdev/ekatrack",
              },
              {
                title: "Task Tracker",
                desc: "Full-featured productivity application with intuitive CRUD operations and persistent local storage. Demonstrates advanced React hooks patterns and responsive design principles for seamless task management across all devices.",
                tech: ["React", "JavaScript", "Tailwind CSS"],
                live: "https://task-tracker-eight-mu.vercel.app/",
                code: "https://github.com/sylviahdev/react-hub",
              },
              {
                title: "Weather App",
                desc: "Real-time weather application integrating third-party APIs with beautiful data visualization. Showcases API integration expertise and modern UI patterns for displaying complex weather data intuitively.",
                tech: ["React", "REST API", "JavaScript"],
                live: "https://weathernow-wine.vercel.app/",
                code: "https://github.com/sylviahdev/weathertoday",
              },
              {
                title: "Blog API",
                desc: "Production-grade REST API architected for scalability with complete CRUD functionality. Demonstrates backend expertise with Django REST Framework, database optimization, and API design best practices.",
                tech: ["Python", "Django REST", "PostgreSQL"],
                code: "https://github.com/sylviahdev/blog-api",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: p.featured ? "0 20px 40px rgba(0,0,0,0.2)" : "0 15px 30px rgba(0,0,0,0.05)" }}
                className={`group p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-300 ${
                  p.featured
                    ? "bg-white dark:bg-[#1a1a1a] border-[#c5a358] shadow-xl"
                    : "bg-[#f5f5f3] dark:bg-[#0c0c0c] border-[#e2dfd7] dark:border-[#141414] hover:border-[#c5a358] dark:hover:border-[#c5a358]"
                }`}
              >
                {p.featured && (
                  <div className="inline-block px-3 py-1 bg-[#c5a358] text-white text-[10px] sm:text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                    Featured Project
                  </div>
                )}

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-3 tracking-tight text-[#121212] dark:text-[#ececec]">
                      {p.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-base sm:text-lg font-sans font-light text-[#444] dark:text-[#aaa]">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 text-xs font-sans font-medium rounded-full bg-[#e2dfd7] dark:border-[#141414] text-[#121212] dark:text-[#ececec] border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[#121212] dark:text-[#ececec]">
                    <ArrowUpRight className="w-6 h-6 hover:text-[#c5a358] transition-colors" />
                  </div>
                </div>

                <div className={`flex flex-wrap gap-x-6 gap-y-4 mt-5 pt-5 border-t ${p.featured ? "border-[#c5a358]/20" : "border-[#e2dfd7] dark:border-[#141414]"}`}>
                  {p.live && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-sans font-medium transition-colors flex items-center gap-2 group text-[#121212] dark:text-[#ececec] hover:text-[#c5a358]"
                      whileHover={{ x: 3 }}
                    >
                      Live Demo <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" /> {/* Larger icon, scale on hover */}
                    </motion.a>
                  )}
                  {p.code && (
                    <motion.a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-sans font-medium transition-colors flex items-center gap-2 group text-[#121212] dark:text-[#ececec] hover:text-[#c5a358]"
                      whileHover={{ x: 3 }}
                    >
                      View Code <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> {/* Larger icon, scale on hover */}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#121212] dark:text-[#ececec] mb-16">Education</h2>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1, margin: "-50px" }} className="space-y-8">
            {[
              { school: "Moringa School", degree: "Software Development", year: "2019" },
              {
                school: "Kisii University",
                degree: "Bachelor of Information Technology",
                year: "2016",
              },
              {
                school: "Shepherds Computer College",
                degree: "Certificate in Computer Packages",
                year: "2011",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} // More pronounced hover effect
                className="flex items-start gap-5 p-7 bg-[#f5f5f3] dark:bg-[#0c0c0c] rounded-xl border border-[#e2dfd7] dark:border-[#141414] hover:border-[#c5a358] dark:hover:border-[#c5a358] transition-all duration-200 cursor-pointer"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a358] mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-xl text-[#121212] dark:text-[#ececec] mb-1 tracking-tight">{edu.school}</h3>
                  <p className="text-base font-sans font-light text-[#444] dark:text-[#aaa] mb-0.5">{edu.degree}</p>
                  <p className="text-sm font-sans text-[#999] dark:text-[#666]">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-40 border-t border-[#e2dfd7] dark:border-[#141414] print:hidden"
        >
          <div className="bg-[#121212] dark:bg-[#ececec] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a358]" />
            <div className="inline-block px-4 py-1.5 bg-[#c5a358]/15 text-[#c5a358] rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] mb-6">
              Open to full-time roles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-playfair font-bold text-white dark:text-[#050505] mb-8 leading-[1.1] tracking-tight">
              Seeking opportunities to build reliable, <span className="text-[#c5a358]">production-ready software.</span>
            </h2>
            <p className="text-xl font-sans font-light text-[#aaa] dark:text-[#444] mb-12 max-w-2xl mx-auto">
              Open to full-time backend or full-stack engineering roles, especially with teams building production-grade systems. Remote-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:sylviah.rutto@gmail.com"
                className="px-12 py-5 bg-[#c5a358] text-white rounded-full font-sans font-bold text-xl hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg hover:shadow-[#c5a358]/20 flex items-center gap-2 justify-center"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/sylviah-rutto-a7a17378/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-transparent border border-[#c5a358] text-[#c5a358] rounded-full font-sans font-bold text-xl hover:bg-[#c5a358]/10 hover:scale-105 transition-transform w-full sm:w-auto flex items-center gap-2 justify-center"
              >
                <Linkedin className="w-6 h-6" />
                View LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-6 py-20 border-t border-[#e2dfd7] dark:border-[#141414] text-center text-[#999] dark:text-[#666] text-sm print:hidden"
        >
          <p>© {new Date().getFullYear()} Sylviah Rutto · Built with Next.js, TypeScript, and Tailwind CSS · <a href="https://github.com/sylviahdev/myportfolio" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c5a358] transition-colors">View source</a></p>
        </motion.footer>
      </div>
    </main>
  );
}