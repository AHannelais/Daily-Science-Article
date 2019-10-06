const KEY = "1pSgiv38Y9XD40ucGJv7voQ9AkfYqcbr";

const setArticleDate = () => {
  const lastday = new Date(new Date() - 210000000);
  const lastdayDay =
    lastday.getDate() >= 10 ? lastday.getDate() : "0" + lastday.getDate();
  const lastdayMonth =
    lastday.getMonth() + 1 >= 10
      ? lastday.getMonth() + 1
      : "0" + (lastday.getMonth() + 1);
  const lastdayYear = lastday.getFullYear();
  const articleDate = `${lastdayYear}${lastdayMonth}${lastdayDay}`;
  return articleDate;
};
const getArticleUrl = topics => {
  let string = ``;
  topics.forEach(topic => {
    string = `${string}"${topic}"`;
  });
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(${string})&begin_date=${setArticleDate()}&sort=relevance&api-key=${KEY}`;
  return url;
};

export default getArticleUrl;
