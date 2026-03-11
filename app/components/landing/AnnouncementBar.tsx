"use client";
import { usePathname } from "next/navigation";

type Props = {
  onClose: () => void;
};

export default function AnnouncementBar({ onClose }: Props) {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="xl:w-full w-full sm:w-[412px] md:w-[768px] lg:w-[1440px] mx-auto bg-gradient-to-r from-[#7415B7] to-[#B85DF8] sticky top-0 z-50">
      <div className="lg:min-h-[60px] h-[36px] mx-auto px-6 flex items-center justify-center relative">
        {/* Text */}
        <p className="text-white sm:text-[8px] text-[8px] lg:text-[18px] leading-[150%] tracking-[0%] text-center robotoText">
          Helping teams build clear brands and launch faster.  
          <a
            href="/contact-us"
            className="underline decoration-white underline-offset-4 ml-1"
          >
             Work with us
          </a>
        </p>
        {/* Close icon */}
        <button
          onClick={onClose}
          type="button"
          className="absolute  right-4 text-white cursor-pointer leading-none "
          aria-label="Close"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]" > <mask id="mask0_124_3194" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" > <rect width="32" height="32" fill="#D9D9D9" /> </mask> <g mask="url(#mask0_124_3194)"> <path d="M8.53339 24.4103L7.58972 23.4667L15.0564 16L7.58972 8.53335L8.53339 7.58968L16.0001 15.0563L23.4667 7.58968L24.4104 8.53335L16.9437 16L24.4104 23.4667L23.4667 24.4103L16.0001 16.9437L8.53339 24.4103Z" fill="white" /> </g> </svg> </button>
      </div>
    </div>
  );
}
