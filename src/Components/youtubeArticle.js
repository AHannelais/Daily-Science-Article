import './youtubeArticle.css'
import React from 'react'
import youtube from '../Apis/youtube'
import VideoDisplay from './VideoDisplay'
let count = 0
class VideoArticle extends React.Component {
  state = { video: null }
  onTermSubmit = async () => {
    console.log(++count)
    let lastday = new Date(new Date() - 86400000) // = 24h

    const response = await youtube.get('/search', {
      params: {
        q: 'science and tech',
        publishedAfter: lastday,
        relevanceLanguage: 'en'
      }
    })

    this.setState({ video: response.data.items[0] })
  }

  componentDidMount () {
    this.onTermSubmit()
  }
  render () {
    if (this.state.video != null) {
      return (
        <div className='border border-dark rounded article m-1 p-2 loadparent'>
          <VideoDisplay video={this.state.video} />
        </div>
      )
    }
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}
export default VideoArticle
// <VideoDisplay video={this.state.video} />
