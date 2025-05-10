import React, { useEffect, useState } from "react";

function App(){

    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    useEffect(()=>(
      counterfunction()
    ),[counter,data])

    function counterfunction(){
      console.log("counterfunction", counter);
    }

  return (
    <div>
        <h1>UseEffect Hook</h1>
        <button onClick={()=>setCounter(counter+1)}>Counter: {counter}</button>
        <button onClick={()=>setData(data+1)}>Data: {data}</button>
     
    </div>
  )
}
export default App;