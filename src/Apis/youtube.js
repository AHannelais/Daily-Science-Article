import axios from 'axios'
const KEY = 'AIzaSyAKQ3WZ1F1jA7JEfqIdmDUTVQu9Frdd7c4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 1,
    key: KEY
  }
})
