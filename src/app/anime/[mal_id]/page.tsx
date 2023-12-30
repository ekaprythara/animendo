import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

const Anime = async ({ params }) => {
  const { mal_id } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${mal_id}`
  );
  const result = await response.json();

  return (
    <div>
      {result.data.title}
      <div>
        <VideoPlayer youtubeId={result.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Anime;
