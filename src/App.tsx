import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import emailjs from '@emailjs/browser';
import TechTimeline from "./components/TechTimeline";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/utils/ScrollToTop";

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
          <div className="bg-gray-900 text-white">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navigation />
                    <main>
                      <section id="home">
                        <Hero />
                      </section>
                      <section id="about">
                        <About />
                      </section>
                      <section id="projects">
                        <Projects />
                      </section>
                      <section id="contact">
                        <Contact />
                      </section>
                      <section id="techdle-button" className="text-center my-4 justify-center flex">
                        <Link to="/techtimeline">
                          <button className="w-300 p-10 bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            Techdle
                          </button>
                        </Link>
                      </section>
                    </main>
                  </>
                }
              />
              <Route path="/project/:projectId" element={<ProjectDetails />} />
              <Route path="/techtimeline" element={<TechTimeline />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;