import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewTodo(props) {

  const [todo, setTodo] = useState(props.nextTodo);

  const saveTodo = evt => {
    if (todo.name === "") {
      return;
    }
    props.addTodo(todo);
    evt.preventDefault();
  };

  useEffect(() => setTodo({ ...props.nextTodo }), [props.nextTodo]);

  const onChange = evt => {
    const val = evt.target.value;
    todo.name = val;
    setTodo({ ...todo });
  };
  const title = todo.id === "" ? "Create new Person" : "Edit Person"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={todo.name} onChange={onChange} />
        <br/><br/>
        <button onClick={saveTodo} className="btn btn-info">Save</button>
      </form>
      {todo.id !== "" && <p>Editing todo with</p>}
      <p>{JSON.stringify(todo)}</p>
    </div>
  );
}
export default NewTodo;

NewTodo.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
}
