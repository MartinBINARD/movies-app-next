'use client';
import { Route } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect } from 'react';

export const SignupForm: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/user/profile' as Route);
    }
  }, [status, router]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    }).then((response) => {
      if (response.ok) {
        signIn();
      }
    });
  };

  return (
    <div className="flex min-h-screen justify-center">
      <form onSubmit={handleFormSubmit} className="mt-[20vh] flex flex-col gap-[10px]">
        <h1 className="text-center text-secondary">Inscription</h1>
        <input className="min-w-[400px] rounded-md border border-slate-500 p-[10px]" type="text" name="email" placeholder="E-mail" />
        <input className="min-w-[400px] rounded-md border border-slate-500 p-[10px]" type="password" name="password" placeholder="******" />
        <input className="min-w-[400px] rounded-md border border-slate-500 p-[10px]" type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};
