// src/components/MobileNav.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;