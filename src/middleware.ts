import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const { url } = req;
  const token = req.cookies.get("token");

  console.log(url);
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)"],
};
