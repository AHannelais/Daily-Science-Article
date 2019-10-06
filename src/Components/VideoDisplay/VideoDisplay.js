import React from "react";
import { VideoWrapper } from "../Styles/styledComponents";
const VideoDisplay = video => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video.video);
  const videoSrc = `https://www.youtube.com/embed/${video.video.id.videoId}`;
  return (
    <VideoWrapper>
      <iframe className="embededvideo" title="youtube player" src={videoSrc} />
      <h3>{video.video.snippet.title}</h3>
      <div>
        <p>
          <span style={{ fontSize: "25px" }}>
            {video.video.snippet.description.slice(0, 1)}
          </span>
          {video.video.snippet.description.slice(1)}
        </p>
      </div>
    </VideoWrapper>
  );
};
export default VideoDisplay;
