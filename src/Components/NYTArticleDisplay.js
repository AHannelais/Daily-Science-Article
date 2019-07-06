import React from 'react'
import './youtubeArticle.css'
class DisplayArticle extends React.Component {
  state = { result: this.props.result }

  onButtonClick = () => {
    window.open(this.state.result.web_url)
  }
  render () {
    console.log(this.state.result)
    return (
      <div>
        <div className='container-fluid border border-dark rounded m-2 article'>
          <h3>{this.state.result.headline.main}</h3>
          <p className='text-justify'> {this.state.result.lead_paragraph}</p>
          <input
            type='button'
            className='btn-primary m-2 rounded mybutton'
            value='See More'
            onClick={this.onButtonClick}
          />
        </div>
      </div>
    )
  }
}
export default DisplayArticle
