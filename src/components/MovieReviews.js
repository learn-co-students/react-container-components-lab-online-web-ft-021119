// Code MovieReviews Here


import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map((review,idx) => <li key={idx} className="review">{review.display_title}: {review.summary_short}</li>)}
    </div>
  )
}

export default MovieReviews
