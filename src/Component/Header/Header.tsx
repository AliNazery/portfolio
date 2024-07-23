import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <img
              alt="logo"
              loading="lazy"
              width="45"
              height="50"
              decoding="async"
              className="h-12 w-11"
              srcSet="/_next/image?url=%2Fassets%2Fimages%2Flogo.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Flogo.png&amp;w=96&amp;q=75 2x"
              src="/_next/image?url=%2Fassets%2Fimages%2Flogo.png&amp;w=96&amp;q=75"
            />
          </a>
        </Link>
      </div>
      <nav className="flex items-center">
        <div className="mr-4">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
          </svg>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#home">
              <a className="text-blue-500">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#clients">
              <a>Clients</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
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
