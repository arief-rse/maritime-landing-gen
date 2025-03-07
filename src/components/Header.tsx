
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Anchor, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Anchor className="h-8 w-8 text-maritime-800" />
          <span className="text-2xl font-heading font-bold text-maritime-800">MONA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* <a
            href="#home"
            className="text-maritime-900 hover:text-maritime-700 font-medium transition-colors"
          >
            Home
          </a> */}
          <a
            href="#about"
            className="text-maritime-900 hover:text-maritime-700 font-medium transition-colors"
          >
            About Us
          </a>
          {/*
          <a
            href="#courses"
            className="text-maritime-900 hover:text-maritime-700 font-medium transition-colors"
          >
            Courses
          </a>
          <a
            href="#certification"
            className="text-maritime-900 hover:text-maritime-700 font-medium transition-colors"
          >
            Certification
          </a> */}
          <a
            href="#contact"
            className="text-maritime-900 hover:text-maritime-700 font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-maritime-800 text-maritime-800">
            Login
          </Button>
          <Button className="bg-maritime-800 hover:bg-maritime-700">
            Get Certificate
          </Button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-maritime-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
          <a
            href="#home"
            className="text-maritime-900 hover:text-maritime-700 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-maritime-900 hover:text-maritime-700 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#courses"
            className="text-maritime-900 hover:text-maritime-700 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#certification"
            className="text-maritime-900 hover:text-maritime-700 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Certification
          </a>
          <a
            href="#contact"
            className="text-maritime-900 hover:text-maritime-700 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="outline" className="border-maritime-800 text-maritime-800 w-full">
              Login
            </Button>
            <Button className="bg-maritime-800 hover:bg-maritime-700 w-full">
              Get Certificate
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
