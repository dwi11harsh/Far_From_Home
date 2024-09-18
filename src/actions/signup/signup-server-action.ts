"use server";

import { CreateJWT } from "@/lib/auth/create-JWT";
import { SignupDataType } from "@/types";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const filePath = path.resolve(__dirname, "../../../../../../users");

const CreateNewUserAction = async (formData: SignupDataType) => {
  const response: NextResponse = new NextResponse();

  if (!formData) {
    return {
      error: "Invalid Data",
      code: 400,
    };
  } else {
    const jsonFilePath = path.resolve(filePath, `${formData.role}.json`);

    try {
      const data = await fs.promises.readFile(jsonFilePath, "utf8");

      if (!data) {
        console.log("Empty JSON file");
      }

      try {
        const parsedData = JSON.parse(data);
        parsedData.push(formData);
        await fs.promises.writeFile(jsonFilePath, JSON.stringify(parsedData));

        const sessionToken = await CreateJWT(formData.phone as string);

        return {
          token: sessionToken,
          code: 200,
        };
      } catch (e) {
        console.log("error parsing server db file", e);
      }
    } catch (e) {
      console.log("error reading server db file", e);
    }
  }
};

export default CreateNewUserAction;
