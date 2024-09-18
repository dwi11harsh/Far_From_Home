type UserRole = "buyer" | "seller" | "contractor";

export interface SignupDataType {
  fullname: string;
  phone: string;
  password: string;
  address: string;
  role: UserRole;
}
