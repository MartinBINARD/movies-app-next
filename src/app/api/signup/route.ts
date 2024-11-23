import prisma from '@/utils/prisma';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = user;
  return NextResponse.json(rest);
}
