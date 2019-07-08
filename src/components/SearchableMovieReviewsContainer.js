import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ERK6yzGBolQ1YK9JhkAr7PQiil9w6a3e';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>';
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
constructor(props){
super(props)
this.state={
	reviews: [],
	searchTerm: ""


}

}

  fetchData = (query) => {

	fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}`)
	.then(res => res.json)
	.then(data => this.setState({reviews: data.results}))
}
handleChange = e => {
this.setState({
	searchTerm: e.target.value
})


}
render(){

	return(

		<div className="searchable-movie-reviews">
		<form onSubmit={this.fetchData}>
		 <input id="search-term" type="text" onChange={this.handleChange}></input>
		 <input type="submit" value="Search"></input>
		
		</form>
		<MovieReviews reviews={this.state.reviews}/>
		</div>


		)
}


}


export default 	SearchableMovieReviewsContainer