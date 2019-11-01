import React, {useState, useEffect} from 'react';

export default function State1(){
    const [count, setCount] = useState(0); 

    //Side effect - changing the document title, always runs after render
    useEffect(() => {
        document.title = `The count is ${count}`;
    });

    //1.a Add a button which when pressed should increment a count value
    //1.b Add a new button to the Component which when pressed, should decrement the count value
    return (
        <div>
            <p>State Exercise 1</p>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
        </div>
    );
}