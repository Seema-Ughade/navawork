import HeroBackground from "../components/landing/hero-section/HeroBackground";

// Support option card
interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SupportCard({ icon, title, description }: SupportCardProps) {
  return (
    <div className="flex gap-4 lg:gap-5">
      <div className="bg-gradient-to-b from-[#D297FB] to-[#7415B7] p-3 lg:p-4 rounded-[8px] flex-shrink-0 flex items-center justify-center h-[48px] w-[48px] lg:h-16 lg:w-16">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-medium text-[#1B1B1B] robotoText text-[14px] lg:text-[20px] lg:mb-1">
          {title}
        </h3>
        <p className="text-[#615F5F] text-[12px] robotoText lg:text-[20px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// Contact card
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ContactCard({ icon, title, description }: ContactCardProps) {
  return (
    <div className="flex gap-3 lg:gap-4">
      <div className="bg-gradient-to-b from-[#D297FB] to-[#7415B7] p-3 lg:p-4 rounded-lg flex-shrink-0 flex items-center justify-center h-[48px] w-[48px] lg:h-[64px] lg:w-[64px]">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-medium text-[#1B1B1B] robotoText text-[14px] lg:text-[20px] mb-2 lg:mb-1">
          {title}
        </h4>
        <p className="text-[#615F5F] robotoText text-[12px] lg:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Support() {
  return (
    <main className="md:w-full w-full xl:w-full sm:w-[412px] mx-auto lg:w-[1440px] bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative mx-auto  px-4 lg:px-8 py-4 mt-4 lg:py-14 overflow-hidden">
        <HeroBackground />

        <div className="relative z-10">
            {/*  Badge */}
            <div className="flex justify-center">
            <div className="inline-flex mt-3 lg:w-[164px] lg:h-[50px] sm:h-[28px] h-[28px] items-center justify-center mb-4 px-[20px] lg:py-[12px] py-[5px] rounded-[32px] bg-[#F5EAFD] border-[0.6px] border-[#A23BEA]">
                <div className="w-2 h-2 bg-[#FFD700] rotate-45 mr-2 flex-shrink-0" />
                <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">
                Support
                </span>
            </div>
            </div>

          {/* Main Heading */}
          <h1 className="text-[32px] mx-auto lg:px-0 px-2 lg:w-[900px] robotoText lg:text-[64px] font-semibold text-[#1B1B1B] text-center mb-4 leading-tight">
  Support That Moves <br className="md:hidden" />
  You <br className="hidden md:block" />
  Forward
        </h1>

          {/* Subtitle */}
          <p className="text-center robotoText lg:px-0 px-6 robotoText text-center mx-auto mx-auto lg:w-[981px] text-[14px] lg:text-[20px] text-[#615F5F] mb-10 lg:mb-14 leading-relaxed">
        We’re here to solve your concerns and help you stay ahead — providing quick, reliable guidance so you can focus on your goals with confidence, clarity, and continuous momentum.</p>
          {/* How Can We Help Section */}
          <div className="lg:mb-14 mb-6 lg:px-0 px-4 mx-auto mx-auto lg:w-[1127px]">
            <h2 className="text-[14px] robotoText lg:text-[20px] font-medium text-[#1B1B1B] mb-4 lg:mb-6">
              How Can We Help You Today?
            </h2>
            <p className="text-[12px] mx-auto lg:w-[1127px] robotoText lg:text-[20px] text-[#615F5F] mb-10 leading-relaxed">
            Whether you need clarity on a project, want guidance on deliverables, or have questions about working together, we’re here to make things simple.            </p>

            {/* Support Cards Grid */}
            <div className="grid grid-cols-1 lg:px-0 gap-6 lg:gap-8">
              <SupportCard
                icon={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_7673" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_7673)"> <path d="M9.10234 33.3333C8.43817 33.3333 7.86623 33.0933 7.3865 32.6133C6.9065 32.1336 6.6665 31.5616 6.6665 30.8975V9.10248C6.6665 8.43831 6.9065 7.86637 7.3865 7.38665C7.86623 6.90665 8.43817 6.66665 9.10234 6.66665H17.4078C17.1936 5.8347 17.3512 5.07123 17.8807 4.37623C18.4104 3.68095 19.1168 3.33331 19.9998 3.33331C20.9043 3.33331 21.6214 3.68095 22.1511 4.37623C22.6805 5.07123 22.8275 5.8347 22.5919 6.66665H30.8973C31.5615 6.66665 32.1334 6.90665 32.6132 7.38665C33.0932 7.86637 33.3332 8.43831 33.3332 9.10248V30.8975C33.3332 31.5616 33.0932 32.1336 32.6132 32.6133C32.1334 33.0933 31.5615 33.3333 30.8973 33.3333H9.10234ZM9.10234 31.9229H30.8973C31.1537 31.9229 31.3887 31.8161 31.6023 31.6025C31.816 31.3889 31.9228 31.1539 31.9228 30.8975V9.10248C31.9228 8.84609 31.816 8.61109 31.6023 8.39748C31.3887 8.18387 31.1537 8.07706 30.8973 8.07706H9.10234C8.84595 8.07706 8.61095 8.18387 8.39734 8.39748C8.18373 8.61109 8.07692 8.84609 8.07692 9.10248V30.8975C8.07692 31.1539 8.18373 31.3889 8.39734 31.6025C8.61095 31.8161 8.84595 31.9229 9.10234 31.9229ZM12.4998 27.1154H22.4123V25.705H12.4998V27.1154ZM12.4998 20.705H27.4998V19.295H12.4998V20.705ZM12.4998 14.295H27.4998V12.8846H12.4998V14.295ZM19.9953 7.31623C20.3578 7.31623 20.67 7.1904 20.9319 6.93873C21.1936 6.68679 21.3244 6.37456 21.3244 6.00206C21.3244 5.62956 21.1936 5.31748 20.9319 5.06581C20.67 4.81387 20.3578 4.6879 19.9953 4.6879C19.633 4.6879 19.3259 4.81387 19.074 5.06581C18.8223 5.31748 18.6965 5.62956 18.6965 6.00206C18.6965 6.37456 18.8223 6.68679 19.074 6.93873C19.3259 7.1904 19.633 7.31623 19.9953 7.31623Z" fill="white"/> </g> </svg> }
                title="Project Assistance"
                description="Need help understanding a deliverable, process, or milestone? We’ll walk you through it clearly. Design Clarifications"
              />
              <SupportCard
                icon={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_7677" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_7677)"> <path d="M10.6411 32.6925C9.98411 32.6925 9.33425 32.5792 8.69147 32.3525C8.04897 32.1261 7.48092 31.8121 6.9873 31.4104C7.53869 31.0471 8.00772 30.5593 8.39439 29.9471C8.78105 29.3349 8.97439 28.5833 8.97439 27.6925C8.97439 26.7522 9.29494 25.9615 9.93606 25.3204C10.5772 24.6796 11.3677 24.3592 12.3077 24.3592C13.248 24.3592 14.0387 24.6796 14.6798 25.3204C15.3206 25.9615 15.6411 26.7522 15.6411 27.6925C15.6411 29.0675 15.1515 30.2446 14.1723 31.2238C13.1931 32.2029 12.0161 32.6925 10.6411 32.6925ZM10.6411 31.0258C11.5577 31.0258 12.3424 30.6994 12.9952 30.0467C13.648 29.3939 13.9744 28.6092 13.9744 27.6925C13.9744 27.2203 13.8147 26.8244 13.4952 26.505C13.1758 26.1856 12.7799 26.0258 12.3077 26.0258C11.8355 26.0258 11.4397 26.1856 11.1202 26.505C10.8008 26.8244 10.6411 27.2203 10.6411 27.6925C10.6411 28.3314 10.5647 28.9147 10.4119 29.4425C10.2591 29.9703 10.0577 30.4703 9.80772 30.9425C9.94661 30.9981 10.0855 31.0258 10.2244 31.0258H10.6411ZM18.7502 24.1667L15.8977 21.3142L29.5323 7.67959C29.8379 7.37403 30.2198 7.21431 30.6781 7.20042C31.1365 7.18653 31.5323 7.34625 31.8656 7.67959L32.3848 8.19875C32.7181 8.53209 32.8848 8.92097 32.8848 9.36542C32.8848 9.80986 32.7181 10.1988 32.3848 10.5321L18.7502 24.1667Z" fill="white"/> </g> </svg> }
                title="Design Clarifications"
                description="Got feedback, revisions, or creative questions? We’ll help align everything to your brand goals."
              />
              <SupportCard
                icon={
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_7682" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_7682)"> <path d="M22.5002 20.705C21.5599 20.705 20.7694 20.3846 20.1286 19.7437C19.4874 19.1026 19.1669 18.3119 19.1669 17.3716C19.1669 16.4316 19.4874 15.6411 20.1286 15C20.7694 14.3589 21.5599 14.0383 22.5002 14.0383C23.4405 14.0383 24.2311 14.3589 24.8719 15C25.513 15.6411 25.8336 16.4316 25.8336 17.3716C25.8336 18.3119 25.513 19.1026 24.8719 19.7437C24.2311 20.3846 23.4405 20.705 22.5002 20.705ZM12.1798 26.0258C11.4392 26.0258 10.8054 25.7621 10.2781 25.2346C9.75092 24.7073 9.4873 24.0736 9.4873 23.3333V11.4104C9.4873 10.6698 9.75092 10.036 10.2781 9.50873C10.8054 8.98151 11.4392 8.7179 12.1798 8.7179H32.8206C33.5612 8.7179 34.1951 8.98151 34.7223 9.50873C35.2495 10.036 35.5131 10.6698 35.5131 11.4104V23.3333C35.5131 24.0736 35.2495 24.7073 34.7223 25.2346C34.1951 25.7621 33.5612 26.0258 32.8206 26.0258H12.1798ZM13.8465 24.3591H31.154C31.154 23.6133 31.4176 22.978 31.9448 22.4533C32.472 21.9289 33.1059 21.6666 33.8465 21.6666V13.0771C33.1006 13.0771 32.4655 12.8135 31.9411 12.2862C31.4163 11.7587 31.154 11.1248 31.154 10.3846H13.8465C13.8465 11.1304 13.5829 11.7655 13.0556 12.29C12.5284 12.8147 11.8945 13.0771 11.154 13.0771V21.6666C11.8998 21.6666 12.5349 21.9303 13.0594 22.4575C13.5841 22.9847 13.8465 23.6186 13.8465 24.3591ZM30.5773 31.0258H7.1798C6.43925 31.0258 5.80536 30.7621 5.27814 30.2346C4.75092 29.7073 4.4873 29.0736 4.4873 28.3333V13.6537H6.15397V28.3333C6.15397 28.5897 6.26078 28.8247 6.47439 29.0383C6.68828 29.2522 6.92342 29.3591 7.1798 29.3591H30.5773V31.0258ZM12.1798 24.3591H11.154V10.3846H12.1798C11.902 10.3846 11.6616 10.4861 11.4586 10.6891C11.2555 10.8922 11.154 11.1326 11.154 11.4104V23.3333C11.154 23.6111 11.2555 23.8515 11.4586 24.0546C11.6616 24.2576 11.902 24.3591 12.1798 24.3591Z" fill="white"/> </g> </svg> 
                }
                title="Package & Pricing Queries"
                description="We’ll guide you through the right plan based on your business needs."
              />
              <SupportCard
                icon={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_7686" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_7686)"> <path d="M35.1343 34.8396L26.3714 26.0771C25.1472 27.0727 23.885 27.8365 22.5847 28.3688C21.2844 28.9007 19.8137 29.1667 18.1726 29.1667C15.929 29.1667 13.8804 28.6357 12.0268 27.5738C10.1732 26.5118 8.69513 25.0984 7.59263 23.3334H9.6568C10.6654 24.5961 11.903 25.6063 13.3697 26.3638C14.8367 27.1213 16.4376 27.5 18.1726 27.5C21.1643 27.5 23.7178 26.4424 25.833 24.3271C27.9483 22.2115 29.006 19.6581 29.006 16.6667C29.006 13.6753 27.9483 11.1218 25.833 9.00627C23.7178 6.89099 21.1643 5.83335 18.1726 5.83335C15.3265 5.83335 12.8719 6.80072 10.8089 8.73544C8.74583 10.6704 7.60319 13.0364 7.38096 15.8334H5.7143C5.93652 12.5406 7.23305 9.77294 9.60388 7.53044C11.9747 5.28794 14.831 4.16669 18.1726 4.16669C21.6599 4.16669 24.615 5.37821 27.038 7.80127C29.4611 10.2243 30.6726 13.1795 30.6726 16.6667C30.6726 18.3078 30.4067 19.7838 29.8747 21.0946C29.3428 22.4054 28.5789 23.6731 27.583 24.8975L36.3139 33.6284L35.1343 34.8396ZM16.7339 22.8204L13.788 13.0321L11.2368 20.3204H3.68555V18.8463H10.1922L12.9422 10.9296H14.7047L17.5989 20.6475L19.8393 13.8463H21.6022L24.1022 18.8463H25.4805V20.3204H23.2018L20.8268 15.5704L18.4547 22.8204H16.7339Z" fill="white"/> </g> </svg> }
                title="Technical Difficulties"
                description="Having trouble accessing shared files, presentations, or prototypes? We’ll sort it out immediately."
              />
            </div>
          </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-0" />

          {/* Reach Out Section */}
          <div className="mx-auto lg:w-[1127px] lg:px-0 px-4 rounded-lg py-8 lg:py-2 lg:mt-8 mt-0 mb-0 lg:mb-2">
            <h2 className="text-[14px] lg:text-[20px] robotoText font-medium text-[#1B1B1B] mb-2">
              Reach Out Anytime            </h2>
            <p className="text-[12px] lg:text-[20px] robotoText text-[#615F5F] mb-6 lg:mb-10">
We believe great partnerships are built on communication. Just tell us what you need support with, and we’ll jump in.            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-8 lg:gap-10">
              <ContactCard
                icon={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_7664" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_7664)"> <path d="M7.6925 31.6667C6.92528 31.6667 6.28472 31.4098 5.77083 30.8959C5.25694 30.382 5 29.7414 5 28.9742V11.0259C5 10.2587 5.25694 9.6181 5.77083 9.10421C6.28472 8.59032 6.92528 8.33337 7.6925 8.33337H32.3075C33.0747 8.33337 33.7153 8.59032 34.2292 9.10421C34.7431 9.6181 35 10.2587 35 11.0259V28.9742C35 29.7414 34.7431 30.382 34.2292 30.8959C33.7153 31.4098 33.0747 31.6667 32.3075 31.6667H7.6925ZM20 20.1925L6.66667 11.4742V28.9742C6.66667 29.2734 6.76278 29.5192 6.955 29.7117C7.1475 29.9039 7.39333 30 7.6925 30H32.3075C32.6067 30 32.8525 29.9039 33.045 29.7117C33.2372 29.5192 33.3333 29.2734 33.3333 28.9742V11.4742L20 20.1925ZM20 18.3334L32.8204 10H7.17958L20 18.3334ZM6.66667 11.4742V10V28.9742C6.66667 29.2734 6.76278 29.5192 6.955 29.7117C7.1475 29.9039 7.39333 30 7.6925 30H6.66667V11.4742Z" fill="white"/> </g> </svg> }
                title="Support Email"
                description="support@navawork.com"
              />
              <ContactCard
                icon={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_7691" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_7691)"> <path d="M5 33.4617V7.6925C5 6.92528 5.25694 6.28472 5.77083 5.77083C6.28472 5.25694 6.92528 5 7.6925 5H32.3075C33.0747 5 33.7153 5.25694 34.2292 5.77083C34.7431 6.28472 35 6.92528 35 7.6925V25.6408C35 26.4081 34.7431 27.0486 34.2292 27.5625C33.7153 28.0764 33.0747 28.3333 32.3075 28.3333H10.1283L5 33.4617ZM9.41667 26.6667H32.3075C32.5642 26.6667 32.7993 26.5599 33.0129 26.3463C33.2265 26.1326 33.3333 25.8975 33.3333 25.6408V7.6925C33.3333 7.43583 33.2265 7.20069 33.0129 6.98708C32.7993 6.77347 32.5642 6.66667 32.3075 6.66667H7.6925C7.43583 6.66667 7.20069 6.77347 6.98708 6.98708C6.77347 7.20069 6.66667 7.43583 6.66667 7.6925V29.4071L9.41667 26.6667Z" fill="white"/> </g> </svg> }
                title="Response Time"
                description="Within 24 Hrs"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
