"use server";

import { CreateJWT } from "@/lib/auth/create-JWT";
import { SignupDataType } from "@/types";
import { promises as fs } from "fs";

const CreateNewUserAction = async (formData: SignupDataType) => {
  if (!formData) {
    return {
      error: "Invalid Data",
      code: 400,
    };
  } else {
    const jsonFilePath = process.cwd() + `/users/${formData.role}.json`;

    try {
      const data = await fs.readFile(jsonFilePath, "utf8");

      if (!data) {
        console.log("Empty JSON file");
      }

      try {
        const parsedData = JSON.parse(data);
        parsedData.push(formData);

        await fs.writeFile(jsonFilePath, JSON.stringify(parsedData));

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
