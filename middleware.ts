import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiRoutesPrefix,
  authRoutes,
  DEFAULT_LOGEDIN_URL,
  publicRoutes,
} from "./routes";

const { auth: middleware } = NextAuth(authConfig);

// Todo : fix the type
// @ts-ignore
export default middleware ((req) => {
  const { nextUrl } = req;
  const isLogedIn = !!req.auth
  const isApiRoute = nextUrl.pathname.startsWith(apiRoutesPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiRoute) {
    return null;
  }
  if (isAuthRoute) {
    if (isLogedIn) {
      return Response.redirect(new URL(DEFAULT_LOGEDIN_URL, nextUrl));
    }
    return null;
  }

  if (!isLogedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
