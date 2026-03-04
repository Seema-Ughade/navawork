import { HoverButton } from "../ui/hover-button";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <section className="bg-[#1B1B1B] robotoText w-full sm:w-[412px] lg:w-[1440px] mx-auto text-white lg:py-16 lg:px-16 py-6 px-5">
      <div className="flex flex-col items-center justify-center lg:gap-8 gap-4">
        <h1 className="font-semibold tracking-[0] robotoText text-[24px] lg:text-[64px] text-center max-w-[1127px] leading-[120%]">
          We craft brands and propel <br className="block lg:hidden" />
          them toward market success <br className="block lg:hidden" />
        </h1>

        <p className="text-[10px] lg:text-[24px]  max-w-[1040px] robotoText text-center font-medium">
          Let’s create something extraordinary — connect with us and ready to
          build something great
        </p>

        <div className="flex lg:flex-row flex-col gap-8 lg:max-w-[418px] w-full robotoText justify-center">
<HoverButton className="lg:max-w-[192px] w-full h-[32px] lg:h-[56px] text-[12px] lg:text-[19.9px] px-6 bg-white text-[#1B1B1B] rounded-[48px] font-medium">
  Contact Us
</HoverButton>

<HoverButton className="lg:max-w-[192px] w-full h-[32px] lg:h-[56px] text-[12px] lg:text-[19.9px] px-6 border-2 border-white hover:border-[#ad6cdb] text-white font-medium rounded-[48px]">
  Schedule a Call
</HoverButton>        </div>
      </div>
    </section>
  );
}
