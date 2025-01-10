/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";
import { FaDashcube } from "react-icons/fa";

import Logo from "./logo";
import { linkVariants, menuVariants } from "./animation";
import NavButtons from "./navButtons";
import AnimatedButton from "./button";
import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/config/site";

const underlineVariants = {
  initial: { width: 0 },
  whileHover: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const CustomNavbar = () => {
  const [shouldHideOnScroll, setShouldHideOnScroll] = useState(true);
  const [style, setStyle] = useState("top-4");

  const handleLinkClick = () => {
    setShouldHideOnScroll(false);
    setStyle("-top-4");
  };

  return (
    <Navbar
      className={` bg-transparent shadow-md top-2`}
      maxWidth="xl"
      shouldHideOnScroll={shouldHideOnScroll}
    >
      {/* Brand and logo */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Logo />
        </NavbarBrand>
        {/* Desktop links with animation */}
        <div className="hidden xl:flex gap-4 justify-start">
          {siteConfig?.navItems?.map((item) => (
            <NavbarItem key={item.href}>
              <motion.div
                animate="animate"
                className="relative"
                initial="initial"
                variants={linkVariants}
                whileHover="whileHover"
              >
                <ScrollLink
                  className={clsx(
                    "cursor-pointer text-default-800 hover:text-[#00FFFF]",
                  )}
                  color="black"
                  duration={500}
                  offset={-90}
                  smooth={true}
                  to={item.href.substring(1)}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </ScrollLink>
                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 bottom-[-2px] h-[2px] bg-[#00FF52]"
                  variants={underlineVariants}
                />
              </motion.div>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Right section: Theme Switch and Buttons */}
      <NavbarContent
        className="hidden xl:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <NavButtons />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <AnimatedButton
            IconComponent={FaDashcube}
            bgColor="bg-transparent"
            borderColor="dark:text-white border-warning-500"
            href="https://drive.google.com/file/d/1Ya5rkU5Do6VWPhvNI7zWk1g8OA-nPh56/view?usp=drive_link"
            target="_blank"
            text="Dashboard"
          />
        </NavbarItem>
      </NavbarContent>
      {/* Mobile menu toggle */}
      <NavbarContent className="flex xl:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      {/* Mobile menu with staggered animation */}
      <NavbarMenu
        animate="open"
        as={motion.div}
        className="flex flex-col items-center"
        exit="closed"
        initial="closed"
        variants={menuVariants}
      >
        <div className="mx-4 mt-2 flex flex-col gap-2 items-center justify-center space-y-5">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <motion.div
                animate="animate"
                className="relative"
                initial="initial"
                variants={linkVariants}
                whileHover="whileHover"
              >
                <ScrollLink
                  className={clsx("cursor-pointer text-foreground")}
                  duration={1500}
                  offset={-70}
                  smooth={true}
                  to={item.href.substring(1)}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </ScrollLink>
                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 bottom-[-2px] h-[2px] bg-warning"
                  variants={underlineVariants}
                />
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
        <NavButtons />
        <NavbarItem className="hidden sm:flex gap-2">
          <AnimatedButton
            href="https://drive.google.com/file/d/1Ya5rkU5Do6VWPhvNI7zWk1g8OA-nPh56/view?usp=drive_link"
            target="_blank" text="Dashboard"
          />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;
