import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

// Define the feature data for mapping
const features = [
  {
    title: "Chat-First Simplicity",
    description: "– Just type it out to get it done",
  },
  {
    title: "AI Agents on Autopilot",
    description: "– Handles all your boring stuff",
  },
  {
    title: "Multi-Platform Mastery",
    description: "– Instagram, LinkedIn, X, TikTok & more",
  },
  {
    title: "Designed for Growth & Sanity",
    description: "– Schedule, manage, grow & stay Zen",
  },
];

export const UniqueValuePropositionSection = (): JSX.Element => {
  const [imageRef, imageVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.3);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-8 md:py-16 flex justify-center">
      <div className="relative w-full max-w-[1291px] bg-[#e7eefe] rounded-[20px] md:rounded-[30px] overflow-hidden border-[3px] md:border-[5px] border-solid border-[#ffffff4c] mx-4 md:mx-6">
        {/* Background gradient effects with subtle animation */}
        <div className="absolute w-48 md:w-72 h-48 md:h-72 top-[200px] md:top-[342px] right-[50px] md:right-[1104px] bg-[#1af3f2cc] rounded-[72px] md:rounded-[144px] blur-[100px] md:blur-[200px] animate-pulse" />
        <div className="absolute w-[150px] md:w-[290px] h-[150px] md:h-[290px] top-[100px] md:top-[174px] left-[-50px] md:left-[-100px] bg-[#fa7d54cc] rounded-[75px] md:rounded-[145px] blur-[100px] md:blur-[200px] animate-pulse" />
        <div className="absolute w-[100px] md:w-[190px] h-[100px] md:h-[190px] top-[250px] md:top-[464px] left-[10px] md:left-[22px] bg-[#45f946] rounded-[50px] md:rounded-[95px] blur-[75px] md:blur-[150px] animate-pulse" />
        <div className="absolute w-[120px] md:w-[220px] h-[120px] md:h-[220px] top-[-90px] md:top-[-182px] right-[200px] md:right-[849px] bg-[#eba7d2] rounded-[60px] md:rounded-[110px] blur-[65px] md:blur-[125px] animate-pulse" />

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[104px] py-8 md:py-16 px-4 md:px-6">
          {/* Image section */}
          <div 
            ref={imageRef}
            className={`relative w-full max-w-[300px] md:max-w-[400px] h-auto transition-all duration-1000 ease-out ${
              imageVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img
              className="w-full h-auto transition-all duration-500 ease-out"
              alt="ZenShifu zen cat mascot"
              src="/ZenShifu mascot.png"
            />
          </div>

          {/* Content section */}
          <Card className="border-none shadow-none bg-transparent w-full max-w-[596px]">
            <CardContent 
              ref={contentRef}
              className={`p-0 flex flex-col items-start gap-4 md:gap-[22px] transition-all duration-1000 ease-out ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-3 md:gap-[15px] w-full">
                  <h2 className="mt-[-1.00px] font-['Besley',Helvetica] font-medium text-[#2c2c2c] text-[28px] md:text-[40px] leading-[40px] md:leading-[55px] transition-all duration-1200 ease-out">
                    Why It&apos;s Different
                  </h2>
                  <p className="font-['Sora',Helvetica] font-normal text-[#5e5e5e] text-base leading-6 transition-all duration-1000 ease-out delay-200">
                    ZenShifu isn&apos;t a tool. It&apos;s a teammate that works
                    for you
                  </p>
                </div>

                <ul className="space-y-[6px] w-full">
                  {features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-[9px] transition-all duration-700 ease-out ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="w-[18px] h-[18px] mt-1.5 bg-[#b5ff99] rounded-[54.28px] flex items-center justify-center transition-all duration-300 ease-out">
                        <CheckIcon className="w-[13px] h-[13px] text-[#057067] transition-transform duration-300" />
                      </div>
                      <span className="font-['Sora',Helvetica] text-[#5e5e5e] text-base leading-[31px] transition-colors duration-300 ease-out">
                        <span className="font-semibold">{feature.title}</span>
                        <span> {feature.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={() => scrollToSection('#pricing')}
                className="w-full max-w-[237px] h-[50px] md:h-[55px] bg-[#057067] text-white rounded-[100px] hover:bg-[#0a8a7d] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out border-none"
              >
                <span className="font-['Sora',Helvetica] font-medium text-base">
                  Join Waitlist
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};