import React from 'react'
const features = [
  { number: "+70", text: "Completed Projects" },
  { number: "+50", text: "Happy Customers" },
  { number: "+07", text: "Years of experience" },
  { number: "+15", text: "Awards won" },
];


export default function Features() {
  return (
    <div className="row transform-none opacity-100 flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full max-w-full px-3 xl:w-3/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
        >
          <div className="feature card card--light flex flex-row items-center gap-[6px] bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-none transition-all duration-500 ease-in">
            <h1 className="feature__number text-2xl my-3 leading-tight text-[#ffb400] font-black font-sans">
              {feature.number}
            </h1>
            <p className="feature__text text-[#152035] mb-1 capitalize font-bold text-base font-sans">
              {feature.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
