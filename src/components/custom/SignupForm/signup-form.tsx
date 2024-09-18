"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaSeedling, FaTractor, FaLeaf, FaPhone, FaHome } from "react-icons/fa";
import { SignupDataType } from "@/types";
import CreateNewUserAction from "@/actions/signup/signup-server-action";
import * as Cookies from "js-cookie";

export const SignupForm = () => {
  const [formData, setFormData] = React.useState<SignupDataType>({
    fullname: "",
    phone: "",
    password: "",
    address: "",
    role: "buyer",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await CreateNewUserAction(formData);

    //@ts-ignore
    Cookies.default.set("session_token", response.token as string);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleRoleChange = (role: "buyer" | "seller" | "contractor") => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      role,
    }));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {/* Full Name Field */}
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label
          htmlFor="fullname"
          className="flex items-center space-x-2 text-green-700"
        >
          <FaLeaf /> <span>Full Name</span>
        </Label>
        <Input
          type="text"
          id="fullname"
          placeholder="Your Full Name"
          className="border-green-300"
          value={formData.fullname}
          onChange={handleInputChange}
        />
      </div>

      {/* Phone Number Field */}
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label
          htmlFor="phone"
          className="flex items-center space-x-2 text-green-700"
        >
          <FaPhone /> <span>Phone Number</span>
        </Label>
        <Input
          type="text"
          id="phone"
          placeholder="Phone Number"
          className="border-green-300"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      {/* Password Field */}
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label
          htmlFor="password"
          className="flex items-center space-x-2 text-green-700"
        >
          <FaSeedling /> <span>Password</span>
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Your Password"
          className="border-green-300"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      {/* Address Field */}
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label
          htmlFor="address"
          className="flex items-center space-x-2 text-green-700"
        >
          <FaHome /> <span>Your Address</span>
        </Label>
        <Textarea
          id="address"
          placeholder="Type your address here."
          className="border-green-300"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>

      {/* Checkbox for Buyer */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="buyer"
          checked={formData.role === "buyer"}
          onCheckedChange={() => handleRoleChange("buyer")}
        />
        <Label htmlFor="buyer" className="text-green-700">
          Signup as Buyer
        </Label>
      </div>

      {/* Checkbox for Seller */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="seller"
          checked={formData.role === "seller"}
          onCheckedChange={() => handleRoleChange("seller")}
        />
        <Label htmlFor="seller" className="text-green-700">
          Signup as Seller
        </Label>
      </div>

      {/* Checkbox for Contractor */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="contractor"
          checked={formData.role === "contractor"}
          onCheckedChange={() => handleRoleChange("contractor")}
        />
        <Label htmlFor="contractor" className="text-green-700">
          Signup as Contractor
        </Label>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all"
        >
          <FaTractor className="inline-block mr-2" /> Sign Up
        </Button>
      </div>
    </form>
  );
};
