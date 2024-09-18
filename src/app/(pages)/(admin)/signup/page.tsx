import { SignupForm } from "@/components/custom/SignupForm";
import React from "react";
const SignupPage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Background and theme */}
      <div className="w-full max-w-md space-y-8 bg-white p-6 shadow-xl rounded-lg border border-green-200">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-700">
            Join the Agriculture Community
          </h1>
          <p className="text-sm text-green-500">
            Empowering farmers, contractors, and sellers.
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
