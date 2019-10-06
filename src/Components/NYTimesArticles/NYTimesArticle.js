import React from "react";
import axios from "axios";
import NYTimes from "../../Apis/NYTimes";
import DisplayArticle from "../NYTArticleDisplay/NYTArticleDisplay";
class NYTimesArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: null, fetched: false };
    this.topics = [
      "Science",
      "Energy",
      "Environment",
      "Personal Tech",
      "Technology",
      "Education",
    ];
  }

  componentDidMount = async () => {
    const url = NYTimes(this.topics);
    const response = await axios.get(url);
    this.setState({ results: response.data.response.docs, fetched: true });
  };
  renderResults = () => {
    if (this.state.results && this.state.fetched) {
      console.log(this.state.results);
      return <DisplayArticle results={this.state.results} />;
    } else {
      return (
        <div>
          <div>Articles Are Loading ...</div>
        </div>
      );
    }
  };
  render() {
    return <>{this.renderResults()}</>;
  }
}

export default NYTimesArticles;
