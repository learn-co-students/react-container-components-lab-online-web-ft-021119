// Code MovieReviews Here
import React from 'react'



const MovieReviews = (props) => {

  return (
      <div className="review-list">
          {props.reviews.map ((review, index) =>
              <li key={index} className="review"> {review.display_title}</li>)
            }
      </div>

  )

}


export default MovieReviews
