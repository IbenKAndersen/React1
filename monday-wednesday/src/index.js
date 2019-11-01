import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Indhold from './Indhold';
import Demo1 from './Demo1';
import Demo2 from './Demo2'
import IntervalCount from './IntervalCount'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import State1 from './State1'
import State2 from './State2'
import State3 from './State3'
import List1 from './List1'
import List2 from './List2'
import Form1 from './Form1'
import Form2 from './Form2'
import App from './liftingstate1/App'
import Appp from './liftingstate2/Appp'

let app = <Indhold/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="indhold">Indhold</a> &nbsp;
         <a href="/"  className="x" id="demo1">demo1</a> &nbsp;
         <a href="/"  className="x" id="demo2">demo2</a> &nbsp;
         <a href="/"  className="x" id="demo3">demo3</a> &nbsp;
         <a href="/"  className="x" id="app1">Mon-ex1</a> &nbsp;
         <a href="/"  className="x" id="app2">Mon-ex2</a> &nbsp;
         <a href="/"  className="x" id="app3">Mon-ex3</a> &nbsp;
         <a href="/"  className="x" id="state1">Tue-State-ex1</a> &nbsp;
         <a href="/"  className="x" id="state2">Tue-State-ex2</a> &nbsp;
         <a href="/"  className="x" id="state3">Tue-State-ex3</a> &nbsp;
         <a href="/"  className="x" id="list1">Tue-List-ex1</a> &nbsp;
         <a href="/"  className="x" id="list2">Tue-List-ex2</a> &nbsp;
         <a href="/"  className="x" id="form1">Wed-Form-ex1</a> &nbsp;
         <a href="/"  className="x" id="form2">Wed-Form-ex2</a> &nbsp;
         <a href="/"  className="x" id="lift1">Wed-LiftingState-ex1</a> &nbsp;
         <a href="/"  className="x" id="lift2">Wed-LiftingState-ex2</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "indhold": app = <Indhold />; break;
        case "demo1": app = <Demo1 />; break;
        case "demo2": app = <Demo2 />; break;
        case "demo3": app = <IntervalCount />; break;
        case "app1": app = <App1 />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "state1": app = <State1 />; break;
        case "state2": app = <State2 />; break;
        case "state3": app = <State3 />; break;
        case "list1": app = <List1 />; break;
        case "list2": app = <List2 />; break;
        case "form1": app = <Form1 />; break;
        case "form2": app = <Form2 />; break;
        case "lift1": app = <App />; break;
        case "lift2": app = <Appp />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
