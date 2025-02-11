/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import Image from "next/image";

import AnimatedButton from "../../ui/button";

import AchievementsSection from "./achivement";

import { TAbout, TBlog, TProject, TSkill } from "@/types";

interface TAboutProps {
  about: TAbout;
  projects: TProject[];
  skills: TSkill[];
  blogs: TBlog[];
}

export default function About({ about, projects, skills, blogs }: TAboutProps) {
  return (
    <section className="bg-default-50 p-2 md:p-8 flex flex-col lg:flex-row justify-start items-start lg:space-x-8 space-y-8 lg:space-y-0">
      {/* Image Section */}
      <div className="w-full lg:w-1/3">
      dk
        <Image
          alt="about Image"
          className="w-full h-full lg:h-[350px] rounded-lg shadow-lg object-cover"
          height={500}
          src={about.image || "https://example.com/my-image.jpg"}
          width={500}
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 text-center md:text-left space-y-2">
        <h2 className="text-xl md:text-3xl font-bold">{about.title}</h2>
        <p className="text-sm text-default-500 mb-4">
          Address: {about.address + "," + about.country}
        </p>
        <p className="text-default-600 mb-10 text-sm">{about.description}</p>

        {/* Experience, Projects, Companies Worked */}
        <AchievementsSection
          blogs={blogs}
          projects={projects}
          skills={skills}
        />

        {/* Download CV Button */}
        <AnimatedButton
          bgColor="bg-transparent"
          borderColor="border-warning-500 my-5"
          href="https://drive.google.com/file/d/1Ya5rkU5Do6VWPhvNI7zWk1g8OA-nPh56/view?usp=drive_link"
          target="_blank"
          text="View Resume"
          textColor="text-[#F5A524]"
        />
      </div>
    </section>
  );
}
