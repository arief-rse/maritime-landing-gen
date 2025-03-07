import React from 'react';
import { Anchor, Ship, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A3D62] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Ship className="h-5 w-5" />
              <h3 className="text-lg font-bold">
                <span className="text-orange-400">mona</span>.edu.my
              </h3>
            </div>
            <p className="text-white text-opacity-80 text-sm max-w-md">
              Maritime Online Academy provides certification for foreign Certificate of Competency
              holders seeking to work on Malaysian vessels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition-colors">Home</a></li>
                <li><a href="https://educor.mona.edu.my" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition-colors">EduCOR</a></li>
                <li><a href="https://edurating.mona.edu.my" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition-colors">EduRating</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white text-opacity-80 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@mona.edu.my</span>
                </li>
                <li className="text-white text-opacity-80 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+60 3-8888 9999</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-70 text-xs">
            &copy; {currentYear} Maritime Online Academy. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <p className="text-white text-opacity-70 text-xs">
              A subsidiary of <a href="https://mydeckmgmt.com/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">My Deck Management</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
