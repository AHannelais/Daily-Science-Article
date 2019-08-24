import React from "react";
import "./NYTArticleDisplay.css";
const DisplayArticle = props => {
  return (
    <div className="wrapper">
      <h3>{props.result.headline.main}</h3>
      <p>{props.result.lead_paragraph}</p>
    </div>
  );
};

export default DisplayArticle;

/*<div className="container-fluid border border-dark rounded m-2 article">
          <h3>{this.state.result.headline.main}</h3>
          <p className="text-justify"> {this.state.result.lead_paragraph}</p>
          <input
            type="button"
            className="btn-primary m-2 rounded mybutton"
            value="See More"
            onClick={this.onButtonClick}
          />
        </div> */
