import React from "react";
import axios from "axios";
import NYTimes from "../../Apis/NYTimes";
import "./NYTimesArticles.css";
import ArticleDisplay from "../NYTArticleDisplay/NYTArticleDisplay";

class NYTimesArticles extends React.Component {
  state = { results: null, index1: 0, index2: 1 };

  ArticleSearch = async () => {
    const url = NYTimes("science");
    console.log(url);
    const response = await axios.get(url);
    console.log("response", response);
    this.setState({ results: response.data.response.docs.splice(5) });
  };
  ArticleCarroussel = () => {
    if (this.state.results) {
      return (
        <div className="carroussel-wrapper">
          <ArticleDisplay
            result={this.state.results[this.state.index1]}
            key={this.state.index1}
          />
          <ArticleDisplay
            result={this.state.results[this.state.index2]}
            key={this.state.index2}
          />
          ;
        </div>
      );
    }

    return (
      <div className="m-20">
        <h3>Articles Are Loading...</h3>
      </div>
    );
  };
  nextIndex = () => {
    if (this.state.index1 !== 0) {
      this.setState({ index1: this.state.index1 - 1 });
    } else {
      this.setState({ index1: this.state.results.length - 1 });
    }
    if (this.state.index2 !== 0) {
      this.setState({ index2: this.state.index2 - 1 });
    } else {
      this.setState({ index2: this.state.results.length - 1 });
    }
  };
  prevIndex = () => {
    if (this.state.index1 !== this.state.results.length - 1) {
      this.setState({ index1: this.state.index1 + 1 });
    } else {
      this.setState({ index1: 0 });
    }
    if (this.state.index2 !== this.state.results.length - 1) {
      this.setState({ index2: this.state.index2 + 1 });
    } else {
      this.setState({ index2: 0 });
    }
  };
  componentDidMount() {
    this.ArticleSearch();
  }
  render() {
    return (
      <div>
        <div className="text-center m-5">
          <h2>New York Times Articles</h2>
          <button className="btn btn-info m-2" onClick={this.prevIndex}>
            Prev
          </button>
          <button className="btn btn-info" onClick={this.nextIndex}>
            Next
          </button>
        </div>
        <div>{this.ArticleCarroussel()}</div>
      </div>
    );
  }
}

export default NYTimesArticles;
