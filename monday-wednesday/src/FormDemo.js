import React, {useState} from 'react';

const FormDemo = () => {
  const initialState = {name: "", age: null, email: "", phone: ""};
 
  const [person,setPerson] = useState(initialState)
  
  //Submithandler
  const handleSubmit = (evt) => {
    evt.preventDefault() //don't refresh side when submitting form
    window.alert(JSON.stringify(person)) //get alert window when submit
    setPerson(initialState) //clear form when submit
  }

  //Eventhandler - when something happens in the forms, write out the value
  const handleInput = (event) => {
    const target = event.target;
    const id = target.id; //the properties has an id, that why we need this to find the right one
    const value = target.value;
    //instead of making if-statement for each property
    person[id] = value;
    setPerson({...person}) //A clone of person-object 
    //setPerson({...person,[id]: value}) does the same as the two abowe
  }
  
  return (
    <div style={{marginTop:25}}>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input id="name" type="text" value={person.name} 
               placeholder="Name" />
        <br/>
        <input id="age" type="number" value={person.age}
               placeholder="Age" />
        <br/>
        <input id="email" type="text" value={person.email} 
                placeholder="email" />
        <br/>
        <input id="phone" type="text" value={person.phone} 
               placeholder="Phone" />
        <br/>
        <button >Submit</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}
//default for a form is to reload page, which we are not interested in in a single page application

export default FormDemo;