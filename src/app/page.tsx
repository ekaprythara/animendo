import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const topAnimeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const topAnime = await topAnimeResponse.json();

  const recommendedAnimeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime`
  );
  const recommendedAnime = await recommendedAnimeResponse.json();

  return (
    <section className="px-5 lg:px-20 container my-10 mx-auto">
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex justify-between items-center me-1">
            <h1 className="text-4xl">Anime Populer</h1>
            <a href="/popular" className="hover:text-green-400">
              Lihat selengkapnya
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
            {topAnime.data.map((anime) => (
              <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
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
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl">Rekomendasi Anime</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
            {recommendedAnime.data.map((anime) =>
              anime.entry.map((entry) => (
                <div key={entry.mal_id}>
                  <Image
                    src={entry.images.webp.large_image_url}
                    alt="Anime"
                    priority
                    width={250}
                    height={320}
                    className="bg-white hover:bg-green-400 duration-200 p-1 rounded-md h-[85%] w-full"
                  />
                  <div className="px-1 mt-1">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-sm">
                      {entry.title}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
