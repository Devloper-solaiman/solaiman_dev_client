/* eslint-disable prettier/prettier */
// ProjectDetails.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import AnimatedButton from "../../ui/button";

import ThumbnailSlider from "./thumbnailSlider ";

import { TProject } from "@/types";

export default function ProjectDetails({ project }: { project: TProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { images, title, description, technologies, github } = project;

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Framer Motion Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      animate="visible"
      className="flex flex-col lg:flex-row gap-8 p-2 md:p-6"
      initial="hidden"
      variants={containerVariants}
    >
      {/* Left Side - Main Image */}
      <motion.div
        className="flex flex-col w-full lg:w-1/2"
        variants={imageVariants}
      >
        <motion.div className="w-full h-[400px]">
          <Image
            alt="Title"
            className="rounded-lg shadow-lg"
            height={500}
            src={images[currentImageIndex]}
            width={500}
          />
        </motion.div>

        {/* Bottom Image Pagination */}
        <ThumbnailSlider
          currentImageIndex={currentImageIndex}
          handleImageChange={handleImageChange}
          images={images}
        />
      </motion.div>

      {/* Right Side - Project Details */}
      <motion.div
        animate="visible"
        className="flex flex-col w-full lg:w-1/2"
        initial="hidden"
        transition={{ delay: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold mb-2 text-warning"
          initial={{ y: -10, opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h1>
        <motion.p
          animate={{ opacity: 1 }}
          className="text-default-700 mb-4"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>

        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          className="text-lg font-semibold mb-2"
          initial={{ y: -10, opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Technologies:
        </motion.h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech._id}
              animate="animate"
              className="bg-default-200 text-default-800 text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
              initial="initial"
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Image
                alt="icon"
                className="size-6 rounded-full object-cover"
                height={500}
                src={tech.icon}
                width={500}
              />{" "}
              {tech.name}
            </motion.span>
          ))}
        </div>

        <motion.div
          animate="visible"
          className="flex flex-wrap gap-3 mt-4"
          initial="hidden"
          transition={{ delay: 0.6 }}
          variants={containerVariants}
        >
          <AnimatedButton
            IconComponent={AiOutlineEye}
            bgColor="w-[120px] border-warning flex item-center justify-center bg-transparent"
            borderColor="border-warning"
            href={project.live}
            shadowColor="shadow-lg"
            text="Live"
            textColor="text-default-900"
          />
          <AnimatedButton
            IconComponent={FaGithub}
            bgColor="bg-transparent"
            borderColor="border-default-900"
            href={github.frontend}
            text="Frontend GitHub"
            textColor="text-default-900"
          />
          <AnimatedButton
            IconComponent={FaGithub}
            bgColor="bg-transparent"
            borderColor="border-default-900"
            href={github.backend}
            text="Backend GitHub"
            textColor="text-default-900"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
