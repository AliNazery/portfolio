import React from 'react'

export default function Services() {
  return (
    <section
      className="services section section--light bg-[#f8f9fa] pt-[100px] px-[30px] pb-[76px]"
      id="services"
    >
      <div className="container w-full px-3 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div
          className="row flex flex-wrap -mx-3 transform-none opacity-100 translate-y-[80px] translate-z-0"
          //   style="transform:translateX(0px) translateY(80px) translateZ(0)"
        >
          <div className="col-12 flex-none w-full max-w-full px-3">
            <div className="heading relative z-10 flex gap-[5px] mb-[50px] ">
              <div className="heading__shape w-[22px] h-[22px] rounded-full border-2 border-[#152035] block relative mt-3 after:content-[''] after:absolute after:left-[-6px] after:top-[2px] after:w-[22px] after:h-[22px] after:rounded-full after:bg-[#ffb400] -z-10 after:box-border"></div>
              <div className="heading__content flex-1">
                <h2 className="capitalize mb-0 font-extrabold text-[32px]">
                  My Services
                </h2>
                <p className="text-[#6c757d]">
                  I have Worked with a number of clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap -mx-3">
          <div
            className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0">
              <img
                alt=""
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                // style="color:transparent"
                src="/images/services/1.png"
              />
              <div className="service__content">
                <h5 className="service__content__title mb-[15px] text-[20px]">
                  App Design &amp;Develop
                </h5>
                <p className="service__content__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  praesentium aut repellendus rem non repudiandae sint dolor
                  illo officia dignissimos
                </p>
              </div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0">
              <img
                alt=""
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                // style="color:transparent"
                src="/images/services/2.png"
              />
              <div className="service__content">
                <h5 className="service__content__title mb-[15px] text-[20px]">
                  Bussinenss Analyist
                </h5>
                <p className="service__content__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  praesentium aut repellendus rem non repudiandae sint dolor
                  illo officia dignissimos
                </p>
              </div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0">
              <img
                alt=""
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                // style="color:transparent"
                src="/images/services/3.png"
              />
              <div className="service__content">
                <h5 className="service__content__title mb-[15px] text-[20px]">
                  SEO Marketing
                </h5>
                <p className="service__content__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  praesentium aut repellendus rem non repudiandae sint dolor
                  illo officia dignissimos
                </p>
              </div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0">
              <img
                alt=""
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                // style="color:transparent"
                src="/images/services/4.png"
              />
              <div className="service__content">
                <h5 className="service__content__title mb-[15px] text-[20px]">
                  Graphic Design
                </h5>
                <p className="service__content__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  praesentium aut repellendus rem non repudiandae sint dolor
                  illo officia dignissimos
                </p>
              </div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0">
              <img
                alt=""
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                // style="color:transparent"
                src="/images/services/5.png"
              />
              <div className="service__content">
                <h5 className="service__content__title mb-[15px] text-[20px]">
                  Web Development
                </h5>
                <p className="service__content__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  praesentium aut repellendus rem non repudiandae sint dolor
                  illo officia dignissimos
                </p>
              </div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] mb-6 p-[30px] rounded-[20px] border-0">
              <img
                alt=""
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                // style="color:transparent"
                src="/images/services/6.png"
              />
              <div className="service__content">
                <h5 className="service__content__title mb-[15px] text-[20px]">
                  Branding
                </h5>
                <p className="service__content__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  praesentium aut repellendus rem non repudiandae sint dolor
                  illo officia dignissimos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
