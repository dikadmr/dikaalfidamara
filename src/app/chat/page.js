import { Educations } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Projects } from "@/components/sections/Projects";
import { Stacks } from "@/components/sections/Stacks";
import { Askme } from "@/components/sections/Askme";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />  
    <Stacks />
    <Educations />
    <Projects />
    <Askme />
    <Footer />
    </>
  );
}
