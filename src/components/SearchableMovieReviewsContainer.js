import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// searchable interface allowing the user to enter a search term and then receive a
// list of reviews that match the search term(s).
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleResults(this.state.searchTerm)
  }

  handleResults = (search) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=QhW9OSMtZ9X4x0eOuNZwKJLvIo5Ncm02`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  generateResults = () => {
    if (this.state.searchTerm === ''){
      return null
    } else {
      return <MovieReviews reviews={this.state.reviews}/>
    }

  }

  render () {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search: <input id="search" name="search" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          <button type= "submit"> Submit </button>
        </form>
          <h3>Searachable Movies</h3>
          {this.generateResults()}
      </div>
    )

  }
}

export default SearchableMovieReviewsContainer;
