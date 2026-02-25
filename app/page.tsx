import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { TechDepth } from "@/components/TechDepth";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <TechDepth />
      <Contact />
    </>
  );
}
