import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import ErrorBoundary from './ErrorBoundary'

const NYT_API_KEY = 'QYqy6xROwG4cT5SjyGQL25MhQGSNqWY3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

    render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  }

export default LatestMovieReviewsContainer
