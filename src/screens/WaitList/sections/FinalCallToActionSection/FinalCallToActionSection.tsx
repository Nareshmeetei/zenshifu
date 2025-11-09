import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Toast } from "../../../../components/ui/toast";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { useWaitlistSignup } from "../../../../hooks/useWaitlistSignup";

export const FinalCallToActionSection = (): JSX.Element => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2);
  const [email, setEmail] = useState('');
  const { signupForWaitlist, isLoading, message, clearMessage } = useWaitlistSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const result = await signupForWaitlist(email, 'hero');
    if (result.success) {
      setEmail(''); // Clear the input on success
    }
  };

  return (
    <section className="w-full py-8 md:py-16 flex justify-center relative">
      {message && <Toast message={message} onClose={clearMessage} />}
      
      <div 
        ref={sectionRef}
        className={`flex flex-col w-full max-w-[1440px] items-center gap-4 md:gap-[26px] px-4 md:px-6 transition-all duration-1000 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col items-center gap-6 md:gap-[33px] w-full max-w-[1071px]">
          <h2 className="font-medium text-[#2c2c2c] text-[40px] md:text-[70px] text-center leading-[50px] md:leading-[76px] [font-family:'Besley',Helvetica] w-full transition-all duration-1200 ease-out">
            Less Setup. More Selling.
          </h2>

          <p className="[font-family:'Sora',Helvetica] font-normal text-[#5e5e5e] text-lg md:text-xl text-center leading-6 w-full transition-all duration-1000 ease-out delay-200">
            While others tweak menus, you&apos;re already making sales.<br />
            ZenShifu gives you time, taste, and total control—without the grind.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[853px] items-center gap-8 md:gap-[49px]">
          <div className="flex items-center justify-center w-full px-4">
            <p className="[font-family:'Sora',Helvetica] font-normal text-[#7b7b7b] text-sm md:text-base text-center leading-6 transition-all duration-1000 ease-out delay-400">
              More Zen. More Wins. Outbuild Ordinary.
            </p>
          </div>

          {/* Email form - stacked on mobile, inline on desktop */}
          <div className="w-full max-w-[605px]">
            {/* Desktop Form - Inline Layout */}
            <form onSubmit={handleSubmit} className="hidden md:block">
              <div className="relative w-full h-[81px] bg-[#ebf4f4] rounded-[40px] overflow-hidden border border-solid border-[#bab9b9] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="absolute w-[calc(100%-272px)] h-full top-0 left-0 border-none bg-transparent pl-7 font-['Sora',Helvetica] font-normal text-[#868686] text-base focus:outline-none focus:ring-0 focus:border-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none transition-all duration-300 disabled:opacity-50"
                  style={{ boxShadow: 'none' }}
                />
                <Button 
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="absolute w-[267px] h-[70px] top-[5px] right-[5px] rounded-[100px] bg-[#057067] text-white font-['Sora',Helvetica] font-medium text-base hover:bg-[#0a8a7d] hover:shadow-lg transition-all duration-300 ease-out border-none disabled:bg-[#057067] disabled:opacity-100 disabled:text-white disabled:cursor-not-allowed px-6"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
            </form>

            {/* Mobile Form - Stacked Layout */}
            <form onSubmit={handleSubmit} className="md:hidden flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full h-[50px] bg-[#ebf4f4] rounded-[25px] border border-solid border-[#bab9b9] px-4 font-['Sora',Helvetica] font-normal text-[#868686] text-sm focus:outline-none focus:ring-0 focus:border-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none transition-all duration-300 disabled:opacity-50"
                style={{ boxShadow: 'none' }}
              />
              <Button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="w-full h-[50px] bg-[#057067] text-white rounded-[25px] hover:bg-[#0a8a7d] hover:shadow-lg transition-all duration-300 ease-out border-none disabled:bg-[#057067] disabled:opacity-100 disabled:text-white disabled:cursor-not-allowed font-['Sora',Helvetica] font-medium text-sm"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};