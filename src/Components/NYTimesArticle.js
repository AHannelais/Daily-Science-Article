import React from 'react'
import axios from 'axios'
import NYTimes from '../Apis/NYTimes'
import ArticleDisplay from './NYTArticleDisplay'

class NYTimesArticle extends React.Component {
  state = { results: null }

  ArticleSearch = async () => {
    const url = NYTimes()
    console.log(url)
    const response = await axios.get(url)
    console.log('response', response)
    this.setState({ results: response.data.response.docs.splice(7) })
  }
  ArticleList = () => {
    if (this.state.results) {
      const renderedList = this.state.results.map(res => {
        return <ArticleDisplay result={res} key={res._id} />
      })
      return <div className='ui relaxed divided list'>{renderedList}</div>
    }
    return (
      <div className='m-20'>
        <h3>Articles Are Loading...</h3>
      </div>
    )
  }

  componentDidMount () {
    this.ArticleSearch()
  }
  render () {
    return (
      <div>
        <div className='text-center m-5'>
          <h2>New York Times Articles</h2>
        </div>
        <div>{this.ArticleList()}</div>
      </div>
    )
  }
}

export default NYTimesArticle
