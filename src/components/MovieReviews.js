// Code MovieReviews Here
import React from 'react'



// const MovieReviews = (props) => {
//   debugger
//
//   return (
//     <div className="review">
//       <div className="review-list">
//           {props.reviews.map (review =>
//               <li>{review.headline}</li>)
//             }
//       </div>
//     </div>
//   )
//
// }
const Review = ({headline}) => {
   return ( <div className="review">{headline}</div> )
}

const MovieReviews = ({reviews}) => {
   return <div className="review-list">
      {reviews.map(Review)}
   </div>
}


export default MovieReviews
