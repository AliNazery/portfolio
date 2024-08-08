import React from "react";

export default function About() {
  return (
    <section
      className="about section bg-white pt-[100px] pb-[76px] lg:px-[30px]"
      id="about"
    >
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] px-3 mx-auto  w-full xl:max-w-[1170px]">
        <div
          className="row flex flex-wrap -mx-3 transform-none opacity-100"
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
          className="row transform-none opacity-100 flex flex-wrap -mx-3"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className=" mb-6 flex-none shrink-0 w-full max-w-full px-3 xl:flex-[0_0_auto] xl:w-[41.66666667%] ">
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
          className="row"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="feature card card--light">
              <h1 className="feature__number">+70</h1>
              <p className="feature__text">Completed Projects</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="feature card card--light">
              <h1 className="feature__number">+50</h1>
              <p className="feature__text">Happy Customers</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="feature card card--light">
              <h1 className="feature__number">+07</h1>
              <p className="feature__text">Years of experience</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="feature card card--light">
              <h1 className="feature__number">+15</h1>
              <p className="feature__text">Awards won</p>
            </div>
          </div>
        </div>
        <div
          className="row"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className="col-lg-6">
            <div className="timeline card card--light ">
              <div className="timeline__single">
                <h4 className="timeline__single__title">My Experience</h4>
                <div className="timeline__item ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img"
                    // style="color:transparent"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75"
                  />
                  <div className="timeline__item__content">
                    <h6 className="timeline__item__title">
                      Seinor UI/UX Desinger
                    </h6>
                    <div className="">
                      <div className="timeline__item__info">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot"></span>
                        <span className="timeline__item__year">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img"
                    // style="color:transparent"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75"
                  />
                  <div className="timeline__item__content">
                    <h6 className="timeline__item__title">UI/UX Designer</h6>
                    <div className="">
                      <div className="timeline__item__info">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot"></span>
                        <span className="timeline__item__year">
                          2017 - 2018
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img"
                    // style="color:transparent"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75"
                  />
                  <div className="timeline__item__content">
                    <h6 className="timeline__item__title">
                      Junior Visual Designer
                    </h6>
                    <div className="">
                      <div className="timeline__item__info">
                        <span className="timeline__item__place">Spotify</span>
                        <span className="dot"></span>
                        <span className="timeline__item__year">
                          2015 - 2016
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="timeline card card--light ">
              <div className="timeline__single">
                <h4 className="timeline__single__title">My Education</h4>
                <div className="timeline__item ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img"
                    // style="color:transparent"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75"
                  />
                  <div className="timeline__item__content">
                    <h6 className="timeline__item__title">
                      Engineering Degree
                    </h6>
                    <div className="">
                      <div className="timeline__item__info">
                        <span className="timeline__item__place">
                          Paris University{" "}
                        </span>
                        <span className="dot"></span>
                        <span className="timeline__item__year">
                          2015 - 2016
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img"
                    // style="color:transparent"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75"
                  />
                  <div className="timeline__item__content">
                    <h6 className="timeline__item__title">
                      Engineering Degree
                    </h6>
                    <div className="">
                      <div className="timeline__item__info">
                        <span className="timeline__item__place">
                          Paris University{" "}
                        </span>
                        <span className="dot"></span>
                        <span className="timeline__item__year">
                          2015 - 2016
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc">
                      Ludantium totam rem aperia meaque ipsa quae ab illo inven
                      tore veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
                <div className="timeline__item ">
                  <img
                    alt=""
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="timeline__item__img"
                    // style="color:transparent"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75"
                  />
                  <div className="timeline__item__content">
                    <h6 className="timeline__item__title">
                      Engineering Degree
                    </h6>
                    <div className="">
                      <div className="timeline__item__info">
                        <span className="timeline__item__place">
                          Paris University{" "}
                        </span>
                        <span className="dot"></span>
                        <span className="timeline__item__year">
                          2015 - 2016
                        </span>
                      </div>
                    </div>
                    <p className="timeline__item__desc">
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
