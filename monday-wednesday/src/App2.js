//2 Object and Array Destructuring 
//2.2 Import the object from file2.js into a variable called person.
import React from 'react';
import {person, males, females} from "./file2";

//2.3 Implement a one-liner to initialize two variables, firstName and email.
const { firstName, email } = person;

//2.4 Add a new <p>-tag (in App2.js) , that prints firstName, email.
function App2() {
    return (
        <div>
            <p>Exercise 2</p>
            <p>{firstName}, {email}</p>
        </div>
    );
}

//2.6 Use array destructuring and the spread syntax to create a few one-lines
const line1 = [...males, ...females];
const line2 = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(line1);
console.log(line2);

//2.7 Use Object Destructuring and the spread syntax, to create a new object personV2 
//const { email, firstName, friends, gender, lastName, phone } = personV2;
//console.log(personV2);

export default App2;