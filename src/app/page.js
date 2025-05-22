import { Educations } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Projects } from "@/components/sections/Projects";
import { Stacks } from "@/components/sections/Stacks";
import { Askme } from "@/components/sections/Askme";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <>
    <Nav />
    <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
    </div>
    <Hero />  
    <Stacks />
    <Educations />
    <Projects />
    <Askme />
    <Footer />
    </>
  );
}
