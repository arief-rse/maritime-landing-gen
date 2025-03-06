
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import CertificationSection from "@/components/CertificationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const scrollRef = useScrollReveal();

  useEffect(() => {
    // Initialize reveal animations
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el, i) => {
      el.classList.add("reveal");
      // Add staggered delay
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" ref={scrollRef}>
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <CertificationSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Quick navigation - fixed */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="#home"
          className="flex items-center justify-center w-12 h-12 bg-maritime-800 text-white rounded-full shadow-lg hover:bg-maritime-700 transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;
