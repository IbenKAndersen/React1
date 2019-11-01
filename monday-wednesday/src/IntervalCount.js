import React, {useState,useEffect} from 'react';

export default function IntervalCount() {
    const [count, setCount] = useState(0) 
    //"constructor" getter, setter and set start state

    useEffect(function() {
        console.log("In use")
        //What I want to Do,() => 
        const setInt = setInterval(()=>{
            setCount(count=>count+1);
        },500)
        //What I want to clean up, arrow function
        return () => {
            console.log("Clean up")
            clearInterval(setInt)
        }
        
    },[]) //[] can take a variale, empty tells that it should not run before return is ready
    return (
        <div>
            <p>Code example saved for later use ...</p>
            <p>Demo 3</p>
            <h1>{count}</h1>
        </div>
    )
}