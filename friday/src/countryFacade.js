import React from "react";

//1) Complete the countryFactory class to fetch data
function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
 } 

const countryFacade = () => {

  const getLabels = () => {
    //TODO: Get Labels from server
    return fetch('http://localhost:3333/labels').then(handleHttpErrors);
  }

  const getCountries = () => {
    //TODO: Get Countries from server
    return fetch('http://localhost:3333/countries').then(handleHttpErrors);
  }

  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();