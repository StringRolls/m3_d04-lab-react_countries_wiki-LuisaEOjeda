import React from 'react';
import { useEffect, useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import countriesDB from './countries.json';

import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    setCountries(countriesDB)
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesDB} />
          {countries && countries.map(country=> (
            <Link  to={`/${country.alpha3Code}`}/>
          ))}
 <Routes >
   <Route path={"/:countryCode"}  element={ <CountryDetails countries={countriesDB}/> }/>
 </Routes >

        </div>
      </div>
    </div>
  );
}
export default App;
