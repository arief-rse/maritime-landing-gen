
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Initialize reveal animations
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el, i) => {
      el.classList.add("reveal");
      // Add staggered delay
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-maritime-50 to-white">
      <header className="py-6 bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-maritime-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-bold text-maritime-800">MONA</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maritime-950 leading-tight mb-4">
                Maritime <span className="text-maritime-700">Online Academy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                MONA is the premier platform designed to facilitate the Certification of
                Recognition (COR) for foreign Certificate of Competency (COC) holders seeking
                to work on vessels.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105 border border-maritime-100">
                <h2 className="text-2xl font-bold text-maritime-800 mb-4">EduCOR</h2>
                <p className="text-gray-600 mb-6">
                  Our streamlined certification system ensures accurate validation of foreign 
                  certifications and compliance with international maritime standards.
                </p>
                <Button 
                  className="w-full bg-maritime-800 hover:bg-maritime-700 gap-2"
                  onClick={() => window.open("https://educor.example.com", "_blank")}
                >
                  Visit EduCOR
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105 border border-maritime-100">
                <h2 className="text-2xl font-bold text-maritime-800 mb-4">EduRating</h2>
                <p className="text-gray-600 mb-6">
                  Our transparent assessment platform provides rating of certificates, giving 
                  employers confidence in the qualifications of maritime professionals.
                </p>
                <Button 
                  className="w-full bg-maritime-800 hover:bg-maritime-700 gap-2"
                  onClick={() => window.open("https://edurating.example.com", "_blank")}
                >
                  Visit EduRating
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <footer className="bg-maritime-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} Maritime Online Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
