const GOOGLE_API_KEY = "AIzaSyAhhxO-Kjso21FkFg8xZA8MuY93moGC9OA";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyAhhxO-Kjso21FkFg8xZA8MuY93moGC9OA&id=";

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAhhxO-Kjso21FkFg8xZA8MuY93moGC9OA&textFormat=plainText&part=snippet&maxResults=50&videoId=";
