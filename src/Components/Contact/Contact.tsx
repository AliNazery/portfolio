import React from "react";
import SectionTitle from "../Common/Title/SectionTitle";
import Textarea from "../Contact/Textarea"

export default function Contact() {
  return (
    <section
      className="contact section section--white bg-[#fff] pt-[100px] px-[30px] pb-[76px]"
      id="contact"
    >
      <div className="container w-full mx-auto px-12 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <SectionTitle
          title="Contact Me"
          subtitle="Feel Free To Contact Me Any Time"
        />
        <div
          className="row opacity-100 transform-none flex flex-wrap -mx-3"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className="xl:w-7/12 flex-[0_0_auto] max-w-full px-3">
            <form
              className="contact-form needs-validation card card--light bg-[#f8f9fa] p-[30px] rounded-[20px] mb-6 border-0 transition-all duration-500 ease-in"
              action="javascript:throw new Error(&#x27;A React form was unexpectedly submitted.&#x27;)"
            >
              <div className="row flex flex-wrap -mx-3">
                <div className="md:w-6/12 md:flex-[0_0_auto] mb-6 shrink-0 w-full max-w-full px-3">
                  <input
                    type="text"
                    className="form-control contact-form__input rounded-[20px] py-3 px-[20px] border-1 border-solid border-[#f8f9fa] block w-full text-[1rem] font-normal leading-6 text-[#212529] appearance-none bg-[#fff] bg-clip-border transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="name"
                    placeholder="Enter Your Name"
                    // required=""
                    // maxLength="500"
                    name="senderName"
                  />
                </div>
                <div className="md:w-6/12 md:flex-[0_0_auto] mb-6 shrink-0 w-full max-w-full px-3">
                  <input
                    type="email"
                    className="form-control contact-form__input rounded-[20px] py-3 px-[20px] border-1 border-solid border-[#f8f9fa] block w-full text-[1rem] font-normal leading-6 text-[#212529] appearance-none bg-[#fff] bg-clip-border transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="email"
                    placeholder="Enter Your Email"
                    // required=""
                    // maxLength="500"
                    name="senderEmail"
                  />
                </div>
                {/* <div className="col-md-6 mb-24">
                  <input
                    type="email"
                    className="form-control contact-form__input"
                    id="email"
                    placeholder="Enter Your Email"
                    // required=""
                    // maxLength="500"
                    name="senderEmail"
                  />
                </div> */}
              </div>
              <div className="row flex flex-wrap -mx-3">
                <div className="shrink-0 w-full max-w-full px-3 lg:w-full lg:flex-[0_0_auto] mb-6 ">
                  <input
                    type="text"
                    className="form-control contact-form__input py-3 px-[20px] rounded-[20px] border-[1px] border-solid border-[#f8f9fa] block w-full text-[1rem] font-normal leading-6 text-[#212529] appearance-none bg-[#fff] bg-clip-border transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="subject"
                    placeholder="Enter Your Subject"
                    // required=""
                    // maxLength="500"
                    name="subject"
                  />
                </div>
                <div className="shrink-0 w-full max-w-full px-3 lg:w-full lg:flex-[0_0_auto] mb-6">
                  <Textarea
                    className="form-control contact-form__input contact-form__input--textarea rounded-[20px] py-3 px-[20px] bordre-[1px] border-solid border-[#f8f9fa] outline-none block w-full text-[1rem] font-normal leading-6 text-[#212529] appearance-none bg-[#fff] bg-clip-padding overflow-auto transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    rows={5}
                    maxLength={1000}
                    required
                  />
                </div>
                <div className="shrink-0 max-w-full px-3 w-full flex-[0_0_auto]">
                  <button
                    type="submit"
                    className="btn-default btn__submit cursor-pointer appearance-button overflow-visible inline-flex items-center justify-center whitespace-nowrap align-middle relative bg-[#ffb400] leading-[24px] border-0 text-white font-bold text-[16px] px-6 py-[10px] capitalize rounded-[20px] z-10 gap-[4px] transition-all duration-300 ease hover:bg-[#212529]"
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
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                    </svg>
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="xl:w-5/12 xl:flex-[0_0_auto] shrink-0 w-full max-w-full px-3">
            <div className="contact__info card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-in">
              <h4 className="contact__info-title text-[24px]">
                Let &#x27;s talk about everything!
              </h4>
              <p className="contact__info-desc mt-0 mb-4">
                Have a project or question? Contact me via email or use the form
                below. I look forward to connecting!
              </p>
              <div className="contact__info-items">
                <div className="contact__info-item mb-4 flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#ffb400] rounded-[50%]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>
                    </svg>
                  </span>
                  <span className="contact__info-item-value font-bold text-[16px]">
                    +(93) 7837-40098
                  </span>
                </div>
                <div className="contact__info-item mb-[16px] flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#ffb400] rounded-[50%]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                    </svg>
                  </span>
                  <span className="contact__info-item-value font-bold text-[16px]">
                    alinazery.dev@gmail.com
                  </span>
                </div>
                <div className="contact__info-item mb-4 flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#ffb400] rounded-[50%]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    </svg>
                  </span>
                  <span className="contact__info-item-value font-bold text-[16px]">
                    Herat, Herat Afghanistan
                  </span>
                </div>
                <div className="contact__info-item mb-0 flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#ffb400] rounded-[50%]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path>
                    </svg>
                  </span>
                  <div className="contact__info-item-social-media">
                    <ul className="social-media flex items-center gap-4 mt-4">
                      <li className="social-media__item inline-block">
                        <a
                          className="social-media__link pr-3 text-[#454545] bg-transparent outline-none transition-all duration-500 ease-in"
                          href="#"
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
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="social-media__item inline-block">
                        <a
                          className="social-media__link pr-3 text-[#454545] bg-transparent outline-none transition-all duration-500 ease-in"
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
                      <li className="social-media__item inline-block">
                        <a
                          className="social-media__link pr-3 text-[#454545] bg-transparent outline-none transition-all duration-500 ease-in"
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
                      <li className="social-media__item inline-block">
                        <a
                          className="social-media__link pr-3 text-[#454545] bg-transparent outline-none transition-all duration-500 ease-in"
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
                      <li className="social-media__item inline-block">
                        <a
                          className="social-media__link pr-3 text-[#454545] bg-transparent outline-none transition-all duration-500 ease-in"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
