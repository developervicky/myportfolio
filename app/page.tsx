import About from "@/components/about";
import Intro from "@/components/intro";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <About />
      <Project />
    </main>
  );
}
