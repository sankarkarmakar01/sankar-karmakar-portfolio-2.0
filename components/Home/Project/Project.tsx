import SectionHeading from "../../Helper/SectionHeading";
import { projectData } from "../../../Data/data";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={`${i * 150}`}
              data-aos-anchor-placement="top-center"
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 flex justify-center items-center flex-col"
            >
              <Image
                src={project.image}
                alt="project"
                width={300}
                height={300}
                className="w-full rounded-sm"
              />
              <h1 className="text-white text-center text-xl font-bold pt-4 w-full">
                {project.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
