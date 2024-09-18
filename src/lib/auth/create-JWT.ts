import { SignupDataType } from "@/types";
import jwt from "jsonwebtoken";

export const CreateJWT = async (formData: SignupDataType) => {
  const secret = process.env.JWT_SECRET_KEY || "secret";

  const token = jwt.sign({ formData }, secret, {
    expiresIn: "1w",
  });

  return token;
};
