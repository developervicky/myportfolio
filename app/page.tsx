import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Path from "@/components/path";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Path />
      <Contact />         
    </main>
  );
}
