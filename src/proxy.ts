"use client";

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The function name MUST be "proxy"
export function proxy(request: NextRequest) {
  // For now, just let everything through.
  // You can add your authentication logic here later.
  return NextResponse.next();
}

// Optional: Configure which routes this applies to
export const config = {
  matcher: ['/booking/:path*', '/profile/:path*'],
};