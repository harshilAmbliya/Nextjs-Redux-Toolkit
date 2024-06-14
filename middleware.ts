import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "./utils/auth";
// This function can be marked `async` if using `await` inside
export  function middleware(request: NextRequest) {
    if("/" === request.nextUrl.pathname){
        return NextResponse.next();
    }

    const token = getToken()
    // const token = request.headers.get("Authorization");
    // console.log("token", token);
    const newHeaders = request.headers
  // const token = request.headers.get("authorization");
  // console.log("token", { newHeaders, token });
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
