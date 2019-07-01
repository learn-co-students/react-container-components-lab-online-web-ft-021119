import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PD7AfkYnYrz8HoXlwvkzsl8WA9CGEkeT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here






class LatestMovieReviewsContainer extends React.Component {
  state = {reviews: []}

  componentDidMount() {
    fetch(`${URL}`)
      .then(resp => resp.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results });
      })
  }


  render () {
  return (
    <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
    </div>
  )
  }
}



export default LatestMovieReviewsContainer
