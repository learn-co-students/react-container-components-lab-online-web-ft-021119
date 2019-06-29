import React from 'react'



const MovieReviews = (props) =>{
return(
<div className="review-list">

{props.reviews.map(mov=> <div className="review" key={mov.display_title}><p><a href={mov.link.url}>{mov.display_title}</a></p><p>{mov.summary_short}</p></div>)}
</div>



)}


export default MovieReviews;
