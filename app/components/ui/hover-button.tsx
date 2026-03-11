
'use client';

import React from "react";

interface HoverButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function HoverButton({
  children,
  href,
  className = "",
  type = "button",
  disabled = false,
}: HoverButtonProps) {

  const baseStyles = ` relative overflow-hidden transition-colors duration-300 group rounded-full ${className} `; 
  const content = (
    <>
      {/* Hover background */}
      <span
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[140%] 
        aspect-square rounded-full bg-[#9542cf] scale-0 origin-top 
        transition-transform duration-500 ease-out group-hover:scale-100"
      />

      {/* Text */}
      <span className="relative z-10 group-hover:text-white flex items-center justify-center gap-2 transition-colors duration-300">
        {children}
      </span>
    </>
  );

  /* If href exists → render anchor */
  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  /* Otherwise render button */
  return (
    <button type={type} disabled={disabled} className={baseStyles}>
      {content}
    </button>
  );
}