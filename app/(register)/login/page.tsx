/* eslint-disable prettier/prettier */
import React, { Suspense } from "react";

import Loader from "@/app/(home)/_components/ui/skeletion/loader";
import LoginForm from "@/components/module/Login";

const LoginPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="h-screen m-auto w-full">
        <LoginForm />
      </div>
    </Suspense>
  );
};

export default LoginPage;
