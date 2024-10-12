import Image from "next/image";
import Link from "next/link";

interface MediaCardProps {
  mediaId: number
}

export const MediaCard = ({ mediaId }: MediaCardProps) => {
  return (
    <div className="font-montserrat min-w-64 rounded-lg shadow-sm shadow-gray-200">
      <Link href={`/movies/${mediaId}`}>
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src="https://image.tmdb.org/t/p/w500/hYQs5RPHiWctoYqvI8baHiIqdd8.jpg"
            alt="media title"
            fill
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="text-sm p-3">
          <h2 className=" font-bold text-xl mb-2">Creed III</h2>
          <p>Le 01/03/2023</p>
        </div>
      </Link>
  </div>
  )
}
