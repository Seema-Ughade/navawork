import CareerForm from './career-form'

export default function CareerPage() {
  return (
    <div className="lg:w-[1440px] w-[412px] mx-auto bg-white relative overflow-hidden">
      {/* Pink Gradient Background Blob */}
<div
  className="
    absolute rounded-full pointer-events-none
    bg-[linear-gradient(180deg,#FDBFE2_0%,#FDBFE2_100%)]
    opacity-70
    blur-[10px] lg:blur-[30px] blur-[10px]

    /* Mobile */
    w-[101.57px] h-[101.57px]
    top-[22.29px] left-[155px]

    /* Desktop */
    lg:w-[355px] lg:h-[355px]
    lg:top-[63px] lg:left-[556px]
  "
/>



      <div className="max-w-7xl mx-auto px-6 lg:py-11 py-8 relative z-10">
        {/* Careers Badge */}
{/* Careers Badge */}
<div className="flex justify-center">
  <div className="inline-flex mt-3 lg:w-[164px] lg:h-[50px] sm:h-[28px] h-[28px] items-center justify-center mb-4 px-[20px] lg:py-[12px] py-[5px] rounded-[32px] bg-[#F5EAFD] border-[0.6px] border-[#A23BEA]">
    <div className="w-2 h-2 bg-[#FFD700] rotate-45 mr-2 flex-shrink-0" />
    <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">
      Careers
    </span>
  </div>
</div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="lg:text-[64px] text-[32px] robotoText font-semibold leading-tight text-[#1B1B1B] mb-4">
            Join the Team That Thinks<br className="hidden lg:block" />
            Beyond Design
          </h1>
          <p className="lg:text-[20px] text-[12px] lg:px-0 px-6 robotoText text-[#615F5F] max-w-[976px] mx-auto leading-relaxed">
            Work with people who turn insights into
            <span className="">meaningful brand experiences</span> — blending strategy, creativity, and user understanding to build solutions that truly{' '}
            <span className="">connect with audiences and drive measurable results.</span>
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <CareerForm />
        </div>
      </div>
    </div>
  )
}
