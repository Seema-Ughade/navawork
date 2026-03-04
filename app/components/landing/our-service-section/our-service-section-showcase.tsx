"use client";

import Image from "next/image";
import { brandingCards } from "./our-service-section-card";

export default function ServicesShowcase() {
  return (
    <section className="py-2 pb-15 w-full sm:w-[412px] lg:w-[1440px] mx-auto px-4 bg-[#F8F8F8]">
      <div className="max-w-[1124px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-16">
          <div className="inline-flex items-center mb-4 lg:mb-6">
            <div className=" lg:w-[152px] w-[107px] lg:h-[50px] h-[35px]  rounded-full flex items-center justify-center border-[0.6px] border-[#A23BEA] bg-[#F5EAFD]">
              <span className="lg:text-[15px] text-[12px]  robotoText text-[#9F1FFA]">
                Our Services
              </span>
            </div>
          </div>

          <h2 className="text-[#1B1B1B] w-full sm:w-[412px] lg:w-[757px] mx-auto font-semibold robotoText lg:text-[48px] text-[32px] mb-1 tracking-tight">
            What we bring <br className="block lg:hidden" />
            to your table <br className="block lg:hidden" />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="min-h-screen bg-[#F8F8F8] p-0 lg:p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            {brandingCards.map((card) => (
              <div
                key={card.id}
                className="relative bg-[#F8F8F8] w-[321px] h-[404px] overflow-hidden"
              >
                {/* Images Section */}
                <div className="relative h-[260px] w-full">
                  {/* right Back Image */}
                  <div
                    className="absolute bg-white border-2 border-white rounded-2xl overflow-hidden"
                    style={
                      card.id === 2
                        ? {
                            width: "122.375px",
                            height: "260px",
                            top: "0px",
                            left: "190px",
                            zIndex: 10,
                          }
                        : card.id === 4
                          ? {
                              width: "200px",
                              height: "180px",
                              top: "10px",
                              left: "125px",
                              borderRadius: "8px",
                              zIndex: 10,
                            }
                          : {
                              width: "164px",
                              height: "164px",
                              top: "17px",
                              left: "160px",
                              zIndex: 0,
                            }
                    }
                  >
                    <Image
                      src={card.backImage}
                      alt="mockup back"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* left Front Image */}
                  <div
                    className="absolute bg-white p-2 rounded-lg overflow-hidden"
                    style={
                      card.id === 2
                        ? {
                            width: "307.55px",
                            height: "218.7px",
                            top: "0px",
                            left: "0px",
                            transform: "rotate(-4.75deg)",
                            zIndex: 0,
                          }
                        : card.id === 4
                          ? {
                              width: "320px",
                              height: "180px",
                              top: "10px",
                              left: "0px",
                              borderRadius: "8px",
                              zIndex: 0,
                            }
                          : {
                              width: "180px",
                              height: "180px",
                              top: "50px",
                              left: "40px",
                              transform: "rotate(31.41deg)",
                              zIndex: 0,
                            }
                    }
                  >
                    <Image
                      src={card.frontImage}
                      alt="mockup front"
                      fill
                      className="object-cover p-2 rounded-lg"
                    />
                  </div>
                  {/* white box */}
                  <div
                    className="absolute bg-white rounded-[22px] overflow-hidden"
                    style={{
                      width: "164px",
                      height: "164px",
                      top: "125px",
                      left: "0px",
                      zIndex: 20,
                    }}
                  >
                    <div className="object-cover bg-white" /> <div />
                  </div>
                </div>

                {/* Content Section */}
                <div className="absolute h-[240px] rounded-b-[24px] bottom-0 left-0 right-0 p-6 bg-white z-20">
                  {/* Icons */}
                  <div className="flex gap-6 mb-4">
                    {card.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="w-[56px] h-[56px] flex items-center justify-center border border-[#D3D3D3] rounded-lg bg-white"
                      >
                        <Image
                          src={icon}
                          alt={`icon-${index}`}
                          className="px-1.5 rounded"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1B1B1B] font-medium lg:text-[20px] text-[24px] leading-[150%] mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#615F5F] text-[20px] leading-[150%]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
