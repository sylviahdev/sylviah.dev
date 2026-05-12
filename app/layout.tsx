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
  title: "Sylviah Rutto — Backend & Full-Stack Developer",
  description: "Backend focused full-stack developer building secure Python APIs (Flask, Django) and React/Next.js frontends. Featured work: a production fintech API with JWT auth, rate limiting, and hardened uploads.",
  keywords: [
    "Sylviah Rutto",
    "Full-stack developer",
    "Backend developer",
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
    title: "Sylviah Rutto — Backend & Full-Stack Developer",
    description: "Backend-focused full-stack developer building secure Python APIs and React/Next.js frontends. Production fintech work, JWT auth, rate limiting, hardened uploads.",
    type: "website",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylviah Rutto — Backend & Full-Stack Developer",
    description: "Backend-focused full-stack developer. Secure Python APIs, React/Next.js, fintech projects.",
    images: ["/profile.jpg"],
  },
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
        {children}
      </body>
    </html>
  );
}
