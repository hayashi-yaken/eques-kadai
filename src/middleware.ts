import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/home') {
    return NextResponse.redirect(new URL('/home/browser/microsoft', request.url))
  }
}

export const config = {
  matcher: '/',
}
