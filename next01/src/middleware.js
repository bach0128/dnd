import { NextResponse } from "next/server";

export const middleware = (request) => {
  let isAuth = false;
  const useAgent = request.headers.get("use-agent");
  const pathName = request.nextUrl.pathname;
  // const cookie = request.headers.get("cookie");
  // const username = request.cookies.get("username");
  // request.cookies.delete("username");
  // console.log(pathName);
  // const response = NextResponse.next();
  // response.headers.set("x-api-key", "123");
  // response.cookies.set({
  //   name: "abc",
  //   value: "xyz",
  //   httpOnly: true,
  // });
  // return response;
  // if (pathName.startsWith("/products") && !isAuth) {
  //   const urlLogin = new URL("/auth/login", request.url);

  // rewrite
  if (pathName.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-us", request.url));
  }

  // return NextResponse.redirect(urlLogin);
};

export const config = {
  // matcher: ["/products/:path*", "/auth/login/:path*"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
