"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PopularPage = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>([]);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      );
      const result = await response.json();
      setTopAnime(result);
      setLastPage(result.pagination.last_visible_page);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [page]);

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page === lastPage) return;
    setPage(page + 1);
  };

  return (
    <section className="px-5 lg:px-20 container my-10 mx-auto">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-4xl text-center">Anime Populer</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
            {topAnime.data?.map((anime: any) => (
              <div key={anime.mal_id}>
                <Image
                  src={anime.images.webp.large_image_url}
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
                  <p className="text-sm text-neutral-300">
                    {anime.year || "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto">
          {page > 1 && (
            <button onClick={handlePreviousPage} className="me-2">
              Sebelumnya
            </button>
          )}
          <span>{`Halaman ${page || 1} dari ${lastPage || 1}`}</span>
          {page < lastPage && (
            <button onClick={handleNextPage} className="ms-2">
              Berikutnya
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularPage;
