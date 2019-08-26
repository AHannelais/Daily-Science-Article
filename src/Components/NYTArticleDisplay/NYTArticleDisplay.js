import React from "react";
import "./NYTArticleDisplay.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 1300 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1300, min: 992 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 992, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};
const ArticleWrapper = props => {
  return (
    <div
      className="wrapper"
      onClick={() => {
        window.open(props.result.web_url);
      }}
    >
      <div className="content">
        <h3>{props.result.headline.main}</h3>
        <p>{props.result.lead_paragraph}</p>
      </div>
      <p className="topic">{props.result.section_name}</p>
      <img
        src={`https://static01.nyt.com/${props.result.multimedia[0].url}`}
        style={{ width: "80%", position: "absolute", bottom: "0" }}
        alt=""
      />
    </div>
  );
};

const DisplayArticle = props => {
  if (props.results) {
    console.log(props.results[0].multimedia[0].url);
    return (
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {props.results.map(result => {
            return (
              <ArticleWrapper result={result} key={result.headline.main} />
            );
          })}
        </Carousel>
      </div>
    );
  }

  return (
    <div className="m-20">
      <h3>Articles Are Loading...</h3>
    </div>
  );
};

export default DisplayArticle;
