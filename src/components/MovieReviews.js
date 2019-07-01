// Code MovieReviews Here
import React, {Component} from 'react'

const MovieReviews = (props) =>

  <div className="review-list">
    {props.reviews.map((review) => <li className="review" ><strong>{review[1]}</strong> by {review[2]} (updated {review[3]})</li>)}
  </div>

export default MovieReviews
