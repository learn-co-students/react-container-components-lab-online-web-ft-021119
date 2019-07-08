// Code MovieReviews Here
import React from  'react'

const MovieReviews = props => {
	return(
<ul className="review-list">

 {props.reviews.map(r => {
 	

return <li className="review" >{r.title_detail}</li>

 })}
 </ul>
 )
}
 

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews