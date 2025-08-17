import React, { useState, useEffect } from "react";
import { Button } from "./button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ title: string; href: string }>;
  onNavigate: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  onNavigate,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    onNavigate(href);
    onClose();
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img
            className="w-[100px] h-auto"
            alt="ZenShifu Logo"
            src="/zenshifu-logo.svg"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-8">
          <nav className="space-y-6">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(link.href)}
                className="block w-full text-left font-['Sora',Helvetica] font-normal text-[#616161] text-lg leading-6 hover:text-[#057067] hover:translate-x-2 transition-all duration-300 ease-out py-2"
              >
                {link.title}
              </button>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-8 left-6 right-6">
          <Button
            onClick={() => handleNavigate('#pricing')}
            className="w-full h-[50px] bg-[#057067] text-white rounded-[100px] hover:bg-[#0a8a7d] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out border-none font-['Sora',Helvetica] font-medium text-base"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
};