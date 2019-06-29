// Code MovieReviews Here
import React from 'react'

function myDebug (reviews) {
   console.log(reviews)
   if (reviews) return reviews.results.map(review => 
      <div className="review">
         <p>{review.display_title}</p>
      </div>
      )
}

const MovieReviews = ({reviews}) => {
   return <div className="review-list">
      {myDebug(reviews)}
   </div>
}

export default MovieReviews