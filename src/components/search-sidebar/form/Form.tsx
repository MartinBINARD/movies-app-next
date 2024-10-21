"use client";
import { usePathname, useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort"));
    searchParams.append("release_date.gte", form.get("fromDate"));
    searchParams.append("release_date.lte", form.get("toDate"));

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <form className="shadow-[0_2px_8px_rgba(0,0,0,0.1)]" onSubmit={handleSubmit}>
      <h2 className="text-black text-base px-4 py-3 m-0 border-b-2 border-gray-200">Filtrer</h2>

      <div className="border-b-2 border-gray-200 pt-0 px-4 pb-2">
        <h3 className="font-montserrat font-light mt-4">Date de sortie</h3>
        <div className="flex items-center justify-between mt-4 ">
          <p className="m-0 mr-2 text-gray-500">Du</p>
          <input type="date" name="formDate" className="rounded-md border border-gray-200 p-2 min-w-[200px]" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="m-0 mr-2 text-gray-500">au</p>
          <input type="date" name="toDate" className="rounded-md border border-gray-200 p-2 min-w-[200px]" defaultValue={new Date().toISOString().substring(0, 10)} />
        </div>
      </div>

      <div className="pt-0 px-4 pb-2">
        <h3 className="font-montserrat font-light my-4">Trier par</h3>
        <select name="sort" className="w-full border border-gray-200 py-2 px-1 mb-3" >
          <option value="popularity.desc">Popularité</option>
          <option value="vote_average.desc">Note</option>
          <option value="vote_count.desc">Nombre de note</option>
        </select>
      </div>
      
      <input type="submit" value="Rechercher" className="w-full cursor-pointer border-none bg-gray-100 p-2 transition-all duration-200 hover:bg-primary hover:text-white"/>
    </form>
  );
}