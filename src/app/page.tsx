import { Genres } from '@/components/genres/Genres';
import { Popular } from '@/components/Popular/Popular';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col px-12 pb-0 pt-2.5 font-montserrat">
      <Popular />
      <Genres />
    </div>
  );
}
