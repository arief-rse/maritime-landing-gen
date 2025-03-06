import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Anchor, GraduationCap, Ship, Compass } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-maritime-100 to-white">
      <header className="py-6 bg-white/90 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Anchor className="h-8 w-8 text-maritime-800" />
              <span className="text-2xl font-bold text-maritime-800">MONA</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Ship className="h-20 w-20 text-maritime-700" />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -bottom-4 left-0 w-full h-4 bg-maritime-200 rounded-full opacity-30"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-maritime-950 leading-tight">
                Maritime <span className="text-maritime-700">Online Academy</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Your gateway to international maritime certification recognition
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-maritime-100/50 to-maritime-200/50 rounded-3xl -z-10 blur-xl transform -rotate-1"></div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-maritime-100 transition-all duration-300 group hover:shadow-maritime-200/50 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center h-16 w-16 bg-maritime-100 rounded-full mb-4 mx-auto group-hover:bg-maritime-200 transition-colors">
                    <GraduationCap className="h-8 w-8 text-maritime-800" />
                  </div>
                  <h2 className="text-3xl font-bold text-maritime-800 mb-4">EduCOR</h2>
                  <p className="text-gray-600 mb-6 h-24">
                    Our streamlined certification system ensures accurate validation of foreign
                    certifications and compliance with international maritime standards.
                  </p>
                  <Button
                    className="w-full bg-maritime-700 hover:bg-maritime-600 gap-2 group-hover:shadow-md transition-all py-6 text-lg"
                    onClick={() => window.open("https://educor.mona.edu.my", "_blank")}
                  >
                    Visit EduCOR
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-maritime-100 transition-all duration-300 group hover:shadow-maritime-200/50 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center h-16 w-16 bg-maritime-100 rounded-full mb-4 mx-auto group-hover:bg-maritime-200 transition-colors">
                    <Compass className="h-8 w-8 text-maritime-800" />
                  </div>
                  <h2 className="text-3xl font-bold text-maritime-800 mb-4">EduRating</h2>
                  <p className="text-gray-600 mb-6 h-24">
                    Our transparent assessment platform provides rating of certificates, giving
                    employers confidence in the qualifications of maritime professionals.
                  </p>
                  <Button
                    className="w-full bg-maritime-700 hover:bg-maritime-600 gap-2 group-hover:shadow-md transition-all py-6 text-lg"
                    onClick={() => window.open("https://edurating.mona.edu.my", "_blank")}
                  >
                    Visit EduRating
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-maritime-800 font-medium italic">
                "Navigating the future of maritime certification"
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="bg-maritime-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Anchor className="h-6 w-6" />
              <span className="text-xl font-semibold">MONA</span>
            </div>
            <p className="text-maritime-100">© {new Date().getFullYear()} Maritime Online Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
