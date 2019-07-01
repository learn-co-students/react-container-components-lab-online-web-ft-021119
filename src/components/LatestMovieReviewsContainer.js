import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  debug = (array) => {
    debugger
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=YkdUG3G57X1a7SZ0tuUypxco3ZlQHAWM')
    .then(response => response.json())
    .then(data => data.results)
    .then(reviews => reviews.map((review) => [review.display_title, review.headline, review.byline, review.date_updated]))
    .then(reviewArray => this.setState({reviews: reviewArray}))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
