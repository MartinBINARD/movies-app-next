import { LogoutButton } from '@/components/log-out/LogoutButton';
import { MediaCard } from '@/components/media-card/MediaCard';
import { LocaleTypes } from '@/utils/i18n';
import { getHydratedMovies } from '@/utils/movieClient';
import prisma from '@/utils/prisma';
import { getServerSession } from 'next-auth';
import React from 'react';
import { Movie } from '../../movies/(search)/SearchResults';

export type ProfilePageProps = {
  params: {
    locale: LocaleTypes;
  };
};

const ProfilePage = async ({ params: { locale } }: ProfilePageProps) => {
  const { user: userSession } = await getServerSession();

  const { movieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      movieLikes: true,
    },
  });

  const movies = await getHydratedMovies(movieLikes.map((movie: Movie) => movie.id));

  return (
    <div className="px-12 pb-0 pt-3">
      <div className="mt-8 flex justify-between">
        <h1 className="m-0 text-2xl font-bold text-secondary">Liste de films aimés</h1>
        <LogoutButton />
      </div>

      <div className="mt-8 flex flex-wrap justify-start gap-8">
        {movies.map((movie) => (
          <React.Fragment key={movie.id}>
            <MediaCard media={movie} locale={locale} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
