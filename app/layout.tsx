import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Sylviah Rutto — Full-Stack Developer",
  description: "Full-stack developer building secure APIs, scalable backend systems, and modern web applications. Featured work includes a production fintech API with JWT auth, rate limiting, and hardened uploads.",
  keywords: [
    "Sylviah Rutto",
    "Full-stack developer",
    "Python developer",
    "Flask developer",
    "Django developer",
    "React developer",
    "Next.js developer",
    "Fintech developer",
    "API security",
    "Nairobi developer",
  ],
  openGraph: {
    title: "Sylviah Rutto — Full-Stack Developer",
    description: "Full-stack developer building secure APIs, scalable backend systems, and modern web applications. Production-grade fintech work with JWT auth, rate limiting, and hardened uploads.",
    type: "website",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylviah Rutto — Full-Stack Developer",
    description: "Full-stack developer. Secure Python APIs, React/Next.js, production-grade fintech projects.",
    images: ["/profile.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sylviah Rutto",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer building secure web applications and APIs with Python, React, and Next.js. Experienced with M-Pesa integrations, JWT authentication, rate limiting, and secure upload systems.",
  email: "mailto:sylviah.rutto@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  knowsLanguage: ["English", "Swahili"],
  knowsAbout: [
    "Python",
    "Flask",
    "Django",
    "PostgreSQL",
    "React",
    "Next.js",
    "TypeScript",
    "JWT Authentication",
    "M-Pesa Daraja API",
    "REST APIs",
    "API Security",
  ],
  sameAs: [
    "https://github.com/sylviahdev",
    "https://www.linkedin.com/in/sylviah-rutto/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
