import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Osaris NextGen EduHub | Extracurricular Programs for Cambridge Schools",
  description: "Professional extracurricular programs for Cambridge schools in Ghana. STEM, Sports, Arts, Leadership & more. Transform your school with structured, expert-led activities.",
  keywords: "extracurricular activities Ghana, Cambridge school programs, after-school programs, STEM education, robotics, sports training, arts programs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
