import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import emailjs from "@emailjs/browser";
import TechTimeline from "./components/TechTimeline";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TimelineCTA from "./components/TimelineCTA";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4c1d95,transparent_55%)] opacity-70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0f172a,transparent_65%)] opacity-80" />
              <div className="absolute inset-0 bg-noise opacity-20" />
            </div>
            <Navigation />
            <main className="relative z-10 pt-24 pb-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:projectId" element={<ProjectDetails />} />
                <Route path="/techtimeline" element={<TechTimeline />} />
                <Route path="/projects" element={<AllProjects />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
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
