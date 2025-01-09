/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaCopy, FaCheck } from "react-icons/fa6";
import Link from "next/link";
import dynamic from "next/dynamic";
import animationData from "./experience.json";
import NavButtons from "../../ui/navButtons";

// Dynamic import to avoid SSR issues
const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

const ContactLeft: React.FC = () => {
  const [copied, setCopied] = useState<{ whatsapp: boolean; email: boolean }>({
    whatsapp: false,
    email: false,
  });

  const handleCopy = (value: string, field: "whatsapp" | "email") => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied({ ...copied, [field]: true });
      setTimeout(() => setCopied({ ...copied, [field]: false }), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="p-4 border border-default-200 rounded-md">
      {/* WhatsApp */}
      <div className="flex items-center space-x-2 mb-2">
        <Link href="https://wa.me/+8801789094002" target="_blank">
          <FaWhatsapp className="text-green-500 cursor-pointer" size={22} />
        </Link>

        <p className="text-default-700">
          <span>
            {" "}
            <Link href="https://wa.me/+8801789094002" target="_blank">
              WhatsApp:{" "}
            </Link>
          </span>{" "}
          +8801789094002
        </p>
        <button
          className="ml-2 text-gray-500 hover:text-green-500 transition-all "
          onClick={() => handleCopy("+8801789094002", "whatsapp")}
        >
          {copied.whatsapp ? (
            <FaCheck className="text-green-500" size={20} />
          ) : (
            <FaCopy size={20} />
          )}
        </button>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <Image
          alt="gmail"
          className="size-5"
          height={20}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          }
          width={20}
        />
        <p className="text-default-700">Email: nsbd500@gmail.com</p>
        <button
          className="ml-2 text-gray-500 hover:text-blue-500 transition-all"
          onClick={() => handleCopy(" nsbd500@gmail.com", "email")}
        >
          {copied.email ? (
            <FaCheck className="text-blue-500" size={20} />
          ) : (
            <FaCopy size={20} />
          )}
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="my-5">
        <NavButtons />
      </div>

      {/* Animated Image */}
      <div className="flex items-center justify-center">
        <Player
          play
          loop
          animationData={animationData}
          style={{ width: 240, height: 272 }}
        /> 
      </div>
    </div>
  );
};

export default ContactLeft;
