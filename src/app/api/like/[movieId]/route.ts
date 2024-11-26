import prisma from '@/utils/prisma';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest, { params: { movieId } }: { params: { movieId: string } }): Promise<NextResponse> => {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await prisma.user.update({
      where: {
        email: token.email as string,
      },
      data: {
        movieLikes: {
          create: [{ movieId }],
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
