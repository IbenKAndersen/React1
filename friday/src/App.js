import React, {useState, useEffect} from 'react';
import CountryTable from "./CountryTable";
import './App.css';

const App = (props) => {
  const facade = props.factory;
  const getLabels = facade.getLabels;
  const [labels, setLabels] = useState([]);
  const getCountries = facade.getCountries;
  const [countries, setCountries] = useState([]);

  useEffect( () => {
      getLabels().then(data => {
        setLabels(data);
      });
  },[]);

  useEffect( () => {
      getCountries().then(data => {
        setCountries(data);
      })
  },[]);

    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div className="App-intro">
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>          
          <CountryTable labels={labels} countries={countries} />
        </div>
      </div>
    );
};

export default App;
