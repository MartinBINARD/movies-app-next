'use client';
import { usePathname, useRouter } from 'next/navigation';

export const Form = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append('sort_by', form.get('sort'));
    searchParams.append('release_date.gte', form.get('fromDate'));
    searchParams.append('release_date.lte', form.get('toDate'));

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <form className="shadow-[0_2px_8px_rgba(0,0,0,0.1)]" onSubmit={handleSubmit}>
      <h2 className="m-0 border-b-2 border-gray-200 px-4 py-3 text-base text-black">Filtrer</h2>

      <div className="border-b-2 border-gray-200 px-4 pb-2 pt-0">
        <h3 className="mt-4 font-montserrat font-light">Date de sortie</h3>
        <div className="mt-4 flex items-center justify-between">
          <p className="m-0 mr-2 text-gray-500">Du</p>
          <input type="date" name="formDate" className="min-w-[200px] rounded-md border border-gray-200 p-2" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="m-0 mr-2 text-gray-500">au</p>
          <input
            type="date"
            name="toDate"
            className="min-w-[200px] rounded-md border border-gray-200 p-2"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </div>

      <div className="px-4 pb-2 pt-0">
        <h3 className="my-4 font-montserrat font-light">Trier par</h3>
        <select name="sort" className="mb-3 w-full border border-gray-200 px-1 py-2">
          <option value="popularity.desc">Popularité</option>
          <option value="vote_average.desc">Note</option>
          <option value="vote_count.desc">Nombre de note</option>
        </select>
      </div>

      <input
        type="submit"
        value="Rechercher"
        className="w-full cursor-pointer border-none bg-gray-100 p-2 transition-all duration-200 hover:bg-primary hover:text-white"
      />
    </form>
  );
};
