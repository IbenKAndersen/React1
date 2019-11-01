import React from "react";
import PropTypes from "prop-types";

//<React.Fragment> is the same as <div>
const TodoList = props => {
  const { todos, deleteTodo, editTodo } = props;
  //const todos = props.todos;
  //const deleteTodo = props.deleteTodo;
  //const editTodo = props.editTodo;
  return (
    <React.Fragment>
      <h2>All Persons</h2>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.name}</td>
            <td>{todo.id}</td>
            <td><a
              href="#/"
              onClick={e => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              delete
            </a></td>
            <td><a href="#/" onClick={() => editTodo(todo.id)}>
              edit
            </a></td>
          </tr>
        ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
};
