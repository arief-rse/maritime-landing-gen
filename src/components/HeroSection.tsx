
import { Button } from "@/components/ui/button";
import { Anchor, Book, Award } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-maritime-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center rounded-full bg-maritime-100 px-3 py-1 text-sm font-medium text-maritime-800">
              <span className="animate-pulse-subtle">Premier Maritime Education</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maritime-950 leading-tight">
              Welcome to Maritime <span className="text-maritime-700">Online Academy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              MONA is the premier platform designed to facilitate maritime certification and education for professionals seeking to enhance their careers in the maritime industry.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-maritime-800 hover:bg-maritime-700 h-12 px-6">
                Explore Courses
              </Button>
              <Button variant="outline" className="border-maritime-800 text-maritime-800 h-12 px-6">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="bg-maritime-100 rounded-full p-2">
                  <Award className="h-5 w-5 text-maritime-800" />
                </div>
                <span className="text-gray-700">Certified Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-maritime-100 rounded-full p-2">
                  <Book className="h-5 w-5 text-maritime-800" />
                </div>
                <span className="text-gray-700">Official Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-maritime-100 rounded-full p-2">
                  <Anchor className="h-5 w-5 text-maritime-800" />
                </div>
                <span className="text-gray-700">Maritime Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="/lovable-uploads/a1ef539b-4694-4e56-b45b-61a43bda9ebf.png" 
                alt="Maritime Online Academy" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-maritime-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-maritime-200 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-blue-100 rounded-full border-4 border-white shadow-md hidden md:block animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
