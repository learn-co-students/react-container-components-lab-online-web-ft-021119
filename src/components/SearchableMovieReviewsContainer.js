import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`+`api-key=YkdUG3G57X1a7SZ0tuUypxco3ZlQHAWM`)
      .then(response => response.json())
      .then(data => data.results)
      .then(reviews => reviews.map((review) => [review.display_title, review.headline, review.byline, review.date_updated]))
      .then(reviewArray => this.setState({reviews: reviewArray}))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search for Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.searchTerm}/>
          <button type="submit">Search</button>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
