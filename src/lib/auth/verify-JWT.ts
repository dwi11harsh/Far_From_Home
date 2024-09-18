import jwt from "jsonwebtoken";

export const VerifyJWT = async (token: string) => {
  const secret = process.env.JWT_SECRET_KEY || "secret";

  try {
    const decoded = jwt.verify(token, secret);
    return {
      valid: true,
      decoded,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        valid: false,
        error: error.message,
      };
    }

    return {
      valid: false,
      error: "Unknown error",
    };
  }
};
