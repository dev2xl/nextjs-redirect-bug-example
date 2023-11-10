import { i18nRouter } from "next-i18n-router";
import { i18n } from "./i18n";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //@ts-ignore Locales are read-only
  return i18nRouter(request, i18n);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
