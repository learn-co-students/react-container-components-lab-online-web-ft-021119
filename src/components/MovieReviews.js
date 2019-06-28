// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    // debugger
    return (
        
    <div className="review-list" >
        {reviews.map(review => { 
            return (
               <div className='review'> 
                Title: {review.display_title}
                <br/>
                Critic: {review.byline}
                <br/>
                <br/>
                </div> 
            )}
        )}
    </div>
                )
}

export default MovieReviews;