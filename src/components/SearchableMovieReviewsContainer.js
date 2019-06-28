import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SbO8p7hYpezRGdKZ80UxTqTUpXpAzNq3';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: '', 
    }

    

    inputForm = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
        
    }

    submitSearch = (event) => {
        event.preventDefault(); 
        // debugger
        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        // .then(json => console.log(json))
        .then(json => this.setState(
            {reviews: json.results}
        ))
    }


    render () {
        // debugger
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitSearch}>
                    <strong>Search for a review:</strong>
                    <input type="text" name="message" id="message" onChange={event =>this.inputForm(event)} value={this.state.searchTerm} />
                    <button type="submit" >Search</button>
                    </form>
              
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}