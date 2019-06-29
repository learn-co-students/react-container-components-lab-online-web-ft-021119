import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AVq25lkdxDx2uJ9WT2oTlt8ruyMbEhbR';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component{

	state = {
		searchTerm: "",
		reviews: []
	}

	handleSubmit = (event) => {
		event.preventDefault();

	   fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
	};

	handleChange = (event) => {
		this.setState({searchTerm: event.target.value});

	}

	render(){
		return(
			<div className="searchable-movie-reviews">
			<form onSubmit={this.handleSubmit}>
			<h2>Search Movie Reviews</h2>
			<input type="text" onChange={this.handleChange}/>
			<button type="submit">Submit</button>
			</form>
			<MovieReviews reviews={this.state.reviews} />
			</div>
			)
	}
}



export default SearchableMovieReviewsContainer;
