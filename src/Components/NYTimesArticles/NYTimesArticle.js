import React from "react";
import axios from "axios";
import NYTimes from "../../Apis/NYTimes";
import DisplayArticle from "../NYTArticleDisplay/NYTArticleDisplay";

class NYTimesArticles extends React.Component {
  state = { results: null, index1: 0, index2: 1 };

  ArticleSearch = async () => {
    const topic = "tech";
    const url = NYTimes(topic);
    console.log(url);
    const response = await axios.get(url);
    console.log("response", response);
    this.setState({
      results: response.data.response.docs.map(data => {
        return { ...data, topic: topic };
      }),
    });
  };

  componentDidMount() {
    this.ArticleSearch();
  }
  render() {
    return (
      <div>
        <div className="text-center m-5">
          <h2>New York Times Articles</h2>
        </div>
        <DisplayArticle results={this.state.results} />
      </div>
    );
  }
}

export default NYTimesArticles;
