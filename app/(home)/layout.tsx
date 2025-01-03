/* eslint-disable prettier/prettier */
"use client";

import { ReactNode } from "react";
import CustomNavbar from "./_components/ui/navbar";
import Footer from "./_components/footer";
import SmoothScrollWrapper from "./_components/ui/ScrollAnimation";
import { Element } from "react-scroll";

interface CommonLayoutProps {
    children: ReactNode;
    aboutMe: ReactNode;
    // education: ReactNode;
    experience: ReactNode;
    skills: ReactNode;
    projects: ReactNode;
    myBlogs: ReactNode;
    contactMe: ReactNode;
}


export default function CommonLayout({
    children,
    aboutMe,
    // education,
    experience,
    skills,
    projects,
    myBlogs,
    contactMe,
}: CommonLayoutProps) {
    return (
        <div className="space-y-5 pt-4 px-2">
            <CustomNavbar />
            <SmoothScrollWrapper />
            {/* Main content */}
            <Element name="home">
                <div>{children}</div>
            </Element>
            {/* Skills section with animation */}
            <Element name="skills">
                <div>{skills}</div>
            </Element>

            <Footer />
        </div>
    );
}
