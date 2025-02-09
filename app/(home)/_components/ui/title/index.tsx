/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { motion } from "framer-motion";

interface TitleProps {
  title1: string;
  title2: string;
}
export const Title: React.FC<TitleProps> = ({ title1 }) => {
  return (
    <div className="flex justify-center items-center top-0">
      <section className="my-5 md:my-10 w-1/6">
      <div className="flex items-center justify-center shadow-2xl dark:text-gray-200 rounded-sm shadow-[#140D03] gap-2 text-lg md:text-2xl text-default-900 font-semibold relative">
         <h2>{title1}</h2>
        {/* <motion.div
          animate={{ opacity: 1 }}
          className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-gray-400 to-transparent"
          initial={{ opacity: 0.5 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        /> */}
      </div>
    </section>
    </div>
  );
};
