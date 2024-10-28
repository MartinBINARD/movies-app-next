import Negotiator from 'negotiator';

export const availablesLocales = ['en', 'fr'];
export const defaultLocale = 'fr';

export const getPreferredLocale = (request) => {
  const headers = { 'accept-language': request.header.get('accept-language') };
  const languages = new Negotiator();
};

export const getLocaleUrlToRedirect = (request) => {};
