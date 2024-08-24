import React from "react";
import Link from "next/link";
import { FaceBookSvg } from "../Common/Icon/svg";
import {TwitterSvg} from "../Common/Icon/svg";
import { InstagramSvg } from "../Common/Icon/svg";
import {GithubSvg} from "../Common/Icon/svg";

const socialMediaLinks = [
  { href: "#", icon: <FaceBookSvg /> },
  { href: "#", icon: <TwitterSvg /> },
  { href: "#", icon: <InstagramSvg /> },
  { href: "#", icon: <GithubSvg /> },
];

const HeroSocialMedia = () => (
  <div className="hero__social-media">
    <ul className="social-media mb-0 mt-28 pl-0">
      {socialMediaLinks.map((link, index) => (
        <li key={index} className="social-media__item inline-block pr-3">
          <Link
            className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
            href={link.href}
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HeroSocialMedia;
