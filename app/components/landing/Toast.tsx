"use client";

interface SuccessPopupProps {
  show: boolean;
  message: string;
}

export default function SuccessPopup({ show, message }: SuccessPopupProps) {
  if (!show) return null;

  return (
    <div
      className=" fixed inset-0 z-[9999] flex items-center justify-center bg-black/5 backdrop-blur-sm " >
         <div
        className=" w-[380px] h-[96px] bg-[#FCFCFC] rounded-[8px] flex items-center justify-center px-6 " > 
        <p
          className=" text-center text-[14px] leading-[150%] text-[#615F5F] font-normal robotoText max-w-[306px] "
        >
          {message}
        </p>
      </div>
    </div>
  );
}