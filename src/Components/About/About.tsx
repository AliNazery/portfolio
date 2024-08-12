import React from "react";

export default function About() {
  return (
    <section
      className="about section bg-white pt-[100px] pb-[76px] lg:px-[30px]"
      id="about"
    >
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] px-3 mx-auto  w-full xl:max-w-[1170px]">
        <div
          className="row flex flex-wrap -mx-3 transform-none opacity-100 translateZ(0)translate-y-[80px] translate-z-0"
          //   style="transform:translateX(0px) translateY(80px) translateZ(0)"
        >
          <div className="col-12 flex-none w-full max-w-full px-3">
            <div className="heading relative z-10 flex gap-[5px] mb-[50px] ">
              <div className="heading__shape w-[22px] h-[22px] rounded-full border-2 border-[#152035] block relative mt-3 after:content-[''] after:absolute after:left-[-6px] after:top-[2px] after:w-[22px] after:h-[22px] after:rounded-full after:bg-[#ffb400] -z-10 after:box-border"></div>
              <div className="heading__content flex-1">
                <h2 className="capitalize mb-0 font-extrabold text-[32px]">
                  About Me
                </h2>
                <p className="text-[#6c757d]">
                  Main Informations About Me And What I Love To Do.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                <li className="details__list-item mb-[10px] w-[50%] float-left">
                  <span className="details__list-label capitalize text-[#152035] font-black mr-[5px]">
                    Phone :
                  </span>
                  + 113-804-9098
                </li>
                <li className="details__list-item details__list-item mb-[10px] w-[50%] float-left">
                  <span className="details__list-label capitalize text-[#152035] font-black mr-[5px]">
                    Nationality :
                  </span>
                  British
                </li>
                <li className="details__list-item  mb-[10px] w-[50%] float-left">
                  <span className="details__list-label capitalize text-[#152035] font-black mr-[5px]">
                    skype :
                  </span>
                  mariam.wallas
                </li>
                <li className="details__list-item  mb-[10px] w-[50%] float-left">
                  <span className="details__list-label capitalize text-[#152035] font-black mr-[5px]">
                    Email :
                  </span>
                  contact@mariam.com
                </li>
                <li className="details__list-item  mb-[10px] w-[50%] float-left">
                  <span className="details__list- capitalize text-[#152035] font-black mr-[5px]">
                    Address :
                  </span>
                  1000 Proctor St USA
                </li>
                <li className="details__list-item  mb-[10px] w-[50%] float-left">
                  <span className="details__list-label capitalize text-[#152035] font-black mr-[5px]">
                    Freelancer :
                  </span>
                  Available
                </li>
              </ul>
              <div className="details__btn">
                <a
                  href="/assets/images/cv.pdf"
                  className="btn-default hover:bg-[#343a40] outline-none inline-flex items-center justify-center cursor-pointer text-center whitespace-nowrap align-middle relative bg-[#ffb400] leading-[24px] border-0 text-white text-[16px] font-bold p-[10px] px-[24px] capitalize rounded-[20px] z-[1] gap-[4px] transition-all duration-300 ease-in-out
"
                  download=""
                >
                  <svg
                    className="align-middle"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                  </svg>
                  <span>Download My CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row transform-none opacity-100 flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0 "
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className="w-full max-w-full px-3 xl:w-3/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]">
            <div className="feature card card--light flex flex-row items-center gap-[6px] bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-none transition-all duration-500 ease-in">
              <h1 className="feature__number text-2xl my-3 leading-tight text-[#ffb400] font-black font-sans">
                +70
              </h1>
              <p className="feature__text text-[#152035] mb-1 capitalize font-bold text-base font-sans">
                Completed Projects
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-3 xl:w-3/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]">
            <div className="feature card card--light flex flex-row items-center gap-[6px] bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-none transition-all duration-500 ease-in">
              <h1 className="feature__number text-2xl my-3 leading-tight text-[#ffb400] font-black font-sans">
                +50
              </h1>
              <p className="feature__text text-[#152035] mb-1 capitalize font-bold text-base font-sans">
                Happy Customers
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-3 xl:w-3/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]">
            <div className="feature card card--light flex flex-row items-center gap-[6px] bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-none transition-all duration-500 ease-in">
              <h1 className="feature__number text-2xl my-3 leading-tight text-[#ffb400] font-black font-sans">
                +07
              </h1>
              <p className="feature__text text-[#152035] mb-1 capitalize font-bold text-base font-sans">
                Years of experience
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-3 xl:w-3/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]">
            <div className="feature card card--light flex flex-row items-center gap-[6px] bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-none transition-all duration-500 ease-in">
              <h1 className="feature__number text-2xl my-3 leading-tight text-[#ffb400] font-black font-sans">
                +15
              </h1>
              <p className="feature__text text-[#152035] mb-1 capitalize font-bold text-base font-sans">
                Awards won
              </p>
            </div>
          </div>
        </div>
        <div
          className="row opacity-100 transform-none flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)translate-y-[80px] translate-z-0"
        >
          <div className="col-lg-6 shrink-0 w-full max-w-full px-3 lg:w-1/2 lg:flex-[0_0_auto] ">
            <div className="timeline card card--light flex flex-row bg-[#f8f9fa] gap-[24px] bg-[f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-out">
              <div className="timeline__single flex-[1_1]">
                <h4 className="timeline__single__title mb-0 text-[24px] leading-[1.4] font-black text-[#152035]">
                  My Experience
                </h4>
                <div className="timeline__item flex py-6 border-b border-[#eee] ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img rounded-[50%] bg-[#ffb400] max-w-full align-middle border-none w-[40px] h-[40px] "
                    // style="color:transparent"

                    src="/images/experience/exp.png"
                  />
                  <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
                    <h6 className="timeline__item__title mb-0  text-[18px] capitalize">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] py-[1px] px-[10px] rounded-[20px]">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot mt-0 bg-[#ffb400!important] w-1 h-1 border block rounded-full"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc mb-0 text-[15px]">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item flex py-6 border-b border-[#eee] ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img rounded-[50%] bg-[#ffb400] max-w-full align-middle border-none w-[40px] h-[40px] "
                    // style="color:transparent"

                    src="/images/experience/exp.png"
                  />
                  <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
                    <h6 className="timeline__item__title mb-0  text-[18px] capitalize">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] py-[1px] px-[10px] rounded-[20px]">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot mt-0 bg-[#ffb400!important] w-1 h-1 border block rounded-full"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc mb-0 text-[15px]">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item flex py-6 border-b border-[#eee] ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img rounded-[50%] bg-[#ffb400] max-w-full align-middle border-none w-[40px] h-[40px] "
                    // style="color:transparent"

                    src="/images/experience/exp.png"
                  />
                  <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
                    <h6 className="timeline__item__title mb-0  text-[18px] capitalize">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] py-[1px] px-[10px] rounded-[20px]">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot mt-0 bg-[#ffb400!important] w-1 h-1 border block rounded-full"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc mb-0 text-[15px]">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 shrink-0 w-full max-w-full px-3 lg:w-1/2 lg:flex-[0_0_auto] ">
            <div className="timeline card card--light flex flex-row bg-[#f8f9fa] gap-[24px] bg-[f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-out">
              <div className="timeline__single flex-[1_1]">
                <h4 className="timeline__single__title mb-0 text-[24px] leading-[1.4] font-black text-[#152035]">
                  My Education
                </h4>
                <div className="timeline__item flex py-6 border-b border-[#eee] ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img rounded-[50%] bg-[#ffb400] max-w-full align-middle border-none w-[40px] h-[40px] "
                    // style="color:transparent"

                    src="/images/education/edu.png"
                  />
                  <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
                    <h6 className="timeline__item__title mb-0  text-[18px] capitalize">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] py-[1px] px-[10px] rounded-[20px]">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot mt-0 bg-[#ffb400!important] w-1 h-1 border block rounded-full"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc mb-0 text-[15px]">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item flex py-6 border-b border-[#eee] ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img rounded-[50%] bg-[#ffb400] max-w-full align-middle border-none w-[40px] h-[40px] "
                    // style="color:transparent"

                    src="/images/education/edu.png"
                  />
                  <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
                    <h6 className="timeline__item__title mb-0  text-[18px] capitalize">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] py-[1px] px-[10px] rounded-[20px]">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot mt-0 bg-[#ffb400!important] w-1 h-1 border block rounded-full"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc mb-0 text-[15px]">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item flex py-6 border-b border-[#eee] ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img rounded-[50%] bg-[#ffb400] max-w-full align-middle border-none w-[40px] h-[40px] "
                    // style="color:transparent"

                    src="/images/education/edu.png"
                  />
                  <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
                    <h6 className="timeline__item__title mb-0  text-[18px] capitalize">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] py-[1px] px-[10px] rounded-[20px]">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot mt-0 bg-[#ffb400!important] w-1 h-1 border block rounded-full"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc mb-0 text-[15px]">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
