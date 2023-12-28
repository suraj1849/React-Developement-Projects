import { useState } from "react";
import "./App.css";

function App() {
const[count,setCount]=useState(0);
function decreseHandler(){
setCount(count-1);
}
function increseHandler(){
  setCount(count+1);
  }
function resetHandler(){
  setCount(0);
}

  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-blue-700 flex-col gap-10 ">
<div className="text-white font-bold text-6xl">Increment & decrement</div>
<div className="bg-white flex justify-center gap-12 py-3 rounded-sm">

<button onClick={decreseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>
<div className="font-bold gap-12 text-5xl">
{count}
</div>
<button onClick={increseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"> + </button>
</div>
<button onClick={resetHandler} className="bg-white p-2 border-r rounded-3xl text-black font-bold text-3xl"> Reset</button>

   </div>
  );
}

export default App;
