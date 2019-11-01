import React, {useState, useEffect} from 'react';
 
//1.a Create a new JavaScript file and paste in the code
//1.c Change NumberList to return an unordered list
//1.d Insert keys
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map(n => <li key={n.toString()}> {n} </li>);
  return  listItems ;
}
function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <ul><NumberList numbers={props.numbers} /></ul>
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
