import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

          <Routes>
          {countries.map((country) => (
            <Route 
            path={`/${country.alpha3Code}`} 
            element={<CountryDetails country={country} allContires={countriesDB}/>} 
            />
          ))}
        </Routes>

        </div>
      </div>
    </div>
  );
}
export default App;
