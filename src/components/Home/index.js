import {Component} from 'react'
import MovieCard from '../MovieCard'
import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {movieList: []}

  componentDidMount() {
    this.getMoviesDetails()
  }

  getMoviesDetails = async () => {
    const url = 'https://hoblist.com/api/movieList'
    const parameters = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting',
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(parameters),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.result)

    const apiResults = data.result.map(eachMovie => ({
      // eslint-disable-next-line no-underscore-dangle
      id: eachMovie._id,
      title: eachMovie.title,
      genre: eachMovie.genre,
      director: eachMovie.director,
      stars: eachMovie.stars,
      voting: eachMovie.voting,
      voted: eachMovie.voted,
      runtime: eachMovie.runtime,
      releaseDate: eachMovie.releaseDate,
      poster: eachMovie.poster,
      pageViews: eachMovie.pageViews,
      totalVoted: eachMovie.totalVoted,
    }))
    this.setState({movieList: apiResults})
  }

  render() {
    const {movieList} = this.state
    return (
      <div>
        <Header />
        <ul className="movies-card-list">
          {movieList.map(eachMovie => (
            <MovieCard key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
