// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  return <div className="review-list">
     {reviews.map(review => <div className="review">{review.summary_short}</div>)}
  </div>
}

export default MovieReviews
