import styled from "styled-components";

export const ArticleWrapper = styled.div`
  width: 100%;
  background-color: #f7f5e6;
  transition: all 0.3s;
  position: relative;
  border-radius: 20px 0 0 20px;
  height: calc(21vw + 187px);
  margin-top: 20px;
  padding: 2%;
  border-right: 2px solid #52658f;

  @media screen and (max-width: 992px) {
    height: calc(30vw + 300px);
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
  h3 {
    border-top: 2px solid #52658f;
    position: absolute;
    bottom: 0;
    width: 60%;
    height: 15%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: unset;
    @media screen and (max-width: 600px) {
      position: relative;
      width: 100%;
    }
  }
  img {
    position: absolute;
    padding-bottom: 1%;
    max-height: 80%;
    max-width: 60%;
    min-height: 80%;
    min-width: 60%;
    height: 80%;
    width: auto;
    left: 2%;
    border-radius: 10px;
    @media screen and (max-width: 600px) {
      position: relative;
      max-width: 96%;
      width: 96%;
      height: auto;
    }
  }

  div {
    position: absolute;
    padding-top: 10%;
    padding-left: 2%;
    right: 2%;
    width: 35%;
    height: 100%;
    border-left: 2px solid #52658f;
    @media screen and (max-width: 600px) {
      position: relative;
      width: 100%;
    }
  }
`;
export const VideoWrapper = styled.div`
  width: 100%;
  background-color: #f7f5e6;
  transition: all 0.3s;
  position: relative;
  border-radius: 20px 0 0 20px;
  height: calc(21vw + 187px);
  margin-top: calc(3% + 20px);
  padding: 2%;
  border-right: 2px solid #52658f;
  @media screen and (max-width: 992px) {
    height: calc(30vw + 300px);
  }

  h3 {
    border-top: 2px solid #52658f;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 15%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: unset;
  }
  iframe {
    position: relative;
    width: 96%;
    height: 60%;
    left: 2%;
    border-radius: 10px;
    overflow: auto;
    @media screen and (max-width: 992px) {
      height: calc(40vw + 100px);
    }
  }

  div {
    border-top: 2px solid #52658f;
    position: relative;
    padding-top: 2%;
    padding-left: 2%;
    width: 100%;
    height: auto;
    background-color: #f7f5e6;
  }
`;
export const Topic2 = styled.p`
  position: absolute;
  z-index: 2;
  font-weight: bold;
  top: 10%;
  right: 7%;
  padding: 2%;
  background: #f7f9fb;
  border: 2px solid #333a56;
  border-radius: 2px;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
export const Topic = styled.p`
  position: absolute;
  z-index: 2;
  font-weight: bold;
  top: 2%;
  right: 10%;
  padding: 2%;
  background: #f7f9fb;
  border: 2px solid #333a56;
  color: #52658f;
  border-radius: 2px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Date = styled.p`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 10%;
  padding: 2%;
  font-style: italic;
  color: #52658f;
  text-decoration: underline;
  text-decoration-color: #333a56;
`;

export const Title = styled.div`
  position: relative;
  text-align: right;
  padding-right: 5%;
  margin-bottom: 5%;
`;
export const TitleH2 = styled.h2`
  text-align: center;
  margin-bottom: 2%;
`;
