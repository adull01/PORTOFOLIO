import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { getProjects } from "./lib/projects";
import { getProfile } from "./lib/profile";
import { LanguageProvider } from "./context/LanguageContext";

export default async function Home() {
  const projects = await getProjects();
  const profile = await getProfile();

  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
