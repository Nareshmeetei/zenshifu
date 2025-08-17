import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Toast } from "../../../../components/ui/toast";
import { MobileMenu } from "../../../../components/ui/mobile-menu";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { useScrollPosition } from "../../../../hooks/useScrollPosition";
import { useWaitlistSignup } from "../../../../hooks/useWaitlistSignup";

export const HeroSection = (): JSX.Element => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signupForWaitlist, isLoading, message, clearMessage } = useWaitlistSignup();
  const { isScrolled } = useScrollPosition();

  // Navigation links data - updated "Waitlist Offer Pricing" to "Waitlist Offer Price"
  const navLinks = [
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const result = await signupForWaitlist(email, 'hero');
    if (result.success) {
      setEmail(''); // Clear the input on success
    }
  };

  return (
    <section className="relative w-full bg-[#e7eefe] overflow-hidden">
      {message && <Toast message={message} onClose={clearMessage} />}
      
      {/* Floating Navigation Bar - Mobile responsive */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[calc(100%-2rem)] max-w-none md:max-w-[935px] ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/50 backdrop-blur-md rounded-[50px] md:rounded-[100px] border border-white/20 shadow-lg/80 px-4 md:px-8 py-3 md:py-4 w-full">
          <div className="flex items-center justify-between gap-2 md:gap-10">
            {/* Logo - smaller on mobile */}
            <img
              className="w-[100px] md:w-[144px] h-auto transition-all duration-300 ease-out hover:opacity-80 hover:-translate-y-0.5 cursor-pointer"
              alt="ZenShifu Logo"
              src="/zenshifu-logo.svg"
              onClick={() => scrollToSection('#hero')}
            />

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="font-['Sora',Helvetica] font-normal text-[#616161] text-sm leading-6 transition-all duration-300 ease-out hover:opacity-80 hover:text-[#057067] hover:-translate-y-0.5 cursor-pointer bg-transparent border-none whitespace-nowrap"
                >
                  {link.title}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Button
              variant="outline"
              onClick={() => scrollToSection('#pricing')}
              className="hidden sm:flex rounded-[50px] md:rounded-[100px] border-2 border-[#057067] text-[#057067] font-['Sora',Helvetica] font-medium px-3 md:px-6 py-2 md:py-2.75 bg-transparent hover:opacity-80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out text-xs md:text-sm whitespace-nowrap"
            >
              <span className="hidden sm:inline">Join Waitlist</span>
              <span className="sm:hidden">Join</span>
            </Button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="sm:hidden w-8 h-8 flex items-center justify-center rounded-lg border-2 border-[#057067] hover:bg-[#057067] hover:text-white transition-all duration-300 ease-out"
            >
              <svg className="w-5 h-5 text-[#057067] hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative w-full min-h-[800px] md:min-h-[1662px]">
        {/* Background image with floating animation - expanded to cover full width */}
        <img
          className="absolute w-full h-[600px] md:h-[950px] top-0 left-0 object-cover transition-opacity duration-1000 ease-out animate-float-gentle"
          alt="Vector Background"
          src="/vector-hero.svg"
        />

        {/* Colorful gradient blurs with animation */}
        <div className="absolute w-48 md:w-72 h-48 md:h-72 top-[200px] md:top-[368px] right-[25px] md:right-[50px] bg-[#1af3f2cc] rounded-[72px] md:rounded-[144px] blur-[100px] md:blur-[200px] animate-pulse" />
        <div className="absolute w-[120px] md:w-[220px] h-[120px] md:h-[220px] top-[-80px] md:top-[-156px] right-[100px] md:right-[200px] bg-[#eba7d2] rounded-[60px] md:rounded-[110px] blur-[65px] md:blur-[125px] animate-pulse" />
        <div className="absolute w-[150px] md:w-[290px] h-[150px] md:h-[290px] top-[100px] md:top-[200px] left-[-80px] md:left-[-166px] bg-[#fa7d54cc] rounded-[75px] md:rounded-[145px] blur-[100px] md:blur-[200px] animate-pulse" />
        <div className="absolute w-[100px] md:w-[190px] h-[100px] md:h-[190px] top-[250px] md:top-[490px] left-[-20px] md:left-[-44px] bg-[#45f946] rounded-[50px] md:rounded-[95px] blur-[75px] md:blur-[150px] animate-pulse" />

        {/* Static Navigation bar */}
        <div className="relative w-full py-4 md:py-6 z-10 transform transition-all duration-700 ease-out translate-y-0 opacity-100">
          <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-6">
            <img
              className="w-[120px] md:w-[164.89px] h-auto transition-all duration-300 ease-out hover:opacity-80 hover:-translate-y-0.5 cursor-pointer"
              alt="ZenShifu Logo"
              src="/zenshifu-logo.svg"
              onClick={() => scrollToSection('#hero')}
            />

            <div className="hidden md:flex items-center gap-[25px]">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="font-['Sora',Helvetica] font-normal text-[#616161] text-base leading-6 transition-all duration-300 ease-out hover:opacity-80 hover:text-[#057067] hover:-translate-y-0.5 cursor-pointer bg-transparent border-none"
                >
                  {link.title}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Button
              variant="outline"
              onClick={() => scrollToSection('#pricing')}
              className="hidden sm:flex rounded-[100px] border-2 border-[#057067] text-[#057067] font-['Sora',Helvetica] font-medium px-4 md:px-6 py-2.2 md:py-3.85 bg-transparent hover:opacity-80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out text-sm md:text-base"
            >
              Join Waitlist
            </Button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#057067] hover:bg-[#057067] transition-all duration-300 ease-out group"
            >
              <svg className="w-5 h-5 text-[#057067] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main content - moved up by reducing top padding */}
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-6 md:gap-[35px] pt-[40px] md:pt-[80px] z-10 relative px-4 md:px-6">
          {/* Hero text content */}
          <div 
            ref={heroRef}
            className={`flex flex-col w-full max-w-[827.35px] items-center gap-6 md:gap-11 transition-all duration-1000 ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col items-center gap-4 md:gap-[25px] w-full">
              <h1 className="font-['Besley',Helvetica] font-medium text-[#2c2c2c] text-[40px] md:text-[70px] text-center leading-[50px] md:leading-[87px] w-full transition-all duration-1200 ease-out">
                Manage Social Like You&apos;re Texting
              </h1>
              <p className="font-['Sora',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg text-center leading-6 max-w-[797px] transition-all duration-1000 ease-out delay-200">
                The smartest, chat-first AI assistant for effortless social
                media management. Designed for managers, teams and creators to
                save time, grow faster, and stay Zen.
              </p>
            </div>

            {/* Email input and waitlist button - decreased width by 15% (from 712px to 605px) */}
            <div className="flex flex-col w-full max-w-[605px] items-center gap-6 md:gap-[37px] transition-all duration-1000 ease-out delay-400">
              <form onSubmit={handleSubmit} className="relative w-full h-[60px] md:h-[81px] bg-[#ebf4f4] rounded-[30px] md:rounded-[40px] overflow-hidden border border-solid border-[#bab9b9] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="absolute w-[calc(100%-200px)] md:w-[calc(100%-272px)] h-full top-0 left-0 border-none bg-transparent pl-4 md:pl-7 font-['Sora',Helvetica] font-normal text-[#868686] text-sm md:text-base focus:outline-none focus:ring-0 focus:border-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none transition-all duration-300 disabled:opacity-50"
                  style={{ boxShadow: 'none' }}
                />
                <Button 
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="absolute w-[195px] md:w-[267px] h-[50px] md:h-[70px] top-[5px] right-[5px] rounded-[100px] bg-[#057067] text-white font-['Sora',Helvetica] font-medium text-sm md:text-base hover:bg-[#0a8a7d] hover:shadow-lg transition-all duration-300 ease-out border-none disabled:bg-[#057067] disabled:opacity-100 disabled:text-white disabled:cursor-not-allowed px-4 md:px-6"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist to Stay Zen'}
                </Button>
              </form>
              <p className="font-['Sora',Helvetica] font-normal text-[#868686] text-sm md:text-base text-center leading-6 transition-opacity duration-500 ease-out">
                By joining you&#39;re agreeing to receive emails from us
              </p>
            </div>
          </div>

          {/* App preview - responsive with doubled gap from disclaimer text */}
          <img
            ref={imageRef}
            className={`w-full max-w-[800px] md:max-w-[1235px] h-auto rounded-[20px] md:rounded-[30px] border-[3px] md:border-[5px] border-solid border-[#ffffff4c] mb-6 md:mb-10 mt-12 md:mt-[74px] transition-all duration-700 ease-out ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            alt="ZenShifu Product Interface"
            src="/Product image.png"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        onNavigate={scrollToSection}
      />
    </section>
  );
};