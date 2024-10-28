import { NextRequest, NextResponse } from 'next/server';
import { getLocaleUrlToRedirect } from './utils/i18n';

export const middleware = (request: NextRequest) => {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }
};

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicion.ico).*)',
};
