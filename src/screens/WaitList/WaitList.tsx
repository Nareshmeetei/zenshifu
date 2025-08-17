import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FinalCallToActionSection } from "./sections/FinalCallToActionSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { ProblemOverviewSection } from "./sections/ProblemOverviewSection";
import { TargetAudienceSection } from "./sections/TargetAudienceSection";
import { UniqueValuePropositionSection } from "./sections/UniqueValuePropositionSection";
import { Footer } from "./sections/Footer/Footer";

export const WaitList = (): JSX.Element => {
  // Array of app icons/logos for the "Connect & Manage" section - Updated order as requested
  const appIcons = [
    { src: "/Group-8.svg", alt: "Instagram" },
    { src: "/Group-6.svg", alt: "TikTok" },
    { src: "/Group-5.svg", alt: "LinkedIn" },
    { src: "/Group-4.svg", alt: "X (Twitter)" },
    { src: "/Group 1000004277.svg", alt: "Facebook" },
    { src: "/Group-3.svg", alt: "Snapchat" },
    { src: "/Group-2.svg", alt: "YouTube" },
    { src: "/Group 1000004280.svg", alt: "Google" },
    { src: "/Group.svg", alt: "Threads" },
    { src: "/Group-7.svg", alt: "Pinterest" },
    { src: "/Group 1000004281.svg", alt: "Bluesky" },
    { src: "/Group-1.svg", alt: "Mastodon" }
  ];

  return (
    <div className="bg-[#e7eefe] flex flex-row justify-center w-full">
      <div className="bg-[#e7eefe] overflow-hidden w-full">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* Spacer between Hero and Problem Overview */}
        <div className="py-4 md:py-8"></div>
        
        {/* Problem Overview Section */}
        <ProblemOverviewSection />
        
        {/* Spacer between Problem Overview and How It Works */}
        <div className="py-5 md:py-10"></div>
        
        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        {/* Spacer between How It Works and Unique Value Proposition */}
        <div className="py-6 md:py-12"></div>
        
        {/* Unique Value Proposition Section */}
        <UniqueValuePropositionSection />
        
        {/* Spacer between UVP and Target Audience */}
        <div className="py-5 md:py-10"></div>
        
        {/* Target Audience Section */}
        <section id="who-its-for">
          <TargetAudienceSection />
        </section>

        {/* Spacer before Zen Cat Section */}
        <div className="py-4 md:py-8"></div>

        {/* Zen Cat Section - Centered with left-aligned text and floating animation - Text reduced by 10% - Only one shadow below image moved up a little bit and to the right */}
        <div className="w-full py-4 md:py-8 flex justify-center">
          <div className="relative w-full max-w-[1440px] flex justify-center px-4 md:px-6">
            <div className="relative flex justify-center">
              <img
                className="w-full max-w-[600px] md:max-w-[927px] h-auto"
                alt="Vector"
                src="/vector.png"
              />

              <div className="absolute w-full max-w-[640px] md:max-w-[983px] h-auto top-[15%] md:top-[141px] left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col md:flex-row items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 w-full px-4">
                  {/* Text reduced by 10% */}
                  <div className="relative w-full max-w-[270px] md:max-w-[452px] font-['Besley',Helvetica] font-medium text-[#041c21] text-[22px] md:text-[36px] tracking-[0] leading-[32px] md:leading-[55px] text-center md:text-left mb-4 md:mb-0">
                    More tabs and clicks, you suffer. More Zen, you rise. Stay
                    Zen!
                  </div>

                  <div className="relative w-full max-w-[300px] md:max-w-[481.2px] h-auto md:ml-8">
                    <div className="relative w-full">
                      <img
                        className="w-full max-w-[300px] md:max-w-[471px] h-auto animate-float"
                        alt="Zen Cat Meditation"
                        src="/Group copy copy.png"
                      />

                      {/* Only the top green circle */}
                      <div className="absolute w-[60px] md:w-[116px] h-[60px] md:h-[116px] top-5 md:top-10 left-0 bg-[#b5ff99] rounded-[30px] md:rounded-[58px]" />
                      
                      {/* Single blurred circular vector positioned upward and to the right (from -80/-110 to -60/-90 and moved right) */}
                      <div className="absolute w-[160px] md:w-[238px] h-[16px] md:h-6 bottom-[-60px] md:bottom-[-90px] left-[60%] transform -translate-x-1/2 bg-[#05706733] rounded-[80px/8px] md:rounded-[119px/12px] blur-[10px] md:blur-[14.5px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer before Pricing Plans */}
        <div className="py-5 md:py-10"></div>

        {/* Pricing Plans Section */}
        <section id="pricing">
          <PricingPlansSection />
        </section>

        {/* Spacer before Connect & Manage */}
        <div className="py-6 md:py-12"></div>

        {/* Connect & Manage Section - Made logos horizontally center aligned - Increased container width by 20% and gaps doubled */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1440px] px-4 md:px-6">
            <Card className="w-full bg-[#f0fdfd80] rounded-[20px] md:rounded-[30px] border-[#cde2e1]">
              <CardContent className="p-8 md:p-[72px]">
                <div className="flex flex-col items-center gap-6 md:gap-[37px]">
                  <h2 className="font-['Besley',Helvetica] font-medium text-[#2c2c2c] text-[28px] md:text-[40px] text-center leading-[40px] md:leading-[55px]">
                    Connect & Manage Them All In One Chat
                  </h2>

                  {/* Mobile: 2 rows, Desktop: single row */}
                  <div className="w-full max-w-[660px] md:max-w-[924px] bg-[#f3f8f780] rounded-[44px] md:rounded-[73px] border-[0.73px] border-solid border-[#cde2e1] overflow-hidden mx-auto">
                    {/* Mobile: Grid layout with 2 rows */}
                    <div className="md:hidden grid grid-cols-6 gap-3 p-4">
                      {appIcons.map((icon, index) => (
                        <div
                          key={index}
                          className="relative w-[31px] h-[31px] flex-shrink-0 flex items-center justify-center"
                        >
                          <img
                            className="w-full h-full object-contain"
                            alt={icon.alt}
                            src={icon.src}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Desktop: Flex layout with single row */}
                    <div className="hidden md:flex items-center justify-center gap-[26px] h-[94px] px-[32px]">
                      {appIcons.map((icon, index) => (
                        <div
                          key={index}
                          className="relative w-[44px] h-[44px] flex-shrink-0"
                        >
                          <img
                            className="w-full h-full object-contain"
                            alt={icon.alt}
                            src={icon.src}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Spacer before Final CTA */}
        <div className="py-5 md:py-10"></div>

        {/* Final Call to Action Section */}
        <section id="early-access">
          <FinalCallToActionSection />
        </section>

        {/* Zendo Footer Image - Increased by 30% (from 702px to 913px max-width) */}
        <div className="w-full flex justify-center px-4">
          <img
            className="w-full max-w-[650px] md:max-w-[913px] h-auto"
            alt="Zendo Footer"
            src="/Zendo Footer.png"
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};