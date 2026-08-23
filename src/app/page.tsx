import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { KeyFactors } from "@/components/KeyFactors";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Workshop } from "@/components/Workshop";
import { Office } from "@/components/Office";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <KeyFactors />
        <ProjectsExplorer />
        <Workshop />
        <Office />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
