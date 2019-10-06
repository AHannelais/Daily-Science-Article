import React from "react";
import youtube from "../../Apis/youtube";
import VideoDisplay from "../VideoDisplay/VideoDisplay";
class VideoArticle extends React.Component {
  state = { video: null };
  onTermSubmit = async () => {
    let lastday = new Date(new Date() - 86400000); // = 24h

    const response = await youtube.get("/search", {
      params: {
        q: "science and tech",
        publishedAfter: lastday,
        relevanceLanguage: "en",
      },
    });

    this.setState({ video: response.data.items[0] });
  };

  componentDidMount() {
    this.onTermSubmit();
  }
  render() {
    if (this.state.video != null) {
      return (
        <div>
          <VideoDisplay video={this.state.video} />
        </div>
      );
    }
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
export default VideoArticle;
// <VideoDisplay video={this.state.video} />
