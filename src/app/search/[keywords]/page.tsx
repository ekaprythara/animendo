import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const { keywords } = params;
  const decodedKeywords = decodeURI(keywords);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeywords}`
  );
  const result = await response.json();

  return (
    <section className="px-5 lg:px-20 container my-10 mx-auto">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl">
          Menampilkan hasil dari &quot;{decodedKeywords + "..."}&quot;
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {result.data.map((anime) => (
            <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <Image
                src={anime.images.webp.image_url}
                alt="Anime"
                priority
                width={250}
                height={320}
                className="bg-white hover:bg-green-400 duration-200 p-1 rounded-md h-[85%] w-full"
              />
              <div className="px-1 mt-1">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-sm">
                  {anime.title}
                </p>
                <p className="text-sm text-neutral-300">{anime.year || "-"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
