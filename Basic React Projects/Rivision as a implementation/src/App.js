import React from "react";
import Testimonial from './components/Testimonial';

import reviews from "./data";
const App = () => {
  const name="Suraj Rau Patil"
  const age=21;
  return (<div>
   
  <Testimonial myname={name} myage={age} reviews={reviews}/>
  </div>);
};

export default App;
