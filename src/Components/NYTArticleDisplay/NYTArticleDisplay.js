import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ArticleWrapper,
  Topic,
  Topic2,
  Date,
} from "../Styles/styledComponents";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 1300 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1300, min: 992 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 500 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const Article = props => {
  return (
    <ArticleWrapper
      onClick={() => {
        window.open(props.result.web_url);
      }}
    >
      <img
        src={
          props.result.multimedia[0]
            ? `https://static01.nyt.com/${props.result.multimedia[0].url} `
            : ""
        }
        alt=""
      />
      <Topic2>{props.result.section_name}</Topic2>
      <h3>{props.result.headline.main}</h3>
      <div>
        <p>
          <span style={{ fontSize: "25px" }}>
            {props.result.lead_paragraph.slice(0, 1)}
          </span>
          {props.result.lead_paragraph.slice(1)}
        </p>
        <Topic>{props.result.section_name}</Topic>
        <Date>{props.result.pub_date.slice(0, 10)}</Date>
      </div>
    </ArticleWrapper>
  );
};

const DisplayArticle = props => {
  if (props.results) {
    return (
      <div style={{ borderTop: "2px solid #52658f" }}>
        <Carousel
          responsive={responsive}
          infinite
          //autoPlay
          // autoPlaySpeed={5000}
        >
          {props.results.map(result => {
            return <Article result={result} key={result.headline.main} />;
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
/*  <Wrapper
      onClick={() => {
        window.open(props.result.web_url)
      }}
    >
      <h3>{props.result.headline.main}</h3>
      <p>{props.result.lead_paragraph}</p>

      <Topic>{props.result.section_name}</Topic>
      <img
        // src={`https://static01.nyt.com/${props.result.multimedia[0].url}`}
        alt=''
      />
    </Wrapper> */
