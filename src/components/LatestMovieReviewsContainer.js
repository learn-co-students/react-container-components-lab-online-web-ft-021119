import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JDVlLCcAbGBqGMGxK0nGEQS2QSs5fdcs';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMoviewReviewsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews : []
        }
    }

    componentDidMount(){
        fetch(URL)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    reviews: myJson.results.slice(0, 3)
                })
            });
    }

    // generateReviews = () => {
    //     return this.state.reviews.map((review) => <MovieReviews review={review}/>)
    // }

    render(){
        return(
            <div className="latest-movie-reviews">
                {/* {this.generateReviews()} */}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMoviewReviewsContainer