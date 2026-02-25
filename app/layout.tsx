import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Razi Abdelhak",
  description:
    "Software Engineer. Backend systems, CI/CD infrastructure, and distributed pipelines. C++, Go, Python, Docker, Kubernetes, Azure.",
  openGraph: {
    title: "Razi Abdelhak",
    description:
      "Software Engineer building backend systems, CI/CD infrastructure, and distributed pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-text-secondary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
