import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Welcome(props) {
  const {name,phone,isMember} = props;
  const member = isMember ? "Yes" : "False"
  return <p>
    {name} phone: {phone}, isMember: {member} </p>;
}

Welcome.protoTypes = {
  name : PropTypes.string.isRequired,
  phone : PropTypes.string,
  isMember : PropTypes.bool
}
Welcome.defaultProps = {
  isMember: false
}

function App() {
  return (
    <div>
      <p>Code example saved for later use ... </p>
      <p>Demo 1</p>
      <Welcome name="Sara" phone="0000" isMember={false} />
    </div>
  );
}

export default App;
