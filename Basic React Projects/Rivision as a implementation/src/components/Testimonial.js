import React, { useState } from "react";
import Cards from "./Cards";


const Testimonial=(props)=>{
    let review =props.reviews;
const[count,setCount]=useState(0);
const data=[1,2,3,4,5,6];
const increment=()=>{
     setCount(count+1);
}
const squreValue=data.map( (num) =>
    num**2
    );
const decrement=()=>{
    setCount(count-1);
}
    
return <div>
      <p1> my name is {props.myname} </p1>
      <p1> my age is {props.myage}</p1>
      <br></br>
      <button onClick={increment}>Add</button><p1>===</p1>
      <button onClick={decrement}>Minus</button>
      <h1>Count :{count}</h1>
      <br></br>
      <br></br>
    <p1>squreValue:</p1>
    <ul>
        {squreValue.map((num)=>(
            <li>{num}</li>
        ))}
    </ul>
      
  <Cards review={review[0]}/>
      
</div>
}
export default Testimonial;