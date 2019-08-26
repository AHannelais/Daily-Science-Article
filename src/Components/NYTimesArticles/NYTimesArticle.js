import React from "react";
import axios from "axios";
import NYTimes from "../../Apis/NYTimes";
import DisplayArticle from "../NYTArticleDisplay/NYTArticleDisplay";

class NYTimesArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: null };
    this.topics = [
      "Science",
      "Energy",
      "Environment",
      "Personal Tech",
      "Technology",
      "Education",
    ];
  }

  fetchArticles = async topics => {
    const url = NYTimes(topics);
    const response = await axios.get(url);
    this.setState({ results: response.data.response.docs });
  };

  componentDidMount() {
    this.fetchArticles(this.topics);
  }
  render() {
    console.log(new Date());
    return (
      <div>
        <div className="text-center m-5">
          <h2>New York Times Articles</h2>
          <DisplayArticle results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default NYTimesArticles;
