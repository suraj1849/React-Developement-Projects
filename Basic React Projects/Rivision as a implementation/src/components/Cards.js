import React from "react";
import Testimonial from "./Testimonial";
const Cards=(props)=>{
let review=props.review;
return(
<div>

<div>
    <h1>{review.name}</h1>
</div>
<div>
    <img src="{review.image}"/>
</div>


</div>




)



}
export default Cards;