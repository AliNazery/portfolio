import React from "react";
import SectionTitle from "../Common/Title/SectionTitle";
import { DownloadSvg } from "../Common/Icon/svg";
import Features from "./features";
import { addressData, educationData, experienceData } from "./Data";

import TimelineItem from "./TimelineItem";
import DetailsListItem from "./DetailsListItem";


export default function About() {
  return (
    <section
      className="about section bg-white pt-[100px] pb-[76px] lg:px-[30px]"
      id="about"
    >
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] px-3 mx-auto  w-full xl:max-w-[1170px]">
        <SectionTitle
          title="About Me"
          subtitle="Main Informations About Me And What I Love To Do."
        />
        <div
          className="row transform-none opacity-100 flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className=" mb-6 flex-none shrink-0 w-full max-w-full px-3 xl:flex-[0_0_auto] xl:w-[41.66666667%]">
            <div className="profile card card--img relative h-full p-0 mb-6">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                className="profile__img rounded-[20px] h-full object-cover border-none max-w-full align-middle"
                // style="color:transparent"
                src="/images/me.jpg"
              />
            </div>
          </div>
          <div className="col-xl-7 flex-none w-full max-w-full px-3 xl:flex-[0_0_auto] xl:w-[58.3333%]">
            <div className="bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] transition-all border-0">
              <h3 className="text-[28px] text-[#152035] font-black mb-[8px]">
                Hello, I &#x27;m Mariam Wallas, Based in Canada
              </h3>
              <p className="mb-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                fringilla pretium lacus, eu luctus neque ultricies a. Phasellus
                faucibus orci a purus mattis tincidunt ut non nulla. Donec
                ullamcorper sapien eget neque facilisis euismod.
              </p>
              <ul className="inline-block w-full mb-[20px] pl-0">
                {addressData.map((item, index) => (
                  <DetailsListItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </ul>
              <div className="details__btn">
                <a
                  href="/assets/images/cv.pdf"
                  className="btn-default hover:bg-[#343a40] outline-none inline-flex items-center justify-center cursor-pointer text-center whitespace-nowrap align-middle relative bg-[#ffb400] leading-[24px] border-0 text-white text-[16px] font-bold p-[10px] px-[24px] capitalize rounded-[20px] z-[1] gap-[4px] transition-all duration-300 ease-in-out
"
                  download=""
                >
                  <DownloadSvg />
                  <span>Download My CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <div
          className="row opacity-100 transform-none flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)translate-y-[80px] translate-z-0"
        >
          <div className="col-lg-6 shrink-0 w-full max-w-full px-3 lg:w-1/2 lg:flex-[0_0_auto]">
            <div className="timeline card card--light flex flex-row bg-[#f8f9fa] gap-[24px] bg-[f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-out">
              <div className="timeline__single flex-[1_1]">
                <h4 className="timeline__single__title mb-0 text-[24px] leading-[1.4] font-black text-[#152035]">
                  My Experience
                </h4>
                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    place={item.place}
                    year={item.year}
                    description={item.description}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 shrink-0 w-full max-w-full px-3 lg:w-1/2 lg:flex-[0_0_auto]">
            <div className="timeline card card--light flex flex-row bg-[#f8f9fa] gap-[24px] bg-[f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-out">
              <div className="timeline__single flex-[1_1]">
                <h4 className="timeline__single__title mb-0 text-[24px] leading-[1.4] font-black text-[#152035]">
                  My Education
                </h4>
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    place={item.place}
                    year={item.year}
                    description={item.description}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
