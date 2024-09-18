import { NextRequest, NextResponse } from "next/server";
import { VerifyJWT } from "./lib/auth/verify-JWT";
import { userDatabase } from "./actions/users";

const publicPaths = ["/", "/login", "/signup"];
const buyerPaths = ["/buyer", "/cart", "/product"];
const sellerPaths = [
  "/seller",
  "/addproduct",
  "/sellerproductpage",
  "/updateproduct",
];
const contractorPaths = ["/contractor", "/documentation", "/farmerdetails"];

// combine all restricted paths into one array
const restrictedPaths = [...buyerPaths, ...sellerPaths, ...contractorPaths];

const Middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  // let anyone with no session token access public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // if the path is not part of the restricted paths, allow access
  if (!restrictedPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("session_token")?.value;

  // go to main (home) page if no session token is found
  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // validate token received
  const { valid, decoded } = await VerifyJWT(cookie);

  if (!valid || !decoded) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { formData } = decoded as any;
  const { role } = formData;

  // check user existence in db array
  if (!userDatabase[role]?.some((user) => user.phone === formData.phone)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Role-based route access control
  if (role === "buyer" && buyerPaths.includes(pathname)) {
    return NextResponse.next();
  }

  if (role === "seller" && sellerPaths.includes(pathname)) {
    return NextResponse.next();
  }

  if (role === "contractor" && contractorPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // lodu mera code padhna band kar gpt ne generate nhi kiya hai
  // khudse likha hai maine
  // If user role doesn't have access, redirect to 403 (Forbidden) page
  return NextResponse.redirect(new URL("/403", request.url));
};

export default Middleware;
