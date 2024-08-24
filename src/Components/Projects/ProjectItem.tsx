// components/Projects/ProjectItem.tsx
import Link from "next/link";
import React from "react";
import { DetailSvg, ProjectPlusSvg } from "../Common/Icon/svg";

interface ProjectItemProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  subtitle,
  imageSrc,
  link,
}) => {
  return (
    <div className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100">
      <div className="project-item card card--light bg-[#f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out hover:text-[#ffb400] group">
        <div className="project-item__image relative overflow-hidden rounded-[20px]">
          <img
            alt="project"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="project-item__image__img align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
            src={imageSrc}
          />
          <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
            <div className="btn-view text-[#fff] border-none bg-[#ffb400] text-[25px] font-black rounded-[50%] flex items-center justify-center w-[35px] h-[35px]">
              <ProjectPlusSvg />
            </div>
          </div>
        </div>
        <div className="project-item__content flex justify-between pt-[20px]">
          <div className="project-item__content__info">
            <h5 className="project-item__content__title capitalize text-[#152035] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]">
              {title}
            </h5>
            <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px]">
              {subtitle}
            </p>
          </div>
          <Link
            className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] transition-colors duration-500 ease-in-out group-hover:text-[#ffb400]"
            href={link}
          >
            <DetailSvg />
          </Link>
        </div>
        <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default ProjectItem;
