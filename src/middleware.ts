import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import { APP_HOME, DEFAULT_APP_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, privateRoutes, publicRoutes } from "./modules/shared/presentation/routes/routes";

class RouteHandler {
  private req: NextRequest;
  private pathNameWithoutLocale: string;

  constructor(req: NextRequest) {
    this.req = req;
    this.pathNameWithoutLocale = this.getPathNameWithoutLocale();
  }

  private getPathNameWithoutLocale(): string {
    const { pathname } = this.req.nextUrl;
    return pathname;
  }

  isPublicRoute(): boolean {
    return publicRoutes.includes(this.pathNameWithoutLocale);
  }

  isAuthRoute(): boolean {
    return authRoutes.includes(this.pathNameWithoutLocale);
  }

  isApiAuthRoute(): boolean {
    return this.req.nextUrl.pathname.startsWith(apiAuthPrefix);
  }

  isPrivateRoute(): boolean {
    return privateRoutes.some((route) => this.pathNameWithoutLocale.startsWith(route));
  }

  handleRedirection(isLoggedIn: boolean): NextResponse | undefined {
    if (this.isApiAuthRoute() || this.isPublicRoute() || (!isLoggedIn && this.isAuthRoute()) || (isLoggedIn && this.isPrivateRoute())) {
      return NextResponse.next();
    }

    if (!isLoggedIn && this.isPrivateRoute()) {
      const redirectUrl = new URL(`${DEFAULT_APP_LOGIN_REDIRECT}`, this.req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }

    if (isLoggedIn && this.isAuthRoute()) {
      const redirectUrl = new URL(`${APP_HOME}`, this.req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }

    return;
  }
}

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const routeHandler = new RouteHandler(req);

  return routeHandler.handleRedirection(isLoggedIn);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
