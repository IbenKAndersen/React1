import React from "react";

const CountryTable = props => {
  const {countries, labels} = props;

    return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">

        <thead>
          <tr>
            {labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
         {countries.map((country) => (
           <tr key={countries.name}>
             <td>{country.name}</td>
             <td>{country.capital}</td>
             <td>{country.region}</td>
             <td>{country.population}</td>
             <td>{country.area}</td>
             <td>{country.timezones[0]}</td>
             <td>{country.borders[0]}</td>
             <td>{country.topLevelDomain[0]}</td>
             <td>{country.currencies[0]}</td>
             <td>{country.languages[0]}</td>
           </tr>
         ))}
         <tr>
         </tr>
        </tbody>

      </table>
      </div>
    );
};
export default CountryTable;