import React from "react";
import "./youtubeArticle.css";
//import VideoArticle from "./youtubeArticle";
import NYTimesArticle from "./NYTimesArticles/NYTimesArticle";
class App extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="container m-5">
          <h1>My Daily Science Articles</h1>
          <p>What will you learn today ?</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg">
              <div>
                <NYTimesArticle />
              </div>
            </div>
            <div className="col-lg-5  container-fluid m-2 loadparent">
              <div className="videocontainer">
                <h2 className="text-center">Daily Video</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
