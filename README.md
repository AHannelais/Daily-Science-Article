

In the project directory, you can run:

(Make sure you have Node.js installed here is a link : https://nodejs.org/en/)
 `npm intall`
 `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `Key Isssues : `

if the video isn't loading it may means the key for Youtube api has been used too often.
Then you should get your onw key and replace it in the daily/src/apis/youtube.js file.

### `How it Works `

It picks 3 relevant articles about Science in from the New York times api and 1 Video from Youtube api.
It actually searches only for articles and videos published in the last 24h.
Then its shows the headline and first paragrapher of the articles and add link to the complete article.
The video is simply embeded and you can see it's title and description.


### `What I learned `
This was my very first app from scratch so i had to apply everthing i learn aubout React library ( mostly Components and JSX ).
I learned how to use apis by feching them with axios and how to select the parameters i wanted to use.
I had to get used to the date sytem in javascript to create the date 24h before the search.
A little bit of design, it was my  first time using Bootstrap ( CSS Framework )  and my first responsive app too.
