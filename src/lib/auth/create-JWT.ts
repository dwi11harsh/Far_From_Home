import * as jose from "jose";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const CreateJWT = async (phoneNumber: string) => {
  const secret = process.env.JWT_SECRET_KEY || "secret";

  const token = jwt.sign({ phoneNumber }, secret, {
    expiresIn: "1w",
  });

  return token;
};
