import { Genres } from "@/components/genres/Genres";
import { Popular } from "@/components/Popular/Popular";

const TIME_ELAPSED_IN_ONE_DAY = 86400;

export const revalidate = TIME_ELAPSED_IN_ONE_DAY;

export default function Home() {
  return (
    <div className="font-montserrat flex flex-col pt-2.5 px-12 pb-0 min-h-screen">
      <Popular />
      <Genres />
    </div>
  );
}
