export type SiteConfig = typeof siteConfig;
import {
  FaUser,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaBlog,
  FaHome,
} from "react-icons/fa";

export const siteConfig = {
  name: "Md Solaiman",
  ogImage: "https://demo.jpg",
  url: "www.solaiman.dev",
  description:
    "Junior Font End Developer specializing in modern web technologies.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Blogs",
      href: "#blogs",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  dashboardMenuItems: [
    { name: "Profile", icon: FaUser, path: "/dashboard" },
    {
      name: "Skills Management",
      icon: FaLaptopCode,
      path: "/dashboard/skills-management",
    },
    {
      name: "Projects Management",
      icon: FaProjectDiagram,
      path: "/dashboard/projects-management",
    },
    {
      name: "Education Management",
      icon: FaGraduationCap,
      path: "/dashboard/education-management",
    },
    {
      name: "Experience Management",
      icon: FaUser,
      path: "/dashboard/experience-management",
    },
    {
      name: "Blogs Management",
      icon: FaBlog,
      path: "/dashboard/blogs-management",
    },
    {
      name: "Home",
      icon: FaHome,
      path: "/",
    },
  ],
  links: {
    github: "https://github.com/Devloper-solaiman",
    linkedin: "https://www.linkedin.com/in/solaiman-dev/",
    facebook: "https://www.facebook.com/profile.php?id=100034976902391",
    twitter: "https://x.com/solaimandevlop1",
    discord: "https://discord.gg/49AxDPnM",
    resume: "https://drive.google.com/file/d/1Ya5rkU5Do6VWPhvNI7zWk1g8OA-nPh56/view?usp=drive_link",
  },
};
