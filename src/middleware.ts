import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Extract the country code from Vercel/Cloudflare headers or native Next.js geo object.
  // 'GB' is the ISO 3166-1 alpha-2 code for the United Kingdom of Great Britain and Northern Ireland.
  const country =
    request.geo?.country ||
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry");

  const { pathname } = request.nextUrl;

  // We only want to trigger the redirect if:
  // 1. The visitor is detected to be in the UK
  // 2. They aren't already on the /uk path (prevents infinite redirect loops)
  if (country === "GB" && !pathname.startsWith("/uk")) {
    const url = request.nextUrl.clone();
    url.pathname = "/uk";
    // Returns a 302 Found (temporary redirect), ensuring the browser doesn't cache the redirect permanently.
    return NextResponse.redirect(url);
  }

  // Continue generating the response normally
  return NextResponse.next();
}

// Ensure the middleware only runs on relevant paths, ignoring static files and Next.js internals
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, icons, or other standard static asset paths
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
