import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PD7AfkYnYrz8HoXlwvkzsl8WA9CGEkeT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'


// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends React.Component {

  state = {
    searchTerm: '',
    reviews: []
   }

   onInputSubmit = (e) => {
     e.preventDefault()
    this.state.searchTerm
   }

   onInputChange = (e) => {
     this.setState({
       searchTerm: e.target.value
     })
   }

   componentDidMount() {
     fetch(`${URL}query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
       .then(resp => resp.json())
       .then(reviews => {
         this.setState({
           reviews: reviews.results });
       })
   }



  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onInputSubmit} >
          <input type="text"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}




 export default SearchableMovieReviewsContainer
