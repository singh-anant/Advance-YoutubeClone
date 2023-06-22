import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../helper";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { ShimmerPostList } from "react-shimmer-effects";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  }

  // Early Return
  if (!videos) return null;

  return videos.length === 0 ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={4} gap={20} />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
