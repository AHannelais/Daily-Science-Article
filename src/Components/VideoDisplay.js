import React from 'react'

const VideoDisplay = video => {
  if (!video) {
    return <div>Loading...</div>
  }
  console.log(video.video)
  const videoSrc = `https://www.youtube.com/embed/${video.video.id.videoId}`
  return (
    <div className='videodisplay'>
      <h3>{video.video.snippet.title}</h3>
      <div className='text-center  embed-responsive embed-responsive-16by9'>
        <iframe
          className='embededvideo'
          title='youtube player'
          src={videoSrc}
        />
      </div>
      <p>{video.video.snippet.description}</p>
    </div>
  )
}
export default VideoDisplay
