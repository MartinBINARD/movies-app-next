import withAuth, { NextRequestWithAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { getLocaleUrlToRedirect } from './utils/i18n';

export function middleware(request: NextRequest | NextRequestWithAuth) {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }

  if (/\/[a-z]{2}\/user.*/.test(request.nextUrl.pathname)) {
    return withAuth(request as NextRequestWithAuth);
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
