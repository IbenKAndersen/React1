import React, {useState} from 'react';

export default function App2() {
    //Declaring state variable - numbers
    const[numbers,setNumbers] = useState([2,4,6,8])

    const addNumber = () => {
        const random = Math.floor(Math.random()*100)+1
        setNumbers([...numbers, random])
        //You cannot change the existing array, you have to make a clone
    }

    return (
        <div className="App2">
            <p>Code example saved for later use ... </p>
            <p>Demo 2</p>
            <p>numbers {numbers.toString()}</p>
            <button onClick={addNumber}>Add Number</button>
        </div>
    )
}
