import React from "react";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../assets/good.png";
import { Card, CardBody } from "@nextui-org/card";


const NotFound = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <Card className="w-[350px] bg-gray-700 text-white shadow-lg shadow-[#FFBF00]">
        <CardBody className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold">Not Found Page 👀</h2>
          <Image
            className="rounded-xl my-4"
            alt="Not Found Image"
            height={300}
            width={250}
            src={NotFoundImage}
          />
          <Link
            className="px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all"
            href="/"
          >
            Return Home
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default NotFound;
