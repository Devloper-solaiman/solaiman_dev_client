/* eslint-disable prettier/prettier */
"use client"
import { Tab, Tabs } from "@nextui-org/tabs";
import { FC, useState } from 'react';
import Lottie from "lottie-react";

import SkillsSkeleton from "../../ui/skeletion/skillSkeleton";
import skillImage from "../../../../../assets/me.json";

import SkillsCard from "./skillsCard";

import { SkillCategory } from "@/constants/skills.constants";
import { TSkill } from "@/types";
import { useGetSkillsByCategory } from "@/hooks/skills.hook";


const SkillCategories: FC = () => {
    const categories = Object.values(SkillCategory);
    const [selectedCategory, setSelectedCategory] = useState<string>("Frontend");

    // Fetch data based on selected category
    const { data, isLoading } = useGetSkillsByCategory(selectedCategory);
    const skills = data?.data as TSkill[];

    const handleCategoryChange = (key: string) => {
        setSelectedCategory(key);
    };

    return (
        <div className="flex flex-col gap-5 relative">
            <Tabs
                aria-label="Skill Categories"
                className="z-10 flex items-center justify-center"
                color="warning"
                selectedKey={selectedCategory}
                variant="bordered"
                onSelectionChange={(key) => handleCategoryChange(key as string)}
            >
                {categories.map((category) => (
                    <Tab key={category} title={category} value={category}>
                        <div className="flex flex-wrap items-center justify-center gap-5">
                            {isLoading ? (
                                Array.from({ length: 7 }, (_, index) => (
                                    <SkillsSkeleton key={index} />
                                ))
                            ) : skills && skills.length > 0 ? (
                                skills.map((skill) => (
                                    <SkillsCard key={skill._id} skill={skill} />
                                ))
                            ) : (
                                <div className="flex items-center justify-center my-10">
                                    <p className="text-default-900 font-semibold">
                                        No Data Available
                                    </p>
                                </div>
                            )}
                        </div>
                    </Tab>
                ))}
            </Tabs>
            <div className="absolute right-0 -top-20">
                <Lottie
                    animationData={skillImage}
                    className="md:h-96 md:w-full"
                    loop={true}
                />
            </div>
        </div>
    );
};

export default SkillCategories;
