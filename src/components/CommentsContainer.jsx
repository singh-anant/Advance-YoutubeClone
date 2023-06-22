import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../helper";
import CommentCard from "./CommentCard";
import { ShimmerCategoryList } from "react-shimmer-effects";

const CommentsContainer = ({ videoID }) => {
  const [comments, setComments] = useState();
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + videoID);
    const json = await data.json();
    setComments(json?.items);
  };

  // Early Return
  if (!comments) return null;
  return comments.length === 0 ? (
    <ShimmerCategoryList title items={6} categoryStyle="STYLE_SEVEN" />
  ) : (
    <div>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment?.id} />
      ))}
    </div>
  );
};

export default CommentsContainer;
