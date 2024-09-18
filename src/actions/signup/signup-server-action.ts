"use server";

import { CreateJWT } from "@/lib/auth/create-JWT";
import { SignupDataType } from "@/types";

let userDatabase: Record<string, SignupDataType[]> = {
  buyer: [],
  seller: [],
  contractor: [],
};

const CreateNewUserAction = async (formData: SignupDataType) => {
  if (!formData) {
    return {
      error: "Invalid Data",
      code: 400,
    };
  }

  try {
    if (!userDatabase[formData.role]) {
      userDatabase[formData.role] = [];
    }
    userDatabase[formData.role].push(formData);

    const sessionToken = await CreateJWT(formData.phone as string);

    return {
      token: sessionToken,
      code: 200,
    };
  } catch (e) {
    console.error("Error processing signup data:", e);
    return {
      error: "Internal Server Error",
      code: 500,
    };
  }
};

export default CreateNewUserAction;
