import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'roUiJGu2cVNTbHgkpz3k12Bvl4DtMpK3';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleFetch = event => {
    event.preventDefault()
    const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.search}api-key=${NYT_API_KEY}`
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({
        reviews: json
    }))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFetch}>
          <input type="text" onChange={this.handleChange} name="searchTerm" />
          <input type="submit" />
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
