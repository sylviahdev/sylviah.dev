"use client";
import Image from "next/image";
import { useState } from "react";
import { Github, ExternalLink, Mail, Linkedin, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 }, // Increased y for more noticeable slide-up
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
    <main className="min-h-screen bg-[#fafaf8] dark:bg-[#0f0f0d]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#fafaf8]/80 dark:bg-[#0f0f0d]/80 border-b border-[#e5e0d9] dark:border-[#2a2a26] z-50">
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
            {["Summary", "Skills", "Projects", "Education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="relative font-medium text-[#1a1a1a] dark:text-[#fafaf8] hover:text-[#666] dark:hover:text-[#ccc] transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#1a1a1a] dark:after:bg-[#fafaf8] after:w-0 hover:after:w-full after:transition-all after:duration-300"
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
            Hire Me
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
            {["Summary", "Skills", "Projects", "Education"].map((item) => (
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
              Hire Me
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
                <p className="text-sm font-semibold tracking-widest uppercase text-[#666] dark:text-[#999] mb-3">
                  Frontend & Fullstack Developer
                </p>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-[#1a1a1a] dark:text-[#fafaf8] leading-tight">
                Sylviah Rutto
              </h1>

              <p className="text-lg text-[#555] dark:text-[#ccc] mb-8 leading-relaxed">
                I build scalable web applications using React, Next.js, and Python, focusing on performance, clean architecture, and user-centered design. I enjoy turning complex ideas into fast, reliable, and visually refined digital products.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 bg-[#c5a358] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[#c5a358]/20 transition-all"
                >
                  Let's Work Together
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Sylviah_Rutto_CV.pdf"
                  download
                  className="px-8 py-4 border border-[#e2dfd7] dark:border-[#141414] text-[#1a1a1a] dark:text-[#fafaf8] rounded-full font-bold text-lg hover:bg-[#f3f1ed] dark:hover:bg-[#1f1f1b] transition-all"
                >
                  Download CV
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-6 md:gap-10 items-center md:items-start text-sm opacity-80">
                <a
                  href="mailto:sylviah.rutto@gmail.com"
                  className="flex items-center gap-2 text-[#1a1a1a] dark:text-[#fafaf8] hover:text-[#666] dark:hover:text-[#ccc] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sylviah.rutto@gmail.com
                </a>
                <a
                  href="https://github.com/sylviahdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1a1a1a] dark:text-[#fafaf8] hover:text-[#666] dark:hover:text-[#ccc] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sylviah-rutto-a7a17378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1a1a1a] dark:text-[#fafaf8] hover:text-[#666] dark:hover:text-[#ccc] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          id="summary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Increased amount for earlier trigger
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <div className="grid md:grid-cols-3 gap-12 md:gap-16"> {/* Increased gap */}
            <div className="md:col-span-1">
              <h2 className="text-4xl font-playfair font-bold text-[#121212] dark:text-[#ececec] mb-4 md:mb-0">About</h2>
            </div>
            <div className="md:col-span-2 space-y-6"> {/* Increased space between paragraphs */}
              <p className="text-lg text-[#444] dark:text-[#aaa] leading-relaxed font-light">
                Frontend and Fullstack Developer specializing in building modern, responsive web applications using React, Next.js, and TypeScript. Experienced in backend development with Python, Django, and Flask.
              </p>
              <p className="text-lg text-[#444] dark:text-[#aaa] leading-relaxed font-light">
                I'm passionate about creating intelligent, automation-driven systems and AI-powered applications that solve real problems.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <h2 className="text-4xl font-playfair font-bold text-[#121212] dark:text-[#ececec] mb-16">Skills</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Python",
              "Django",
              "Flask",
              "Node.js",
              "REST APIs",
              "Git & GitHub",
              "PostgreSQL",
              "Docker", // Added a new skill for more breadth
              "AWS" // Added another skill
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} // More pronounced hover effect
                className="px-5 py-3 bg-[#f5f5f3] dark:bg-[#0c0c0c] rounded-xl border border-[#e2dfd7] dark:border-[#141414] text-center font-medium text-base text-[#121212] dark:text-[#ececec] hover:border-[#c5a358] dark:hover:border-[#c5a358] transition-all duration-200 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <h2 className="text-4xl font-playfair font-bold text-[#121212] dark:text-[#ececec] mb-16">Featured Work</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12 md:space-y-16" // Increased space between projects
          >
            {[
              {
                title: "M-Unit Media Website",
                desc: "Full-stack videography studio platform architected with React frontend and Flask backend. Features premium booking system with real-time availability, dynamic package management, and integrated payment processing. Implementing secure M-Pesa transaction handling via Daraja API with idempotent payment handlers, webhook verification, and callback validation. Dark luxury design optimized for conversion with WhatsApp and multi-channel contact integration. Production-grade payment pipeline ensuring transaction reliability and PCI compliance.",
                tech: ["React", "Flask", "TypeScript", "Tailwind CSS", "Daraja API", "M-Pesa"],
                live: "https://munitmediawebsite-msxp.vercel.app/",
                featured: true,
                metrics: ["Secure Payment Processing", "Idempotent Transaction Handling", "Full-Stack Architecture"],
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
                title: "Professional Portfolio",
                desc: "Premium portfolio design featuring smooth animations, responsive layouts, and optimized performance. Built with modern web standards demonstrating attention to user experience and visual design.",
                tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                code: "https://github.com/sylviahdev/myportfolio",
              },
              {
                title: "Blog API",
                desc: "Production-grade REST API architected for scalability with complete CRUD functionality. Demonstrates backend expertise with Django REST Framework, database optimization, and API design best practices.",
                tech: ["Python", "Django REST", "PostgreSQL"],
                code: "https://github.com/sylviahdev/django-blog-api",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: p.featured ? "0 20px 40px rgba(0,0,0,0.3)" : "0 15px 30px rgba(0,0,0,0.1)" }} // More pronounced hover for all, extra for featured
                className={`group p-8 md:p-10 rounded-2xl border transition-all duration-300 ${
                  p.featured
                    ? "bg-gradient-to-br from-[#121212] to-[#000000] dark:from-[#ececec] dark:to-[#ffffff] border-[#121212] dark:border-[#ececec] shadow-xl"
                    : "bg-[#f5f5f3] dark:bg-[#0c0c0c] border-[#e2dfd7] dark:border-[#141414] hover:border-[#c5a358] dark:hover:border-[#c5a358]"
                }`}
              >
                {p.featured && (
                  <div className="inline-block px-3 py-1 bg-[#c5a358] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
                    Featured Project
                  </div>
                )}

                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold mb-3 tracking-tight ${
                      p.featured ? "text-[#fafaf9] dark:text-[#050505]" : "text-[#121212] dark:text-[#ececec]"
                    }`}>
                      {p.title}
                    </h3>
                    <p className={`mb-5 leading-relaxed text-lg font-light ${
                      p.featured ? "text-[#aaa] dark:text-[#444]" : "text-[#444] dark:text-[#aaa]"
                    }`}>
                      {p.desc}
                    </p>

                    {p.metrics && (
                      <div className={`flex flex-wrap gap-3 mb-6 pb-6 border-b ${p.featured ? "border-[#fafaf9]/20 dark:border-[#121212]/20" : "border-[#e2dfd7] dark:border-[#141414]"}`}>
                        {p.metrics.map((metric) => (
                          <div
                            key={metric}
                            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg ${
                              p.featured
                                ? "bg-[#fafaf9]/10 dark:bg-[#121212]/10 text-[#fafaf9] dark:text-[#121212]"
                                : "bg-[#ececec] dark:bg-[#121212] text-[#121212] dark:text-[#ececec]"
                            }`}
                          >
                            <span className="text-[#c5a358] mr-1">✦</span> {metric}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-3.5 py-1.5 text-xs font-medium rounded-full ${ // Increased padding
                            p.featured
                              ? "bg-[#fafaf9]/20 dark:bg-[#121212]/20 text-[#fafaf9] dark:text-[#121212]"
                              : "bg-[#e2dfd7] dark:border-[#141414] text-[#121212] dark:text-[#ececec] border"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div whileHover={{ x: 8, y: -8 }} className={p.featured ? "text-[#fafaf9] dark:text-[#121212]" : "text-[#121212] dark:text-[#ececec]"}>
                    <ArrowUpRight className="w-6 h-6 hover:text-[#c5a358] transition-colors" />
                  </motion.div>
                </div>

                <div className="flex gap-6 mt-5 pt-5 border-t" style={p.featured ? { borderColor: "rgba(250,250,248,0.2)" } : {}}> {/* Increased gap, mt, pt */}
                  {p.live && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-base font-medium transition-colors flex items-center gap-2 group ${ // Larger text, increased gap
                        p.featured
                          ? "text-[#fafaf9] dark:text-[#121212] hover:text-[#c5a358]"
                          : "text-[#121212] dark:text-[#ececec] hover:text-[#c5a358]"
                      }`}
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
                      className={`text-base font-medium transition-colors flex items-center gap-2 group ${ // Larger text, increased gap
                        p.featured
                          ? "text-[#fafaf9] dark:text-[#121212] hover:text-[#c5a358]"
                          : "text-[#121212] dark:text-[#ececec] hover:text-[#c5a358]"
                      }`}
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
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <h2 className="text-4xl font-playfair font-bold text-[#121212] dark:text-[#ececec] mb-16">Education</h2>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-8">
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
                  <h3 className="font-semibold text-lg text-[#121212] dark:text-[#ececec] mb-1 tracking-tight">{edu.school}</h3>
                  <p className="text-base text-[#444] dark:text-[#aaa] mb-0.5 font-light">{edu.degree}</p>
                  <p className="text-sm text-[#999] dark:text-[#666]">{edu.year}</p>
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
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-24 md:py-40 border-t border-[#e2dfd7] dark:border-[#141414]"
        >
          <div className="bg-[#121212] dark:bg-[#ececec] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a358]" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white dark:text-[#050505] mb-8 leading-tight">
              Bring your idea to life. I design, build, and  <span className="text-[#c5a358]">Launch it.</span>
            </h2>
            <p className="text-xl text-[#aaa] dark:text-[#444] mb-12 max-w-2xl mx-auto font-light">
              I work on carefully selected projects focused on speed, scalability, and great user experience. Let’s turn your idea into a real, working product.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/254758668360"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-[#c5a358] text-white rounded-full font-bold text-xl hover:scale-105 transition-transform w-full sm:w-auto text-center"
              >
                Start a Project on WhatsApp
              </a>
              <a
                href="mailto:sylviah.rutto@gmail.com"
                className="px-12 py-5 bg-transparent border border-[#c5a358] text-[#c5a358] rounded-full font-bold text-xl hover:bg-[#c5a358]/10 hover:scale-105 transition-transform w-full sm:w-auto flex items-center gap-2 justify-center"
              >
                <Mail className="w-6 h-6" />
                Send an Email
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} // Added transition
          className="max-w-5xl mx-auto px-6 py-20 border-t border-[#e2dfd7] dark:border-[#141414] text-center text-[#999] dark:text-[#666] text-sm"
        >
          <p>© {new Date().getFullYear()} Sylviah Rutto. Designed and built with React & Next.js.</p>
        </motion.footer>
      </div>
    </main>
  );
}