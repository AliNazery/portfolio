"use client";
import React from "react";
import TypewriterComponent from "./Typewriter ";

export default function Hero() {
  return (
    <section className="hero vh-100 px-[30px] bg-cover bg-center relative z-10">
      <img
        alt=""
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="hero__img absolute inset-0 h-full w-full text-transparent m-0 object-cover border-none max-w-full align-middle"
        sizes="100vw"
        src="/images/bg.jpg"
      />
      <div className="container transform-none opacity-100 w-full mx-auto px-3">
        <div className="row -mx-3 mt-0 flex flex-wrap">
          <div className="col-lg-12 flex-none w-full mt-0 px-3 max-w-full">
            <div className="hero__content h-screen relative flex justify-between flex-col py-[30px] ">
              <div className="hero__social-media">
                <ul className="social-media mb-0 mt-28 pl-0">
                  <li className="social-media__item inline-block pr-3">
                    <a
                      className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
                      href="#"
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
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="social-media__item inline-block pr-3">
                    <a
                      className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
                      href="#"
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
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="social-media__item inline-block pr-3">
                    <a
                      className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
                      href="#"
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
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="social-media__item inline-block pr-3">
                    <a
                      className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
                      href="#"
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
                          d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="social-media__item inline-block pr-3">
                    <a
                      className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
                      href="#"
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
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hero__banner relative">
                <div className="banner">
                  <h6 className="banner__subtitle text-white text-h6 font-medium tracking-wide !important">
                    👋 Hi There,
                  </h6>
                  <h1 className="banner__title font-black text-white !important flex gap-[5px] text-2xl my-[0.67em] mx-0">
                    I Am a
                    {/* <div
                      className="Typewriter"
                      data-testid="typewriter-wrapper"
                    >
                      <span className="Typewriter__wrapper"></span>
                      <span className="Typewriter__cursor">|</span>
                    </div> */}
                    <TypewriterComponent />
                  </h1>
                  <p className="banner__desc  max-w-[450px] mt-5 mb-7 text-white !important">
                    {/* As a freelance designer and front-end developer, I
                    specialize in transforming your visions into captivating,
                    interactive websites.My distinctive combination of creative
                    vision and technical expertise guarantees that your online
                    presence will make a memorable impression. */}
                    As a freelance designer and front-end developer, I transform
                    visions into captivating websites. My unique blend of
                    creativity and technical skills ensures your online presence
                    stands out.
                  </p>
                  <a
                    href="#about"
                    className="bg-white mb-24 text-[#ffb400] btn-default outline-none hover:bg-[#343a40] "
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
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      ></path>
                    </svg>
                    <span className="">More About Me</span>
                    {/* hover:content-[''] hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:bg-[#343a40] -hover:z-10 hover:origin-center hover:rounded-[20px hover:transition-all hover:duration-300 hover:ease hover:scale-0] */}
                  </a>
                </div>
              </div>
              <div className="hero__info">
                <div className="info w-full flex">
                  <div className="info__item pr-[30px]">
                    <p className="info__label mb-0 text-white font-extrabold font-muli">
                      Email:
                    </p>
                    <p className="info__value mb-0 text-white font-normal text-[15px]">
                      alinazery@yahoo.com
                    </p>
                  </div>
                  <div className="info__item pr-[30px]">
                    <p className="info__label mb-0 text-white font-extrabold font-muli">
                      Phone:
                    </p>
                    <p className="info__value mb-0 text-white font-normal text-[15px]">
                      {/* +113-804-9098 */}
                      +93 783740098
                    </p>
                  </div>
                  <div className="info__item pr-[30px]">
                    <p className="info__label mb-0 text-white font-extrabold font-muli">
                      Location:
                    </p>
                    <p className="info__value mb-0 text-white font-normal text-[15px]">
                      {/* California ,USA */}
                      Herat ,Afghanistan
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

// import Image from "next/image";
// import { useState } from "react";

// const Hero = () => {
//   return (
//     <section className="hero vh-100 px-[30px] bg-cover bg-center pl-7.5 pr-7.5 relative z-10">
//       <Image
//         alt=""
//         fetchPriority="high"
//         decoding="async"
//         layout="fill"
//         className="hero__img object-cover absolute inset-0 h-full w-full text-transparent max-w-full border-none align-middle"
//         src="/images/bg.jpg"
//         quality={75}
//         sizes="100vw"
//         objectFit="cover"
//         objectPosition="center"
//       />
//       <div
//         className="container px-3"
//         style={{
//           transform: "translateX(0px) translateY(80px) translateZ(0)",
//         }}
//       >
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="hero__content vh-100">
//               <div className="hero__social-media">
//                 <ul className="social-media">
//                   <li className="social-media__item">
//                     <a className="social-media__link" href="#">
//                       <svg
//                         stroke="currentColor"
//                         fill="currentColor"
//                         strokeWidth="0"
//                         viewBox="0 0 16 16"
//                         height="1em"
//                         width="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
//                       </svg>
//                     </a>
//                   </li>
//                   <li className="social-media__item">
//                     <a className="social-media__link" href="#">
//                       <svg
//                         stroke="currentColor"
//                         fill="currentColor"
//                         strokeWidth="0"
//                         viewBox="0 0 16 16"
//                         height="1em"
//                         width="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
//                       </svg>
//                     </a>
//                   </li>
//                   <li className="social-media__item">
//                     <a className="social-media__link" href="#">
//                       <svg
//                         stroke="currentColor"
//                         fill="currentColor"
//                         strokeWidth="0"
//                         viewBox="0 0 16 16"
//                         height="1em"
//                         width="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
//                       </svg>
//                     </a>
//                   </li>
//                   <li className="social-media__item">
//                     <a className="social-media__link" href="#">
//                       <svg
//                         stroke="currentColor"
//                         fill="currentColor"
//                         strokeWidth="0"
//                         viewBox="0 0 16 16"
//                         height="1em"
//                         width="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.035.052-.845 1.196-2.723 2.066-.261-.5-.503-1.003-.761-1.509C8.65 2.566 8.331 1.944 8 1.18zM5.036 2.154c.217.311.428.628.636.955a28.196 28.196 0 0 1-.854 3.095c-.336 1.046-.717 2.084-1.08 3.123C2.747 8.54 1.82 8.398.765 8.3 1.26 5.566 3.866 3.217 5.036 2.154zm2.564 5.246c.27.518.515 1.048.759 1.576.087.183.17.372.257.556-.748.225-1.487.493-2.222.745-.113.037-.225.077-.338.111l-.84-.56c-.018-.009-.035-.025-.052-.035.265-.86.515-1.726.76-2.594.141-.49.28-.984.427-1.478.01.005.022.011.034.014a19.78 19.78 0 0 0 .765 1.665zm.417 4.517a28.52 28.52 0 0 1 2.5-.857c.196.42.389.835.58 1.26-.234.097-.466.199-.7.288-.965.364-1.938.672-2.921.894-.278-.462-.523-.944-.838-1.585a20.4 20.4 0 0 1 1.379-.862zm-1.44.535c.228.431.462.869.702 1.29-.518.111-1.043.197-1.58.229a6.8 6.8 0 0 1-4.334-1.752c.086-.143.966-1.586 2.82-2.344l.638.427c.127.085.253.166.38.246.458.292.92.572 1.374.875z"></path>
//                       </svg>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <h1 className="display-2 text-uppercase text-white font-weight-bold mt-4 mb-0">
//                 hello <span className="text-primary">world</span>
//               </h1>
//               <p className="lead text-white-50 font-weight-light">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Tempora, sunt.
//               </p>
//               <a href="#" className="btn btn-lg btn-primary rounded-pill mt-4">
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
