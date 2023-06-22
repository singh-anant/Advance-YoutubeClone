import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/panelSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../helper";
import AutoLinkText from "react-autolink-text2";
import CommentsContainer from "./CommentsContainer";
// import CommentsContainer from "./CommentsContainer";

const WatchContainer = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState("");

  const dispatch = useDispatch();
  const getVideoInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + searchParams.get("v"));
    const json = await data.json();
    setVideoInfo(json?.items[0]);
    console.log(json?.items[0]);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mx-5 py-2 px-3">
        <h1 className="font-bold text-3xl py-3">
          {videoInfo?.snippet?.localized?.title}
        </h1>
        <h2 className="font-semibold font-mono text-2xl py-2">
          {videoInfo?.snippet?.channelTitle}
        </h2>
        <div className="w-100 bg-gray-200 rounded-lg px-3 py-3">
          <h3 className="font-bold text-xl py-2">Description:</h3>
          <AutoLinkText
            text={videoInfo?.snippet?.localized?.description}
            linkProps={{ className: "text-blue-500 underline" }}
          />
        </div>
      </div>
      <div>
        <CommentsContainer videoID={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchContainer;
