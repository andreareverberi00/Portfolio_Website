import { lazy, Suspense, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TimelineCTA from "./components/TimelineCTA";
import SteamSpotlight from "./components/SteamSpotlight";
import { LanguageProvider } from "./context/LanguageContext";

const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const TechTimeline = lazy(() => import("./components/TechTimeline"));
const AllProjects = lazy(() => import("./components/AllProjects"));

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
            <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
              <a href="#main-content" className="skip-link">Skip to content</a>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4c1d95,transparent_55%)] opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0f172a,transparent_65%)] opacity-80" />
                <div className="absolute inset-0 bg-noise opacity-20" />
              </div>
              <Navigation />
              <main id="main-content" className="relative z-10 pt-32 pb-16">
                <Suspense fallback={<div className="min-h-[60vh]" aria-label="Loading page" />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:projectId" element={<ProjectDetails />} />
                    <Route path="/techtimeline" element={<TechTimeline />} />
                    <Route path="/projects" element={<AllProjects />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

function HomePage() {
  useEffect(() => {
    const pendingSection = sessionStorage.getItem("pending-scroll");
    if (pendingSection) {
      sessionStorage.removeItem("pending-scroll");
      requestAnimationFrame(() => {
        const element = document.getElementById(pendingSection);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-24">
      <section id="home">
        <Hero />
      </section>
      <SteamSpotlight />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <TimelineCTA />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
