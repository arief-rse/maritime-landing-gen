import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Anchor, GraduationCap, Ship, Compass, ChevronDown, ChevronUp, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
// import AboutSection from "@/components/AboutSection";
// import CertificationSection from "@/components/CertificationSection";
// import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";

const Index = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showInfoTooltip, setShowInfoTooltip] = useState<string | null>(null);

  useEffect(() => {
    // Initialize reveal animations
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el, i) => {
      el.classList.add("reveal");
      // Add staggered delay
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
    });

    // Hide scroll indicator after 5 seconds
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardHover = (card: string) => {
    setActiveCard(card);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A3D62]/10 to-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="flex items-center justify-center py-16 px-4 relative min-h-screen">
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
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Ship className="h-20 w-20 text-[#0A3D62]" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="absolute -bottom-4 left-0 w-full h-4 bg-[#0A3D62]/20 rounded-full opacity-30"
                    />
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A3D62]/90 leading-tight">
                  Maritime <span className="text-[#0A3D62]">Online Academy</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/10 to-[#0A3D62]/20 rounded-3xl -z-10 blur-xl transform -rotate-1"></div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    onHoverStart={() => handleCardHover('educor')}
                    onHoverEnd={handleCardLeave}
                    className="bg-white rounded-xl shadow-lg p-8 border border-[#0A3D62]/10 transition-all duration-300 group hover:shadow-[#0A3D62]/30 hover:shadow-xl relative"
                  >
                    <div className="absolute top-4 right-4">
                      <div
                        className="text-[#0A3D62] cursor-pointer"
                        onMouseEnter={() => setShowInfoTooltip('educor')}
                        onMouseLeave={() => setShowInfoTooltip(null)}
                      >
                        <Info className="h-5 w-5" />
                      </div>
                      <AnimatePresence>
                        {showInfoTooltip === 'educor' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute right-0 top-6 bg-white shadow-lg rounded-lg p-3 w-64 text-sm text-gray-700 z-20"
                          >
                            EduCOR is our certification system that validates foreign maritime certifications according to Malaysian standards.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center justify-center h-20 mb-4 mx-auto">
                      <motion.img
                        src="/edu-logo.svg"
                        alt="EduCOR Logo"
                        className="h-full object-contain"
                        style={{ maxWidth: '160px' }}
                        animate={activeCard === 'educor' ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our streamlined certification system ensures accurate validation of foreign
                      certifications and compliance with international maritime standards.
                    </p>
                    <Button
                      className="w-full bg-[#0A3D62] hover:bg-[#0A3D62]/80 gap-2 group-hover:shadow-md transition-all py-6 text-lg relative overflow-hidden"
                      onClick={() => window.open("https://educor.mona.edu.my", "_blank")}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Visit EduCOR
                        <ExternalLink className="h-5 w-5" />
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    onHoverStart={() => handleCardHover('edurating')}
                    onHoverEnd={handleCardLeave}
                    className="bg-white rounded-xl shadow-lg p-8 border border-[#0A3D62]/10 transition-all duration-300 group hover:shadow-[#0A3D62]/30 hover:shadow-xl relative"
                  >
                    <div className="absolute top-4 right-4">
                      <div
                        className="text-[#0A3D62] cursor-pointer"
                        onMouseEnter={() => setShowInfoTooltip('edurating')}
                        onMouseLeave={() => setShowInfoTooltip(null)}
                      >
                        <Info className="h-5 w-5" />
                      </div>
                      <AnimatePresence>
                        {showInfoTooltip === 'edurating' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute right-0 top-6 bg-white shadow-lg rounded-lg p-3 w-64 text-sm text-gray-700 z-20"
                          >
                            EduRating provides transparent assessment and rating of maritime certificates for employers and authorities.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center justify-center h-20 mb-4 mx-auto">
                      <motion.img
                        src="/edurating-logo.svg"
                        alt="EduRating Logo"
                        className="h-full object-contain"
                        style={{ maxWidth: '200px' }}
                        animate={activeCard === 'edurating' ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our transparent assessment platform provides rating of certificates, giving
                      employers confidence in the qualifications of maritime professionals.
                    </p>
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-500 gap-2 group-hover:shadow-md transition-all py-6 text-lg relative overflow-hidden"
                      onClick={() => window.open("https://edurating.mona.edu.my", "_blank")}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Visit EduRating
                        <ExternalLink className="h-5 w-5" />
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
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
                <p className="text-[#0A3D62] font-medium italic">
                  "Navigating the future of maritime certification"
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
