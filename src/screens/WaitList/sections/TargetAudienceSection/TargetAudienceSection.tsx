import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const TargetAudienceSection = (): JSX.Element => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.3);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.4);

  // Data for audience cards to enable mapping - Updated for center alignment
  const audienceData = [
    {
      id: 1,
      title: "D2C Brands",
      description: "Build strong brand, look premium, sell fast.",
      iconSrc: "/Solopreneures icon.png",
      iconWidth: "174px",
      iconHeight: "154px",
    },
    {
      id: 2,
      title: "Lean Startups",
      description: "Manage and scale without tech debt.",
      iconSrc: "/Teams icon.png",
      iconWidth: "155px",
      iconHeight: "166px",
    },
    {
      id: 3,
      title: "Creators",
      description: "Turn ideas into brands without touching code.",
      iconSrc: "/Creators icon.png",
      iconWidth: "169px",
      iconHeight: "173px",
    },
    {
      id: 4,
      title: "Agencies",
      description: "Deliver elite stores in hours, not weeks.",
      iconSrc: "/Agencies icon.png",
      iconWidth: "133px",
      iconHeight: "185px",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="who-its-for" className="w-full pt-0 pb-8 md:pt-0 md:pb-8">
      {/* Reduced padding from bottom and sides by 30% (from 16/12 to 11.2/8.4, rounded to 11/8) */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-11 md:gap-[59px] px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-[50px] w-full">
          <div 
            ref={headerRef}
            className={`flex flex-col max-w-[984px] items-center gap-4 md:gap-[21px] transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-medium text-[28px] md:text-[40px] text-[#2c2c2c] text-center leading-[40px] md:leading-[55px] [font-family:'Besley',Helvetica] transition-all duration-1200 ease-out">
            Built for Modern SMBs Who Move Fast
            </h2>
            <p className="text-[#5e5e5e] text-base text-center leading-6 [font-family:'Sora',Helvetica] transition-all duration-1000 ease-out delay-200">
              Launch faster. Scale smarter. No tech overhead.
            </p>
          </div>

          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[26px] w-full max-w-[1306px]"
          >
            {audienceData.map((audience, index) => (
              <Card
                key={audience.id}
                className={`h-80 md:h-96 bg-[#f3f8f7b2] rounded-[20px] md:rounded-[30px] overflow-hidden border border-solid border-[#cde2e1] transition-all duration-500 ease-out ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Reduced padding inside cards by 30% (from p-6 md:p-12 to p-4 md:p-8) */}
                <CardContent className="p-4 md:p-8 h-full relative flex flex-col items-center justify-center">
                  {/* Center-aligned image container - Made images 10% bigger (from 144px to 158px) - REMOVED circular vector */}
                  <div className="relative flex items-center justify-center w-full h-[60%] pt-4">
                    <div className="relative">
                      {/* Main image centered - Increased by 10% (from 144px to 158px) - NO green circle background */}
                      <img
                        className="relative z-10 w-[106px] md:w-[158px] h-auto transition-all duration-300 ease-out"
                        alt={`${audience.title} icon`}
                        src={audience.iconSrc}
                      />
                    </div>
                  </div>

                  {/* Text content centered at bottom with reduced padding by 30% (from px-3 md:px-6 pb-3 md:pb-6 to px-2 md:px-4 pb-2 md:pb-4) */}
                  <div className="flex flex-col items-center text-center px-2 md:px-4 pb-2 md:pb-4 h-[40%] justify-end">
                    <h3 className="[font-family:'Besley',Helvetica] font-medium text-[#2c2c2c] text-[20px] md:text-[25px] leading-[30px] md:leading-[35px] mb-2 transition-all duration-300 ease-out">
                      {audience.title}
                    </h3>

                    <p className="[font-family:'Sora',Helvetica] font-normal text-[#5e5e5e] text-sm md:text-base leading-[18px] md:leading-[22px] transition-all duration-300 ease-out">
                      {audience.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reduced padding from button by 30% (from pt-8 md:pt-12 to pt-6 md:pt-8) */}
        <div className="pt-6 md:pt-8">
          {/* Made button wider with more padding to match the attached image */}
          <Button
            ref={buttonRef}
            onClick={() => scrollToSection('#pricing')}
            className={`w-full max-w-[500px] h-[60px] md:h-[70px] bg-[#06645C] text-white rounded-[100px] hover:bg-[#0a8a7d] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out border-none px-8 md:px-12 ${
              buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="[font-family:'Sora',Helvetica] font-medium text-base">
              Join Waitlist to Outbuild
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}