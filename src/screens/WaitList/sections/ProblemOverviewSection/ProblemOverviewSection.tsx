import React from "react";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

// Data for pain points to enable mapping
const painPoints = [
  "You waste days just setting things up.",
  "People visit your store, but no one buys.",
  "Others launch faster and steal your customers.",
  "You spend more time wrestling with tools than selling.",
];

export const ProblemOverviewSection = (): JSX.Element => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2);
  const [imageRef, imageVisible] = useScrollAnimation(0.3);

  return (
    <section className="w-full py-8 md:py-16 relative flex justify-center items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28">
          <div 
            ref={sectionRef}
            className={`flex flex-col w-full md:w-[596px] items-start gap-4 transition-all duration-1000 ease-out ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex flex-col items-start gap-4 md:gap-[22px] w-full">
              <h2 className="font-['Besley',Helvetica] font-medium text-[#2c2c2c] text-[28px] md:text-[40px] leading-[40px] md:leading-[55px] transition-all duration-1200 ease-out">
              You’re Losing Time. You’re Losing Sales.
              </h2>

              <p className="font-['Sora',Helvetica] font-normal text-[#5e5e5e] text-base leading-6 transition-all duration-1000 ease-out delay-200">
              If your tool takes days to learn or using older ones, here’s what’s really happening...
              </p>
            </div>

            <ul className="mt-2 space-y-[6px]">
              {painPoints.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 md:gap-[26px] transition-all duration-700 ease-out ${
                    sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-4 h-4 mt-[7px] bg-[#F75252] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-out">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <span className="font-['Sora',Helvetica] font-normal text-[#5e5e5e] text-base leading-[31px] transition-colors duration-300 ease-out">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div 
            ref={imageRef}
            className={`relative w-full max-w-[250px] md:max-w-[302px] h-auto flex-shrink-0 transition-all duration-1000 ease-out ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Only one green circle positioned at the top */}
            <div className="w-[60px] md:w-[88px] h-[60px] md:h-[88px] top-0 left-0 rounded-[30px] md:rounded-[44px] absolute bg-[#71FFE3] transition-all duration-500 ease-out z-0" />
            <img
              className="w-full h-auto transition-all duration-500 ease-out relative z-10"
              alt="Social media chaos illustration"
              src="/Social media illustration.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};