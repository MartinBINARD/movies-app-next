'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
