import React from "react";

const CommentCard = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, likeCount, textDisplay } =
    comment?.snippet?.topLevelComment?.snippet;

  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 mb-4">
      <div className="flex items-start">
        {authorProfileImageUrl === undefined ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            className="w-12 h-12 rounded-full mr-4"
          />
        ) : (
          <img
            src={authorProfileImageUrl}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}

        <div>
          <h2 className="text-lg font-semibold">{authorDisplayName}</h2>

          <p className="text-gray-800">{textDisplay}</p>
          <div className="flex items-center mt-2">
            <span className="text-gray-600 mr-2">{likeCount} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
