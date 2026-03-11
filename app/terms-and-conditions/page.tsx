'use client';

import HeroBackground from '../components/landing/hero-section/HeroBackground';

export default function TermsAndConditions() {
  return (
    <div className="lg:w-[1440px] md:w-full sm:w-[412px] mx-auto ">

      {/* Hero Section with Gradients */}
      <div className="relative overflow-hidden">
        {/* Background Gradient Blobs */}
        <HeroBackground />
        {/* Hero Content */}
        <div className="relative max-w-[1127px] px-4 sm:px-4 lg:px-6 mx-auto mb-12 mt-2 lg:mt-24 text-center">
            {/*  Badge */}
            <div className="flex justify-center">
            <div className="inline-flex mt-4 lg:mt-0 lg:w-[233px] lg:h-[50px] sm:h-[28px] h-[28px] items-center justify-center mb-4 px-[20px] lg:py-[12px] py-[5px] rounded-[32px] bg-[#F5EAFD] border-[0.6px] border-[#A23BEA]">
                <div className="w-2 h-2 bg-[#FFD700] rotate-45 mr-2 flex-shrink-0" />
                <span className="lg:text-[15px] text-[12px] robotoText text-[#9F1FFA]">
                Terms and Conditions
                </span>
            </div>
            </div>

          {/* Main Title */}
          <h1 className="text-[32px] md:text-[64px] leading-tight robotoText font-bold text-[#1B1B1B] mb-6">
              Guidelines for  <br className="md:hidden" />
 Working With <br className="hidden md:block" />
  us
          </h1>

          {/* Subtitle */}
          <p className="text-[#615F5F] lg:px-0 px-6 robotoText text-[12px] lg:text-[20px] max-w-[1113px] mx-auto mb-6">
We believe great work starts with clarity. These guidelines outline how we collaborate, communicate, and move projects forward—ensuring every step is smooth, transparent, and focused on delivering our best outcomes for you.          </p>
        {/* Scope of Services */}
        <div className='max-w-[1127px] text-left pb-8 mx-auto'>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] lg:mt-[7px]6 mt-8  mb-6">Scope of Services</h2>
          <div className="space-y-0 text-[12px] lg:text-[20px] text-[#615F5F]">
            <p>We provide design, branding, digital strategy, and creative solutions as agreed upon in project proposals, quotations, or statements of work.</p>
            <p className='mt-[7px]'>Service timelines, deliverables, and pricing are defined before the project begins.</p>
          </div>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1127px] mx-auto px-4 sm:px-4 lg:px-6 pb-16 space-y-10 lg:space-y-12">

        {/* Payments & Billing */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Payments & Billing</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Payments must be made according to the agreed milestones or schedule.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Projects typically begin after an initial advance payment.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Delayed payments may result in paused work or delayed delivery.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Any third-party costs (fonts, plugins, stock assets, printing, etc.) will be billed separately if required.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Revisions & Feedback */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Revisions & Feedback</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Each project includes a reasonable number of revision cycles as mentioned in the proposal.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Additional changes beyond agreed scope may incur extra charges.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Feedback should be shared within the mutually agreed timeline to avoid delays.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Timeline & Delivery */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Timeline & Delivery</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Project timelines depend on client responsiveness, revisions, and approvals.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We do our best to deliver on time, but delays due to dependencies are mutually understood.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Urgent requests may require additional fees.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Content & Materials Provided by Client */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Content & Materials Provided by Client</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">You are responsible for supplying accurate text, images, logos, or brand assets.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">You confirm that you have rights to use any content you provide us.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We are not liable for copyright issues arising from client-supplied materials.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Ownership & Intellectual Property */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Ownership & Intellectual Property</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Final approved designs become the client’s property after full payment.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Drafts, unused concepts, and working files not selected remain the property of NavaWork.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Developers and design source files (e.g., raw Figma files) may be shared on request at an additional cost.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Portfolio Usage */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Portfolio Usage</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We may showcase the completed work in our portfolio, social media, or case studies unless otherwise agreed in writing.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Confidentiality */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Confidentiality</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We respect your privacy and confidentiality.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Any sensitive business, strategic, or project information shared with us will remain strictly confidential.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Website Use */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Website Use</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">You agree not to misuse our website, data, or content.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Any unauthorized reproduction of our work is prohibited.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Cancellation Policy */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Cancelation Policy</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">If a project is canceled mid-way, the amount corresponding to completed work will be billed.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Advance payments are non-refundable once work has begun.</span>
            </li>
          </ul>
        </div>
                      <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />


        {/* Liability */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Liability</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We are not liable for indirect losses such as loss of revenue, reputation, or third-party issues.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Once work has started, advance payments cannot be refunded.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Third-Party Dependencies */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Third-Party Dependencies</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We may rely on third-party platforms, printers, developers, hosting providers, or assets.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Delays or issues from third parties are beyond our control.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Dispute Resolution */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Dispute Resolution</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">In the event of a disagreement, both parties agree to attempt resolution through discussion before any legal action.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Changes to These Terms */}
        <div>
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-6">Changes to These Terms</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">We may update or modify these terms periodically.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-[16px] h-[16px] bg-gradient-to-b from-[#D297FB] to-[#7415B7] rounded-full mt-[7px] flex-shrink-0"></div>
              <span className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText">Any changes will be posted on our website and will take effect immediately.</span>
            </li>
          </ul>
        </div>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-12" />

        {/* Contact Us */}
        <div className="">
          <h2 className="text-[#1B1B1B] robotoText font-medium text-[14px] lg:text-[20px] mb-4">Contact Us</h2>
          <p className="lg:text-[20px] text-[12px] text-[#615F5F] robotoText mb-3">If you have any questions about this Privacy Policy or how your data is handled, contact us at :</p>
              <hr className="border-t-[0.6px] max-w-[1127px] mx-auto border-[#D3D3D3] mb-8" />

          <div className="space-y-8">
            {/* Email Card */}
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-b from-[#D297FB] to-[#7415B7] p-3 rounded-lg text-white flex-shrink-0 flex items-center justify-center  w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_8006" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_8006)"> <path d="M7.6925 31.6668C6.92528 31.6668 6.28472 31.4099 5.77083 30.896C5.25694 30.3821 5 29.7416 5 28.9743V11.026C5 10.2588 5.25694 9.61822 5.77083 9.10433C6.28472 8.59044 6.92528 8.3335 7.6925 8.3335H32.3075C33.0747 8.3335 33.7153 8.59044 34.2292 9.10433C34.7431 9.61822 35 10.2588 35 11.026V28.9743C35 29.7416 34.7431 30.3821 34.2292 30.896C33.7153 31.4099 33.0747 31.6668 32.3075 31.6668H7.6925ZM20 20.1927L6.66667 11.4743V28.9743C6.66667 29.2735 6.76278 29.5193 6.955 29.7118C7.1475 29.9041 7.39333 30.0002 7.6925 30.0002H32.3075C32.6067 30.0002 32.8525 29.9041 33.045 29.7118C33.2372 29.5193 33.3333 29.2735 33.3333 28.9743V11.4743L20 20.1927ZM20 18.3335L32.8204 10.0002H7.17958L20 18.3335ZM6.66667 11.4743V10.0002V28.9743C6.66667 29.2735 6.76278 29.5193 6.955 29.7118C7.1475 29.9041 7.39333 30.0002 7.6925 30.0002H6.66667V11.4743Z" fill="white"/> </g> </svg>
              </div>
              <div>
                <p className="font-medium robotoText text-[14px] lg:text-[20px] text-[#1B1B1B] text-sm lg:text-[20px] mb-3">Email</p>
                <p className="text-[#615F5F] robotoText text-[12px] lg:text-[20px]">support@navawork.com</p>
              </div>
            </div>
            {/* Phone Card */}
            <div className="flex gap-4">
              <div className="bg-gradient-to-b from-[#D297FB] to-[#7415B7] p-3 rounded-lg text-white flex-shrink-0 flex items-center justify-center  w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1_8012" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"> <rect width="40" height="40" fill="#D9D9D9"/> </mask> <g mask="url(#mask0_1_8012)"> <path d="M31.5107 33.3332C28.7821 33.3332 25.949 32.6229 23.0115 31.2023C20.0743 29.7818 17.3261 27.7866 14.7669 25.2169C12.2078 22.6469 10.2179 19.8986 8.79734 16.9719C7.37678 14.0453 6.6665 11.2176 6.6665 8.489C6.6665 7.96845 6.83706 7.53456 7.17817 7.18734C7.51928 6.84012 7.94553 6.6665 8.45692 6.6665H12.2823C12.7534 6.6665 13.1522 6.81025 13.4786 7.09775C13.8047 7.38498 14.0319 7.76331 14.1603 8.23276L15.0128 12.0219C15.0769 12.4716 15.0576 12.8716 14.9548 13.2219C14.8523 13.5725 14.6736 13.8609 14.4186 14.0873L10.7273 17.5319C11.4654 18.8316 12.2551 20.0323 13.0965 21.134C13.9382 22.2354 14.8322 23.2669 15.7786 24.2286C16.8008 25.2691 17.8987 26.2233 19.0723 27.0911C20.2462 27.9591 21.529 28.7741 22.9207 29.5361L26.5128 25.8611C26.7883 25.5597 27.0901 25.36 27.4182 25.2619C27.7462 25.1641 28.1104 25.143 28.5107 25.1986L31.7669 25.9036C32.2383 26.0005 32.6172 26.2293 32.9036 26.5898C33.19 26.9501 33.3332 27.3632 33.3332 27.829V31.5428C33.3332 32.0541 33.1596 32.4804 32.8123 32.8215C32.4651 33.1626 32.0312 33.3332 31.5107 33.3332ZM10.0394 16.2519L13.4411 13.1003C13.5336 13.0147 13.5959 12.8972 13.6282 12.7478C13.6601 12.598 13.6619 12.4591 13.6336 12.3311L12.8119 8.58942C12.7833 8.41859 12.7121 8.29039 12.5982 8.20484C12.4843 8.11956 12.3418 8.07692 12.1707 8.07692H8.52859C8.40053 8.07692 8.29373 8.11956 8.20817 8.20484C8.12262 8.29039 8.07984 8.39734 8.07984 8.52567C8.08484 9.66873 8.25873 10.888 8.6015 12.1836C8.944 13.4791 9.42331 14.8353 10.0394 16.2519ZM24.2786 30.1965C25.4133 30.7771 26.6518 31.2087 27.994 31.4915C29.3362 31.774 30.4962 31.9228 31.474 31.9378C31.6023 31.9378 31.7093 31.8951 31.7948 31.8098C31.8801 31.7243 31.9228 31.6173 31.9228 31.489V27.8932C31.9228 27.7221 31.8801 27.5796 31.7948 27.4657C31.7093 27.3518 31.5811 27.2805 31.4103 27.2519L28.2048 26.5865C28.0768 26.5579 27.9647 26.5597 27.8686 26.5919C27.7722 26.6239 27.6707 26.6861 27.564 26.7786L24.2786 30.1965Z" fill="white"/> </g> </svg>
              </div>
              <div>
                <h3 className="font-medium robotoText text-[14px] lg:text-[20px] text-[#1B1B1B] text-sm lg:text-[20px] mb-1">Call or WhatsApp Us</h3>
                <p className="text-[#615F5F] robotoText text-[12px] lg:text-[20px]">+91 76769 30155</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
