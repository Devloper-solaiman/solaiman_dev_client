"use client";

import React, { useState } from "react";
import { format } from "date-fns";

import { TEducation } from "@/types";
import { Title } from "../../ui/title";
import Image from "next/image";

interface TEducationProps {
  educations: TEducation[];
}

export default function Education({ educations }: TEducationProps) {

  return (
    <>
      <Title title1="My Services" title2="Education" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {educations.map((edu) => (
          <EducationCard key={edu._id} education={edu} />
        ))}
      </div>
    </>
  );
}

interface EducationCardProps {
  education: TEducation;
}

const EducationCard = ({ education }: EducationCardProps) => {

  console.log({ education })
  return (
    <div className="bg-default-50 border-default-200 rounded-lg p-6 flex flex-col items-center">
  <Image
    alt="institution"
    src={education.institution}
    height={200}
    width={250}
    className="rounded-xl"
  />
  <h3 className="text-xl font-bold text-warning mb-1 text-center">
    {education.degree}
  </h3>
  <p className="text-default-600 mb-4  text-justify">
    {education.description}
  </p>
</div>
  );
};
