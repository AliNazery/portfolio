"use client";

// components/Testimonial.js

import { useState } from "react";
import { testimonials } from "../Data/data";
import Image from "next/image";
import { TestimQuote } from "../Common/Icon/svg";
import SectionTitle from "../Common/Title/SectionTitle";

export default function Testimonial() {
  const [selectedId, setSelectedId] = useState(testimonials[0].id);

  const selectedTestimonial =
    testimonials.find((testimonial) => testimonial.id === selectedId) ||
    testimonials[0];

  return (
    <section className="pt-10 bg-[#f8f9fa]">
      <div className="container w-full px-3 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <SectionTitle
          title="My Testimonials"
          subtitle="What My Clients Say About Me."
        />
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 space-y-4">
              {testimonials.map((person) => (
                <div
                  key={person.id}
                  onClick={() => setSelectedId(person.id)}
                  className={`p-6 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer bg-[#fff] ${
                    selectedId === person.id ? "border-2 border-[#ffb400]" : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      src={person.imageUrl}
                      alt={person.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 flex items-center">
              <blockquote
                className="p-6 bg-white rounded-lg shadow-md"
                style={{ height: "100%" }}
              >
                <TestimQuote />
                <p className="font-black  capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out">
                  {selectedTestimonial.title}
                </p>
                <p className="mt-4 text-gray-700">
                  {selectedTestimonial.testimonial}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// export default function Testimonial() {
//   return (
//     <section
//       className="testimonials section section--light bg-[#f8f9fa] pt-[100px] px-[30px] pb-[76px]"
//       id="clients"
//     >
//       <div className="container w-full mx-auto px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
//         <div
//           className="row flex flex-wrap -mx-3 transform-none opacity-100 translate-y-[80px] translate-z-0"
//           //   style="transform:translateX(0px) translateY(80px) translateZ(0)"
//         >
//           <div className="col-12 flex-none w-full max-w-full px-3">
//             <div className="heading relative z-10 flex gap-[5px] mb-[50px] ">
//               <div className="heading__shape w-[22px] h-[22px] rounded-full border-2 border-[#152035] block relative mt-3 after:content-[''] after:absolute after:left-[-6px] after:top-[2px] after:w-[22px] after:h-[22px] after:rounded-full after:bg-[#ffb400] -z-10 after:box-border"></div>
//               <div className="heading__content flex-1">
//                 <h2 className="capitalize mb-0 font-extrabold text-[32px]">
//                   My Testimonials
//                 </h2>
//                 <p className="text-[#6c757d]">What My Clients Say About Me.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="row opacity-100 transform-none flex flex-wrap -mx-3"
//           //   style="opacity:0;transform:translateY(80px) translateZ(0)"
//         >
//           <div className="shrink-0 w-full max-w-full px-3 lg:w-full lg:flex-[0_0_auto]">
//             <div className="swiper custom-touch-action ml-auto mr-auto relative overflow-hidden list-none p-0 z-10 block w-full h-full">
//               <div className="transform-z-0 mb-[30px] swiper-wrapper relative w-full h-full z-10 flex transition-transform box-content">
//                 <div className="swiper-slide w-[318.667px] mr-[30px] flex flex-col transform-z-0 backface-hidden shrink-0 h-full relative transition-transform text-center text-[18px]">
//                   <div className="testimonial card card--white flex items-center gap-[24px] bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease">
//                     <div className="testimonial__image text-center w-[100px] h-[100px] rounded-[50%] border-2 border-solid border-[#d9d9d9] relative shadow-custom">
//                       <img
//                         alt=""
//                         className="block w-full h-full object-cover max-w-full rounded-[50%] border-4 border-solid border-[#fff]"
//                         loading="lazy"
//                         width="100"
//                         height="100"
//                         decoding="async"
//                         data-nimg="1"
//                         src="/images/Testimonial/1.jpg"
//                       />
//                     </div>
//                     <p className="testimonial__text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Velit praesentium aut repellendus rem non repudiandae sint
//                       dolor illo officia dignissimos
//                     </p>
//                     <div className="testimonial__info">
//                       <p className="testimonial__info__name">amar smith</p>
//                       <span className="dot"></span>
//                       <p className="testimonial__info__role">product manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="testimonial card card--white">
//                     <div className="testimonial__image">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         width="100"
//                         height="100"
//                         decoding="async"
//                         data-nimg="1"
//                         // style="color:transparent"
//                         src="/images/Testimonial/2.jpg"
//                       />
//                     </div>
//                     <p className="testimonial__text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Velit praesentium aut repellendus rem non repudiandae sint
//                       dolor illo officia dignissimos
//                     </p>
//                     <div className="testimonial__info">
//                       <p className="testimonial__info__name">Sara joe</p>
//                       <span className="dot"></span>
//                       <p className="testimonial__info__role">product manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="testimonial card card--white">
//                     <div className="testimonial__image">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         width="100"
//                         height="100"
//                         decoding="async"
//                         data-nimg="1"
//                         // style="color:transparent"
//                         src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F3.jpg&amp;w=256&amp;q=75"
//                       />
//                     </div>
//                     <p className="testimonial__text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Velit praesentium aut repellendus rem non repudiandae sint
//                       dolor illo officia dignissimos
//                     </p>
//                     <div className="testimonial__info">
//                       <p className="testimonial__info__name">Mariam saba</p>
//                       <span className="dot"></span>
//                       <p className="testimonial__info__role">product manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="testimonial card card--white">
//                     <div className="testimonial__image">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         width="100"
//                         height="100"
//                         decoding="async"
//                         data-nimg="1"
//                         // style="color:transparent"
//                         src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=256&amp;q=75"
//                       />
//                     </div>
//                     <p className="testimonial__text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Velit praesentium aut repellendus rem non repudiandae sint
//                       dolor illo officia dignissimos
//                     </p>
//                     <div className="testimonial__info">
//                       <p className="testimonial__info__name">amar smith</p>
//                       <span className="dot"></span>
//                       <p className="testimonial__info__role">product manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="testimonial card card--white">
//                     <div className="testimonial__image">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         width="100"
//                         height="100"
//                         decoding="async"
//                         data-nimg="1"
//                         // style="color:transparent"
//                         src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=256&amp;q=75"
//                       />
//                     </div>
//                     <p className="testimonial__text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Velit praesentium aut repellendus rem non repudiandae sint
//                       dolor illo officia dignissimos
//                     </p>
//                     <div className="testimonial__info">
//                       <p className="testimonial__info__name">amar smith</p>
//                       <span className="dot"></span>
//                       <p className="testimonial__info__role">product manager</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="swiper-pagination"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
