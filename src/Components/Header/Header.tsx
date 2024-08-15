import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";
import { navItems } from "./NavItems";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 h-full flex flex-col items-center justify-between py-6 bg-white dark:bg-[#121212] shadow-lg z-50 w-[90px]">
      {/* Logo at the Top */}
      <div className="">
        <Image src="/path-to-logo.svg" alt="Logo" width={40} height={40} />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-[60px]">
        {navItems.map(({ href, label, highlight }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col items-center"
          >
            <span
              className={`text-sm -rotate-90 transform dark:text-white  ${
                highlight ? "text-[#ffb400]" : "group-hover:text-[#ffb400]"
              }`}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Dark/Light Mode Switch at the Bottom */}
      <div className="">
        <ThemeToggle />
      </div>
    </nav>
  );
}
