import { Genres } from "@/components/genres/Genres";
import { Popular } from "@/components/Popular/Popular";

export default function Home() {
  return (
    <div className="font-montserrat flex flex-col pt-2.5 px-12 pb-0 min-h-screen">
      <Popular />
      <Genres />
    </div>
  );
}
