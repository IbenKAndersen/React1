//3 Composing Components
import React from 'react';
import PropTypes from 'prop-types';
import {names} from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

//3-Props-2-b add a new functional Component called WelcomePerson.
//3-Props-2-c add three usages of the new component in App function
function WelcomePerson(props) {
    const {firstName,lastName,email} = props.person;
    console.log("Names",names[0]);
    return <p> Person: {firstName} {lastName}, email: {email} </p>;
}

//3-Props-1-d Add Type Checking, using Proptypes
Welcome.propTypes = {
    name : PropTypes.string.isRequired
}

function App3() {
    return (
      <div>
        <p>Exercise 3</p>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <WelcomePerson person={names[0]} />
        <WelcomePerson person={names[1]} />
        <WelcomePerson person={names[2]} />
      </div>
    );
}

  export default App3;