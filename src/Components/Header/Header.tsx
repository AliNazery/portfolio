// import Link from "next/link";
// import ThemeComponent from "../theme/ThemeComponent";

// const Header = () => {
//   return (
//     <header className=" flex flex-row items-center justify-between p-4 bg-black w-full  border-r border-r-[#f8f9fa] fixed z-[999] transition-all duration-500 ease border !border-[hsla(0,0%,100%,0.051)]">
//       <div className="header__container flex flex-col items-center justify-between  h-full w-[100px] p-0">
//         <div className="header__logo pt-[30px] ">
//           <Link
//             href="/"
//             className="dark:text-text1 bg-transparent outline-none transition-all duration-500 ease "
//           >
//             <img
//               alt="logo"
//               loading="lazy"
//               width="45"
//               height="50"
//               decoding="async"
//               className="bg-transparent border-none max-w-full h-auto align-middle"
//               src="/images/logo.png"
//             />
//           </Link>
//         </div>
//         <nav className=" header__nav transform rotate-90 -translate-x-[54%] absolute top-[54%] w-full">
//           <div className="header__nav-cross hidden w-[35px] h-[35px] leading-[35px] text-center rounded-full absolute right-[35px] top-[35px] bg-[#ffb400] text-white">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 16 16"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//               className="cursor-pointer align-middle"
//             >
//               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
//             </svg>
//           </div>
          
//             <ul className="nav flex items-center justify-center flex-1 flex-row pl-0 mb-0 mt-0">
//               <li className="nav__item transform rotate-[-180deg] relative mx-[20px]">
//                 <Link
//                   href="#home"
//                   className=" active:text-[#ffb400] capitalize p-0 font-bold text-[16px] text-[#454545] font-muli outline-none transition-all duration-500 ease"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="transform rotate-[-180deg] relative mx-[20px]">
//                 <Link
//                   href="#about"
//                   className="capitalize p-0 font-bold text-[16px] dark:text-text1 font-muli outline-none transition-all duration-500 ease"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className="transform rotate-[-180deg] relative mx-[20px]">
//                 <Link
//                   href="#services"
//                   className="capitalize p-0 font-bold text-[16px] dark:text-text1 font-muli outline-none transition-all duration-500 ease"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li className="transform rotate-[-180deg] relative mx-[20px]">
//                 <Link
//                   href="#projects"
//                   className="capitalize p-0 font-bold text-[16px] dark:text-text1 font-muli outline-none transition-all duration-500 ease"
//                 >
//                   Projects
//                 </Link>
//               </li>
//               <li className="transform rotate-[-180deg] relative mx-[20px]">
//                 <Link
//                   href="#clients"
//                   className="capitalize p-0 font-bold text-[16px] dark:text-text1 font-muli outline-none transition-all duration-500 ease"
//                 >
//                   Clients
//                 </Link>
//               </li>
//               <li className="transform rotate-[-180deg] relative mx-[20px]">
//                 <Link
//                   href="#contact"
//                   className="capitalize p-0 font-bold text-[16px] dark:text-text1 font-muli outline-none transition-all duration-500 ease"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
          
//         </nav>
//         <div>
//           <button className="p-2 bg-gray-200 rounded-full">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 16 16"
//               className="h-6 w-6 text-gray-700 dark:hidden"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
//             </svg>
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 16 16"
//               className="h-6 w-6 hidden dark:block"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import Link from "next/link";
import ThemeComponent from "../theme/ThemeComponent";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between p-4 bg-black w-full fixed z-[999] transition-all duration-500 ease border-b border-[hsla(0,0%,100%,0.051)]">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link
          href="/"
          className="dark:text-text1 bg-transparent outline-none transition-all duration-500 ease"
        >
          <img
            alt="logo"
            loading="lazy"
            width="45"
            height="50"
            decoding="async"
            className="bg-transparent border-none max-w-full h-auto"
            src="/images/logo.png"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="flex justify-center items-center space-x-4">
          <li >
            <Link
              href="#home"
              className="capitalize font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
            >
              Home
            </Link>
          </li>
          <li >
            <Link
              href="#about"
              className="capitalize font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
            >
              About
            </Link>
          </li>
          <li >
            <Link
              href="#services"
              className="capitalize font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
            >
              Services
            </Link>
          </li>
          <li >
            <Link
              href="#projects"
              className="capitalize font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
            >
              Projects
            </Link>
          </li>
          <li >
            <Link
              href="#clients"
              className="capitalize font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
            >
              Clients
            </Link>
          </li>
          <li >
            <Link
              href="#contact"
              className="capitalize font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme Switch Button */}
      <div>
        <button className="p-2 bg-gray-200 rounded-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="h-6 w-6 text-gray-700 dark:hidden"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="h-6 w-6 hidden dark:block"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;



// import Link from "next/link";

// const SidebarHeader = () => {
//   return (
//     <header className="flex flex-col items-center justify-between p-4 bg-black w-[100px] h-screen border-r border-r-[#f8f9fa] fixed z-[999] transition-all duration-500 ease border !border-[hsla(0,0%,100%,0.051)]">
//       {/* Logo */}
//       <div className="flex items-center justify-center pt-8">
//         <Link
//           href="/"
//           className="dark:text-text1 bg-transparent outline-none transition-all duration-500 ease"
//         >
//           <img
//             alt="logo"
//             loading="lazy"
//             width="45"
//             height="50"
//             decoding="async"
//             className="bg-transparent border-none max-w-full h-auto"
//             src="/images/logo.png"
//           />
//         </Link>
//       </div>

//       {/* Navigation */}
//       <nav className=" items-center justify-center flex-1 rotate-[-90deg] ">
//         <ul className="flex flex-col items-center space-y-4">
//           <li>
//             <Link
//               href="#home"
//               className="capitalize p-0 font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#about"
//               className="capitalize p-0 font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#services"
//               className="capitalize p-0 font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
//             >
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#projects"
//               className="capitalize p-0 font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
//             >
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#clients"
//               className="capitalize p-0 font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
//             >
//               Clients
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#contact"
//               className="capitalize p-0 font-bold text-[16px] text-[#454545] dark:text-text1 transition-all duration-500 ease"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Theme Switch Button */}
//       <div className="flex items-center justify-center mb-4">
//         <button className="p-2 bg-gray-200 rounded-full">
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             viewBox="0 0 16 16"
//             className="h-6 w-6 text-gray-700 dark:hidden"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
//           </svg>
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             viewBox="0 0 16 16"
//             className="h-6 w-6 hidden dark:block"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default SidebarHeader;

// "use client"
// import Link from "next/link";
// import { useState } from "react";

// const SidebarHeader = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div className="flex flex-col items-center h-screen p-4 bg-gray-800 text-white">
//       {/* Logo */}
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold">Logo</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex flex-col items-center mb-8 transform -rotate-180">
//         <Link href="/" className="mb-4">
//           Home
//         </Link>
//         <Link href="/about" className="mb-4">
//           About
//         </Link>
//         <Link href="/contact" className="mb-4">
//           Contact
//         </Link>
//       </nav>

//       {/* Switch Button */}
//       <button
//         onClick={() => setIsOn(!isOn)}
//         className={`p-2 rounded ${isOn ? "bg-green-500" : "bg-red-500"}`}
//       >
//         {isOn ? "On" : "Off"}
//       </button>
//     </div>
//   );
// };

// export default SidebarHeader;
