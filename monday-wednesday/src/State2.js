import React, {useState, useEffect} from 'react';

export default function State2(){
    const [time, setTime] = useState("");

    //2.b Make sure that the required timer, is not started until the Component is mounted
    useEffect(function() {
        console.log("In use")
        //What I want to Do,() => 
        const clock = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)

        //What I want to clean up, arrow function
        //2.c Make sure that the timer is disabled when the component is unmounted
        return () => {
            console.log("Clean up")
            clearInterval(clock)
        }
    },[])

    return (
        <div>
            <p>State Exercise 2</p>
            <p>Time is: {time}</p>
        </div>
    )
}