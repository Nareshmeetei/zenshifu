import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Toast } from "../../../../components/ui/toast";
import { useWaitlistSignup } from "../../../../hooks/useWaitlistSignup";

export const Footer = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const { signupForWaitlist, isLoading, message, clearMessage } = useWaitlistSignup();

  const productLinks = [
    { title: "How It Works", href: "#how-it-works" },
    { title: "Who It's For", href: "#who-its-for" },
    { title: "Waitlist Offer Price", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const result = await signupForWaitlist(email, 'footer');
    if (result.success) {
      setEmail(''); // Clear the input on success
    }
  };

  return (
    <footer className="w-full bg-[#041c21] text-white relative">
      {message && <Toast message={message} onClose={clearMessage} />}
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <img
              className="w-[120px] md:w-[164.89px] h-auto mb-4 md:mb-6 transition-all duration-300 ease-out hover:opacity-80 hover:-translate-y-0.5 cursor-pointer"
              alt="ZenShifu Logo"
              src="/zenshifu-logo.svg"
              onClick={scrollToTop}
            />
            <p className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-sm md:text-base leading-6 max-w-md">
              ZenShifu is a chat-first AI that automates your social media management so you save time, grow fast, and stay Zen.
            </p>
            
            {/* Social media icons - Updated with Instagram and YouTube */}
            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
              {/* Twitter/X */}
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-[#0a2b31] rounded-full flex items-center justify-center hover:bg-[#134249] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-[#a0b3b8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-[#0a2b31] rounded-full flex items-center justify-center hover:bg-[#134249] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-[#a0b3b8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-[#0a2b31] rounded-full flex items-center justify-center hover:bg-[#134249] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-[#a0b3b8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-[#0a2b31] rounded-full flex items-center justify-center hover:bg-[#134249] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-[#a0b3b8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-['Sora',Helvetica] font-semibold text-white text-base md:text-lg mb-4 md:mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-sm md:text-base hover:text-[#b5ff99] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer bg-transparent border-none text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section - Back to original design with autocomplete fix */}
        <div className="border-t border-[#0a2b31] pt-8 md:pt-12 mb-8 md:mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-['Besley',Helvetica] font-medium text-white text-[24px] md:text-3xl mb-3 md:mb-4">
              Let the Wisdom, Growth & Zen Come to You
            </h3>
            <p className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-sm md:text-base mb-6 md:mb-8">
              Updates, tips, and calm stuff in your inbox to help you grow faster.
            </p>
            
            {/* Email subscription - Original design with autocomplete fix */}
            <div className="relative max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="relative flex bg-[#0a2b31] rounded-full border border-[#134249] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-12 md:h-16">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-transparent border-none text-white placeholder-[#a0b3b8] px-4 md:px-6 py-3 md:py-5 font-['Sora',Helvetica] font-normal text-sm md:text-base focus:outline-none focus:ring-0 focus:border-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none disabled:opacity-50 h-full"
                  style={{ 
                    boxShadow: 'none',
                    WebkitBoxShadow: 'inset 0 0 0 1000px #0a2b31',
                    WebkitTextFillColor: '#D5D5D5',
                    backgroundColor: 'transparent'
                  }}
                />
                <Button 
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="bg-[#057067] hover:bg-[#0a8a7d] text-white px-4 md:px-10 py-2 md:py-3 rounded-full font-['Sora',Helvetica] font-medium text-xs md:text-base transition-all duration-300 border-none disabled:bg-[#057067] disabled:opacity-100 disabled:text-white disabled:cursor-not-allowed h-full whitespace-nowrap"
                >
                  {isLoading ? 'Sending...' : <span><span className="hidden sm:inline">Send Me the Good Vibes</span><span className="sm:hidden">Subscribe</span></span>}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#0a2b31] pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-xs md:text-sm">
                © 2025 ZenShifu. All rights reserved.
              </p>
              <p className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-xs md:text-sm">
                This is a product built by{' '}
                <a 
                  href="https://www.hayoomdesign.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#b5ff99] hover:-translate-y-0.5 transition-all duration-300 underline decoration-transparent hover:decoration-[#b5ff99]"
                >
                  Hayoom Design
                </a>
                {' '}with a lot of ❤️ and Zen.
              </p>
            </div>
            
            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="#"
                className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-xs md:text-sm hover:text-[#b5ff99] hover:-translate-y-0.5 transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-['Sora',Helvetica] font-normal text-[#a0b3b8] text-xs md:text-sm hover:text-[#b5ff99] hover:-translate-y-1 transition-all duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};