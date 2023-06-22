import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 h-80 m-2 w-72 shadow-md">
      <img
        className="w-fit h-fit"
        src={thumbnails?.maxres?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold text-xl py-2">{title}</li>
        <li className="font-semibold text-lg">{channelTitle}</li>
        <li className="text-base">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
