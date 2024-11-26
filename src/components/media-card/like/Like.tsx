'use client';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, useSession } from 'next-auth/react';

export type LikeProps = {
  mediaId: number;
};

export const Like = ({ mediaId }: LikeProps) => {
  const { data: session } = useSession();

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!session) {
      signIn();
    }

    fetch(`/api/like/${mediaId}`, {
      method: 'POST',
    });
  };
  return (
    <div onClick={handleLikeClick} className="absolute right-2 top-2 z-10 text-2xl text-secondary transition-colors hover:text-primary">
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};
