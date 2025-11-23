import { FinalCallToActionSection } from "./sections/FinalCallToActionSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { ProblemOverviewSection } from "./sections/ProblemOverviewSection";
import { TargetAudienceSection } from "./sections/TargetAudienceSection";
import { UniqueValuePropositionSection } from "./sections/UniqueValuePropositionSection";
import { Footer } from "./sections/Footer/Footer";

export const WaitList = (): JSX.Element => {
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
        <div className="py-5 md:py-1"></div>
        
        {/* Target Audience Section */}
        <section id="who-its-for">
          <TargetAudienceSection />
        </section>

        {/* Spacer before Zen Cat Section */}
        <div className="py-4 md:py-8"></div>

        {/* Zen Cat Section - Break section with text and meditating cat */}
        <div className="w-full py-12 md:py-20 flex justify-center">
          <div className="w-full max-w-[1000px] px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Text on left */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="font-['Besley',Helvetica] font-medium text-[#041c21] text-[24px] md:text-[36px] leading-[36px] md:leading-[55px]">
                  More tabs and clicks,<br />
                  you suffer. More Zen,<br />
                  you outbuild. Stay Zen!
                </div>
              </div>

              {/* Cat image on right */}
              <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative">
                  {/* Green circle behind cat */}
                  <div className="absolute w-[60px] md:w-[100px] h-[60px] md:h-[100px] top-0 left-[20%] bg-[#71FFE3] rounded-full" />

                  {/* Cat image */}
                  <img
                    className="relative w-[250px] md:w-[350px] h-auto animate-float"
                    alt="Zen Cat Meditation"
                    src="/Group copy copy.png"
                  />

                  {/* Shadow below cat */}
                  <div className="absolute w-[150px] md:w-[200px] h-[12px] md:h-[16px] bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-[#06645C33] rounded-[75px/8px] blur-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer before Pricing Plans */}
        <div className="py-5 md:py-1"></div>

        {/* Pricing Plans Section */}
        <section id="pricing">
          <PricingPlansSection />
        </section>

        {/* Spacer before Final CTA */}
        <div className="py-6 md:py-12"></div>

        {/* Final Call to Action Section */}
        <section id="early-access">
          <FinalCallToActionSection />
        </section>

        {/* Spacer after Final CTA */}
        <div className="py-5 md:py-10"></div>

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