import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {
    genre,
    director,
    stars,
    title,
    poster,
    pageViews,
    voting,
    totalVoted,
  } = movieDetails

  return (
    <li className="movie-card">
      <div className="movie-card-inner">
        <div className="votes-container">
          <button type="button" className="up-vote-button">
            <img
              src="https://static.thenounproject.com/png/341245-200.png"
              alt="up vote"
              className="vote-img"
            />
          </button>
          <p className="votes">{voting}</p>
          <button type="button" className="up-vote-button">
            <img
              src="https://static-00.iconduck.com/assets.00/downvote-icon-512x282-jzteu88x.png"
              alt="down vote"
              className="down-vote-img"
            />
          </button>
          <p>Votes</p>
        </div>
        <img src={poster} alt={title} className="movie-poster" />
        <div className="movie-details-container">
          <p className="movie-title">{title}</p>
          <p className="movie-details">Genre: {genre}</p>
          <p className="movie-details">Director: {director}</p>
          <p className="movie-details">Starring: {stars}</p>
          <p className="movie-details">
            {pageViews} views | voted by {totalVoted} people
          </p>
        </div>
      </div>
      <button className="watch-trailer-button" type="button">
        Watch Trailer
      </button>
    </li>
  )
}

export default MovieCard
