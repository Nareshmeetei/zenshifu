import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const HowItWorksSection = (): JSX.Element => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2);
  const [cardRef, cardVisible] = useScrollAnimation(0.3);
  
  const [typedText, setTypedText] = useState("");
  const fullText = "Schedule a LinkedIn post Friday at 10am: Behind-the-scenes product shot 👀";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const typeText = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          // Restart typing after a pause
          setTimeout(() => {
            setTypedText("");
            setIsTyping(true);
          }, 3000);
        }
      }, 80); // Typing speed

      return () => clearInterval(interval);
    };

    const cleanup = typeText();
    return cleanup;
  }, [isTyping, fullText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-8 md:py-16 bg-[#f0fdfd80] relative">
      <div className="flex flex-col items-center gap-8 md:gap-[45px] w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className={`flex flex-col items-center gap-4 md:gap-[21px] w-full max-w-[984px] transition-all duration-1000 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="[font-family:'Besley',Helvetica] font-medium text-[#2c2c2c] text-[28px] md:text-[40px] text-center leading-[40px] md:leading-[55px] transition-all duration-1200 ease-out">
            ZenShifu Is the Calm in the Content Storm
          </h2>

          <p className="[font-family:'Sora',Helvetica] font-normal text-[#5e5e5e] text-base text-center leading-6 transition-all duration-1000 ease-out delay-200">
            One chat. All your socials. Done. You just say what you want... like
            this:
          </p>
        </div>

        <Card 
          ref={cardRef}
          className={`w-full max-w-[772.84px] h-[120px] md:h-[165px] bg-[#ebf4f4] rounded-[30px] md:rounded-[42.58px] overflow-hidden border-[1.06px] border-solid border-[#bab9b9] relative transition-all duration-500 ease-out ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute w-full max-w-[600px] md:max-w-[699px] top-4 md:top-7 left-4 md:left-[29px] [font-family:'Sora',Helvetica] font-normal text-[#5e5e5e] text-[14px] md:text-[18.1px] leading-[20px] md:leading-[25.5px] pr-4">
            {typedText}
            <span className="animate-pulse text-[#057067] transition-opacity duration-300">|</span>
          </div>

          {/* Plus icon */}
          <div className="absolute w-[30px] md:w-[43px] h-[30px] md:h-[43px] bottom-4 md:bottom-[17px] left-4 md:left-6 bg-[#eff1f0] rounded-[15px] md:rounded-[106.45px] overflow-hidden border-[1.06px] border-solid border-[#d5d5d5] flex items-center justify-center transition-all duration-300 ease-out cursor-pointer">
            <svg className="w-[18px] md:w-[26px] h-[18px] md:h-[26px] transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="#5e5e5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Sparkles icon */}
          <div className="absolute w-[30px] md:w-[43px] h-[30px] md:h-[43px] bottom-4 md:bottom-[17px] left-[60px] md:left-[83px] bg-[#eff1f0] rounded-[15px] md:rounded-[106.45px] overflow-hidden border-[1.06px] border-solid border-[#d5d5d5] flex items-center justify-center transition-all duration-300 ease-out cursor-pointer">
            <svg className="w-[18px] md:w-[26px] h-[18px] md:h-[26px] transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.813 15.904L9 18.75L8.187 15.904C7.72 14.47 6.53 13.28 5.096 12.813L2.25 12L5.096 11.187C6.53 10.72 7.72 9.53 8.187 8.096L9 5.25L9.813 8.096C10.28 9.53 11.47 10.72 12.904 11.187L15.75 12L12.904 12.813C11.47 13.28 10.28 14.47 9.813 15.904Z" stroke="#5e5e5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.25 3.75L15.813 5.096C15.58 5.78 15.22 6.42 14.75 6.75L13.5 7.5L14.75 8.25C15.22 8.58 15.58 9.22 15.813 9.904L16.25 11.25L16.687 9.904C16.92 9.22 17.28 8.58 17.75 8.25L19 7.5L17.75 6.75C17.28 6.42 16.92 5.78 16.687 5.096L16.25 3.75Z" stroke="#5e5e5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.25 14.75L18.937 15.596C18.82 15.88 18.62 16.08 18.404 16.187L17.5 16.5L18.404 16.813C18.62 16.92 18.82 17.12 18.937 17.404L19.25 18.25L19.563 17.404C19.68 17.12 19.88 16.92 20.096 16.813L21 16.5L20.096 16.187C19.88 16.08 19.68 15.88 19.563 15.596L19.25 14.75Z" stroke="#5e5e5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Arrow up icon with green background */}
          <div className="absolute w-[30px] md:w-[43px] h-[30px] md:h-[43px] bottom-4 md:bottom-[17px] right-4 md:right-6 bg-[#b5ff99] rounded-[15px] md:rounded-[106.45px] overflow-hidden border-[1.06px] border-solid border-[#bababa] flex items-center justify-center transition-all duration-300 ease-out cursor-pointer">
            <svg className="w-[18px] md:w-[26px] h-[18px] md:h-[26px] transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14L12 9L17 14" stroke="#057067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Card>

        <div className={`flex flex-col w-full max-w-[929px] items-center gap-8 md:gap-[52px] transition-all duration-1000 ease-out delay-300 ${
          cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="[font-family:'Sora',Helvetica] font-normal text-[#5e5e5e] text-lg md:text-xl text-center transition-all duration-1000 ease-out">
            <span className="font-bold leading-7">It does the rest:</span>
            <span className="text-[20px] md:text-[25px] leading-7">
              {" "}
              <br />
            </span>
            <span className="text-base leading-7">
              Writing draft, formatting, scheduling, optimizing, and even
              adapting for each platform.
            </span>
          </div>

          <Button 
            onClick={() => scrollToSection('#pricing')}
            className="w-full max-w-[351px] h-[60px] md:h-[70px] bg-[#057067] text-white rounded-[100px] hover:bg-[#0a8a7d] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out border-none"
          >
            <span className="[font-family:'Sora',Helvetica] font-medium text-base">
              Join Waitlist for Early Access
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};