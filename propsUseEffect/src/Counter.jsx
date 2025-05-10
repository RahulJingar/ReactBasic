import { useEffect } from "react";

const Counter = ({count,data}) => {
    const handleCounter = () => {
        console.log("handleCounter called");
    }

    const handleData = () => {
        console.log("handleData called");
        
    }

    useEffect(()=>{
        handleCounter();
    },[])

    useEffect(()=>{
        handleData();
    },[count,data])

    return (

        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}


export default Counter;