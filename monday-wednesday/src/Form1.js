import React, {useState} from "react";
 
//1.a  In the project and paste in the code
//1.c Add the necessary changes to handle the form input
const NameForm = () => {
  const initialState = "";
  const [name,setName] = useState(initialState);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    //1.d Open an alert box with the value provided in the text box
    window.alert(JSON.stringify(name))
    setName(initialState);
  }
 
  return (
    <div>
      <form >
        <label>
          Name:
          <input id="name" type="text" value={name} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}> Submit </button>
      </form>
      {JSON.stringify(name)}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
