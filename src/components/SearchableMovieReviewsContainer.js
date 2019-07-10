import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const NYT_API_KEY = 'EUNmC0UZCDuoKS4VAJgHT195WEPBJ6OD';
    const searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}` + `api-key=${NYT_API_KEY}`;

    fetch(searchURL).then(resp => resp.json()).then(reviews => this.setState({ reviews }))
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="searchTerm"/>
          <input type="submit"/>
        </form>

        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
