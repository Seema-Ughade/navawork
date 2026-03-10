"use client";

import { strategyData } from "./data/strategy-data";
import { StrategySection } from "./strategy-section";

export function GTMStrategyContainer() {
  return (
    <>
      <div className="w-full sm:w-[412px] xl:w-full lg:w-[1440px] lg:px-0 px-3 mx-auto  ">
        <section className="relative w-full  flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden snap-start bg-white">
          <div
            className=" absolute pointer-events-none w-[72.67px] h-[72.67px] top-[-18px] left-[351px] blur-[14.3px]  lg:w-[230px] lg:h-[220px] lg:top-[-90px] lg:left-auto lg:right-[-50px] lg:blur-[20px] "
            style={{
              background: "linear-gradient(180deg, #DAE6FF 0%, #CE88FF 100%)",
              borderRadius: "50%",
              opacity: 1,
            }}
          />

          <div className="relative z-10 max-w-7xl  mx-auto py-4 lg:py-10 text-center">
            {/* Badge - Marketing & GTM Strategy label */}
            <div className="inline-flex items-center justify-center mb-3 lg:mb-6 px-3 lg:px-6 py-1 lg:py-3 rounded-full bg-[#F5EAFD] border border-[#A23BEA]">
              <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">
                Marketing & GTM Strategy
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-[#1B1B1B] sm:text-center font-semibold robotoText text-[#1B1B1B] text-[32px] lg:text-[48px] mb-3 lg:mb-6 leading-tight">
              From Strategy to   <br className="block lg:hidden" />
Market Domination
            </h1>

            {/* Subtitle description */}
            <p className="w-full lg:max-w-[1047px] sm:text-center text-[#615F5F] text-[12px] lg:px-0 px-[12px] lg:text-[20px] robotoText mb-1  lg:mb-2 mx-auto leading-relaxed">
              We don't just design brands—we launch them into the market with
              precision strategies that drive awareness, engagement, and revenue
              growth.
            </p>
          </div>
        </section>

        {strategyData.map((section, index) => (
          <section
            key={section.id}
            // className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 bg-white snap-start"
              className="sticky top-40 bg-white w-full flex items-center justify-center bg-white"

          >
            <StrategySection section={section} />
          </section>
        ))}
      </div>
      
    </>
  );
}
