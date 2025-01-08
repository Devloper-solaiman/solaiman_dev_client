/* eslint-disable prettier/prettier */
import React from "react";

import { Title } from "../_components/ui/title";
import SkillCategories from "../_components/module/skills/skillsCategories";

const SkillsPage = () => {
  return (
    <div>
      <Title title1="Skills" title2="Skills" />
      <SkillCategories />
    </div>
  );
};

export default SkillsPage;
