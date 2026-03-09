// "use client";

// import { useState } from "react";
// import CallButton from "./CallButton";
// import Logo from "./Logo";
// import Navlinks from "./NavLinks";
// import { usePathname } from "next/navigation";

// type Props = {
//   isLanding: boolean;
//   onToggle: () => void;
//   announcementVisible: boolean;
// };

// const Navbar = ({ announcementVisible }: Props) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const pathname = usePathname();

//   // Home page only
//   const isHome = pathname === "/";

//   return (
//     <>

//       {/* <nav
//         className={`w-full ${
//           isHome ? "lg:mt-[0px]" : "lg:mt-0"
//         } mt-0  top-0 left-0 right-0 z-50 bg-white box-border`}
//       > */}
// <nav
//   className={`w-full sticky ${
//     announcementVisible ? "top-[80px]" : "top-0"
//   } z-50 bg-white box-border`}
// >
//         <div className="flex items-center justify-between mx-auto max-w-[1440px] lg:h-[96px] h-[64px] px-4 md:px-14">
//           <Logo />


//           <div className="hidden md:flex items-center gap-4">
//             <Navlinks />
//             <CallButton />
//           </div>

//           {/* Mobile Navigation */}
//           <div className="flex md:hidden items-center gap-4">
//             <CallButton />
//             {/* Optional: Hamburger menu for mobile if you have more nav links */}
//             <button onClick={toggleMobileMenu} className="">
              // <svg
              //   width="20"
              //   height="20"
              //   viewBox="0 0 20 20"
              //   fill="none"
              //   xmlns="http://www.w3.org/2000/svg"
              // >
                
              //   <line
              //     x1="1.42859"
              //     y1="1.60714"
              //     x2="18.5714"
              //     y2="1.60714"
              //     stroke="#1B1B1B"
              //     strokeWidth="1.07143"
              //   />
              //   <line
              //     x1="1.42859"
              //     y1="18.0357"
              //     x2="18.5714"
              //     y2="18.0357"
              //     stroke="#1B1B1B"
              //     strokeWidth="1.07143"
              //   />
              //   <line
              //     x1="9.66608"
              //     y1="9.46429"
              //     x2="18.5715"
              //     y2="9.46429"
              //     stroke="#1B1B1B"
              //     strokeWidth="1.07143"
              //   />
              // </svg>
//             </button>
//           </div>
//         </div>
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute z-50 bg-white w-[180px] h-[146px]  top-[121px] left-[223px] rounded-[12px] border-[0.6px] border-[#D3D3D3] ">
//             <div className="px-5 py-6">
//               {/* Navigation Links */}
//               <div className="mb-8 robotoText">
//                 <div className="text-[#1B1B1B] robotoText mb-2 text-[14px]">
//                   Services
//                 </div>
//                 <div className="text-[#1B1B1B] robotoText  mb-2 text-[14px]">
//                   Our Works
//                 </div>
//                 <div className="text-[#1B1B1B] robotoText mb-2 text-[14px]">
//                   Our Process
//                 </div>
//                 <div className="text-[#1B1B1B] robotoText mb-2 text-[14px]">
//                   About Us
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;




"use client";

import { useState , useEffect} from "react";
import CallButton from "./CallButton";
import Logo from "./Logo";
import Navlinks from "./NavLinks";
import { usePathname } from "next/navigation";

type Props = {
  announcementVisible: boolean;
};

const Navbar = ({ announcementVisible }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Services", id: "services" },
    { name: "Our Works", id: "our-works" },
    { name: "Our Process", id: "our-process" },
    { name: "About Us", id: "about-us" },
  ];
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`w-full sticky ${
          announcementVisible ? "lg:top-[80px] top-[58px]" : "top-0"
        } z-50 bg-white`}
      >
        <div className="flex items-center justify-between mx-auto max-w-[1440px] lg:h-[96px] h-[64px] px-4 md:px-14">
          <Logo />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Navlinks />
            <CallButton />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
            <CallButton />

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
                <line
                  x1="1.42859"
                  y1="1.60714"
                  x2="18.5714"
                  y2="1.60714"
                  stroke="#1B1B1B"
                  strokeWidth="1.07143"
                />
                <line
                  x1="1.42859"
                  y1="18.0357"
                  x2="18.5714"
                  y2="18.0357"
                  stroke="#1B1B1B"
                  strokeWidth="1.07143"
                />
                <line
                  x1="9.66608"
                  y1="9.46429"
                  x2="18.5715"
                  y2="9.46429"
                  stroke="#1B1B1B"
                  strokeWidth="1.07143"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute z-50 bg-white w-[200px] top-[80px] right-4 rounded-[12px] border border-[#D3D3D3]">
            <div className="p-4 robotoText">
            {links.map((link) => {
              const href = pathname === "/" ? `#${link.id}` : `/${`#${link.id}`}`;
              return (
                <a
                  key={link.id}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mb-3 text-[14px] text-[#1B1B1B]"
                >
                  {link.name}
                </a>
              );
            })}
           </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;