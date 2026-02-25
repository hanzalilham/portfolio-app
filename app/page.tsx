import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Writing } from "@/components/Writing";
import { Experience } from "@/components/Experience";
import { TechDepth } from "@/components/TechDepth";
import { Contact } from "@/components/Contact";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <>
      <Hero />
      <Projects />
      <Writing articles={articles} />
      <Experience />
      <TechDepth />
      <Contact />
    </>
  );
}
