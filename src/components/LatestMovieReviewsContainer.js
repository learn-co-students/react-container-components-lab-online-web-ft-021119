import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {


   constructor(props) {
      super(props)
   
      this.state = {
         reviews: [{display_title: ""}]
      }
   }

   componentWillMount() {
      const NYT_API_KEY = 'EUNmC0UZCDuoKS4VAJgHT195WEPBJ6OD';
      const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
         + `api-key=${NYT_API_KEY}`;
      fetch(URL)
         .then(resp => resp.json())
         .then(reviews => {
            this.setState({reviews: reviews})
         })
   }
   
   render() {
      return (
         <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
         </div>
      )
   }
}

