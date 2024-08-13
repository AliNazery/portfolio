import React from 'react'

export default function Projects() {
  return (
    <section
      className="project section section--white bg-[#fff] pt-[100px] pb-[76px] px-[30px]"
      id="projects"
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
                  My Projects
                </h2>
                <p className="text-[#6c757d]">
                  A Latest Creative Works In Desing And Web
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row project__items flex flex-wrap -mx-3">
          <div
            className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto]  lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out   hover:text-[#ffb400] group ">
              <div className="project-item__image relative overflow-hidden rounded-[20px]">
                <img
                  alt="project"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                  //   style="color:transparent"
                  src="/images/projects/1.jpg"
                />
                <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
                  <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] block w-[35px] h-[35px] leading-[30px] text-center pointer ">
                    <svg
                      className="align-middle  transition-colors duration-500 ease-in-out"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-item__content flex justify-between pt-[20px]">
                <div className="project-item__content__info">
                  <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
                    Cosmetic App
                  </h5>
                  <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
                    Cosmetic Design React Template
                  </p>
                </div>
                <a
                  className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto]  lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out   hover:text-[#ffb400] group ">
              <div className="project-item__image relative overflow-hidden rounded-[20px]">
                <img
                  alt="project"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                  //   style="color:transparent"
                  src="/images/projects/2.jpg"
                />
                <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
                  <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] block w-[35px] h-[35px] leading-[30px] text-center pointer ">
                    <svg
                      className="align-middle  transition-colors duration-500 ease-in-out"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-item__content flex justify-between pt-[20px]">
                <div className="project-item__content__info">
                  <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
                    Landing Page
                  </h5>
                  <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
                    Architecture Design Reactjs Template
                  </p>
                </div>
                <a
                  className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto]  lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out   hover:text-[#ffb400] group ">
              <div className="project-item__image relative overflow-hidden rounded-[20px]">
                <img
                  alt="project"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-115"
                  //   style="color:transparent"
                  src="/images/projects/3.jpg"
                />
                <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
                  <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] block w-[35px] h-[35px] leading-[30px] text-center pointer ">
                    <svg
                      className="align-middle  transition-colors duration-500 ease-in-out"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-item__content flex justify-between pt-[20px]">
                <div className="project-item__content__info">
                  <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
                    Cosmetic App
                  </h5>
                  <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
                    Cosmetic Design React Template
                  </p>
                </div>
                <a
                  className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto]  lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out   hover:text-[#ffb400] group ">
              <div className="project-item__image relative overflow-hidden rounded-[20px]">
                <img
                  alt="project"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                  //   style="color:transparent"
                  src="/images/projects/4.jpg"
                />
                <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
                  <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] block w-[35px] h-[35px] leading-[30px] text-center pointer ">
                    <svg
                      className="align-middle  transition-colors duration-500 ease-in-out"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-item__content flex justify-between pt-[20px]">
                <div className="project-item__content__info">
                  <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
                    Cosmetic App
                  </h5>
                  <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
                    Cosmetic Design React Template
                  </p>
                </div>
                <a
                  className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto]  lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out   hover:text-[#ffb400] group ">
              <div className="project-item__image relative overflow-hidden rounded-[20px]">
                <img
                  alt="project"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                  //   style="color:transparent"
                  src="/images/projects/5.jpg"
                />
                <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
                  <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] block w-[35px] h-[35px] leading-[30px] text-center pointer ">
                    <svg
                      className="align-middle  transition-colors duration-500 ease-in-out"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-item__content flex justify-between pt-[20px]">
                <div className="project-item__content__info">
                  <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
                    Cosmetic App
                  </h5>
                  <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
                    Cosmetic Design React Template
                  </p>
                </div>
                <a
                  className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
            </div>
          </div>
          <div
            className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto]  lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100"
            // style="opacity:0;transform:translateY(80px) translateZ(0)"
          >
            <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out   hover:text-[#ffb400] group ">
              <div className="project-item__image relative overflow-hidden rounded-[20px]">
                <img
                  alt="project"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                  //   style="color:transparent"
                  src="/images/projects/6.jpg"
                />
                <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
                  <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] block w-[35px] h-[35px] leading-[30px] text-center pointer ">
                    <svg
                      className="align-middle  transition-colors duration-500 ease-in-out"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-item__content flex justify-between pt-[20px]">
                <div className="project-item__content__info">
                  <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
                    Cosmetic App
                  </h5>
                  <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
                    Cosmetic Design React Template
                  </p>
                </div>
                <a
                  className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap -mx-3">
          <div className="col-12 shrink-0 max-w-full w-full flex-[0_0_auto] px-3">
            <div className="section__readmore text-center mb-0 font-medium">
              For More Works Visit{" "}
              <a className="section__readmore-link text-[#ffb400] outline-none bg-transparent transition-all duration-500 ease-in" href="/projects">
                Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
