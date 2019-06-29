// Code MovieReviews Here
import React from 'react'

const Review = ({headline}) => {
   return ( <div className="review">{headline}</div> )
}

const MovieReviews = ({reviews}) => {
   return <div className="review-list">
      {reviews.map(Review)}
   </div>
}

export default MovieReviews