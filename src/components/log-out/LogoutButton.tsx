'use client';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
  return (
    <div>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="rounded border border-primary bg-transparent px-4 py-2 font-semibold text-primary hover:border-transparent hover:bg-primary hover:text-white"
      >
        Déconnexion
      </button>
    </div>
  );
};
