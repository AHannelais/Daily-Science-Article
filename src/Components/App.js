import React from "react";
import VideoArticle from "./YoutubeArticle/youtubeArticle";
import { Title, TitleH2 } from "./Styles/styledComponents";
import NYTimesArticle from "./NYTimesArticles/NYTimesArticle";
class App extends React.Component {
  render() {
    return (
      <>
        <Title>
          <h1>My Daily Science Articles</h1>
          <h4 style={{ color: "#52658f" }}>What will you learn today ?</h4>
        </Title>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <TitleH2>New York Times Articles</TitleH2>
              <NYTimesArticle />
            </div>
            <div className="col-lg">
              <TitleH2>Daily Video</TitleH2>
              <VideoArticle />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
