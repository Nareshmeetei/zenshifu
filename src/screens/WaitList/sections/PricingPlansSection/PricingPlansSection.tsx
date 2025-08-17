import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

// Define plan data for reusability
const pricingPlans = [
  {
    name: "Founding Member Plan",
    description: "One price. Lifetime bragging rights.",
    price: "$99",
    paymentLink: "https://checkout.dodopayments.com/buy/pdt_hXTdqrKtCrwR2jDdPLtPa?quantity=1",
    features: [
      "1 Social Set",
      "30 Posts/month",
      "1 User Account",
      "Unlimited Manual Schedule",
      "30 Task Prompts/day",
      "500 Task Prompts/month",
      "100 AI Chats/day",
      "Advanced analytics",
      "Engagement inbox",
      "Lifetime discount secured",
    ],
  },
];

export const PricingPlansSection = (): JSX.Element => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.3);
  const [guaranteeRef, guaranteeVisible] = useScrollAnimation(0.4);

  const handlePurchase = (paymentLink: string) => {
    window.open(paymentLink, '_blank');
  };

  return (
    <section id="pricing" className="py-16 md:py-24 w-full mt-12 md:mt-16">
      <div className="flex flex-col items-center gap-8 md:gap-[61px] w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <div 
          ref={headerRef}
          className={`flex flex-col items-center gap-4 md:gap-[21px] max-w-[984px] w-full transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-medium text-[28px] md:text-[40px] text-[#2c2c2c] text-center leading-[40px] md:leading-[55px] [font-family:'Besley',Helvetica] transition-all duration-1200 ease-out">
            Special Limited Time Waitlist Offer
          </h2>

          <p className="text-[#5e5e5e] text-base text-center leading-6 [font-family:'Sora',Helvetica] transition-all duration-1000 ease-out delay-200">
            This one-time-payment offer&apos;s only for those who sign up for
            the waitlist. The price will be changed after launch.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-[59px] w-full">
          <div 
            ref={cardsRef}
            className="flex justify-center w-full"
          >
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`w-full max-w-[351px] md:max-w-[780px] mx-auto bg-[#f3f8f7] rounded-[20px] md:rounded-[30px] border-[#cde2e1] overflow-hidden transition-all duration-500 ease-out ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center gap-4 md:gap-[27px] pt-4 md:pt-[23px]">
                    <div className="flex flex-col w-[280px] md:w-[655px] items-start gap-6 md:gap-[37px]">
                      <div className="flex flex-col gap-4 md:gap-6 w-full">
                        <div className="flex flex-col gap-[5px] w-full">
                          <div className="relative">
                            <h3 className="font-medium text-[20px] md:text-[25px] text-[#2c2c2c] leading-[40px] md:leading-[55px] [font-family:'Besley',Helvetica] transition-all duration-300 ease-out">
                              {plan.name}
                            </h3>
                            {plan.recommended && (
                              <span className="absolute top-[16px] md:top-[21px] left-[40px] md:left-[51px] text-xs md:text-sm text-[#7b7b7b] [font-family:'Sora',Helvetica] animate-pulse">
                                (Recommended)
                              </span>
                            )}
                          </div>
                          <p className="text-[#5e5e5e] text-sm md:text-base leading-[18px] md:leading-[22px] [font-family:'Sora',Helvetica] transition-all duration-300 ease-out">
                            {plan.description}
                          </p>
                        </div>

                        <div className="relative">
                          <span className="font-semibold text-[36px] md:text-[45px] text-[#057067] leading-[40px] md:leading-[55px] [font-family:'Besley',Helvetica] transition-all duration-300 ease-out">
                            {plan.price}
                          </span>
                          <span className="absolute top-[20px] md:top-[29px] ml-2 text-sm md:text-base text-[#5e5e5e] [font-family:'Sora',Helvetica]">
                            One-time
                          </span>
                        </div>
                      </div>

                      <Button 
                        onClick={() => handlePurchase(plan.paymentLink)}
                        className="w-full h-[50px] md:h-[58px] bg-[#057067] text-white rounded-[100px] hover:bg-[#0a8a7d] hover:-translate-y-1 hover:shadow-lg font-medium text-sm md:text-base [font-family:'Sora',Helvetica] transition-all duration-300 ease-out border-none"
                      >
                        Get {plan.name} Plan
                      </Button>
                    </div>

                    <div className="w-full h-px bg-[#cde2e1]" />

                    <div className="w-[250px] md:w-[624px] pb-4 md:pb-6">
                      {/* Mobile: Single column list */}
                      <ul className="md:hidden space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 transition-all duration-300 ease-out"
                          >
                            <div className="w-4 h-4 mt-1 bg-[#b5ff99] rounded-full flex items-center justify-center transition-all duration-300 ease-out">
                              <CheckIcon className="w-3 h-3 text-[#057067]" />
                            </div>
                            <span className="text-[#7b7b7b] text-sm leading-[28px] [font-family:'Sora',Helvetica] transition-colors duration-300 ease-out">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Desktop: Two column grid */}
                      <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-[9px] transition-all duration-300 ease-out"
                          >
                            <div className="w-[18px] h-[18px] mt-[7px] bg-[#b5ff99] rounded-full flex items-center justify-center transition-all duration-300 ease-out">
                              <CheckIcon className="w-[13px] h-[13px] text-[#057067]" />
                            </div>
                            <span className="text-[#7b7b7b] text-base leading-[34px] [font-family:'Sora',Helvetica] transition-colors duration-300 ease-out">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div 
            ref={guaranteeRef}
            className={`w-full max-w-[617px] h-[50px] md:h-[60px] bg-[#e2ffd7] rounded-[100px] border-[3px] md:border-[5px] border-[#cde2e1] flex items-center justify-center transition-all duration-300 ease-out ${
              guaranteeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[#5e5e5e] text-sm md:text-base font-semibold text-center [font-family:'Sora',Helvetica] px-4">
              Risk free! 100% refund within 5 months if not happy with ZenShifu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};