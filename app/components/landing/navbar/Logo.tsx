import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
<div className="relative
    w-[156px] h-[24px]
    top-0 left-0
    lg:w-[200px] lg:h-[33px]
    lg:top-0 lg:right-0
">
  <Image
    src={logo}
    alt="Logo"
    fill       
    className="object-cover"  
  />
</div>
</Link> 
  );
};

export default Logo;
