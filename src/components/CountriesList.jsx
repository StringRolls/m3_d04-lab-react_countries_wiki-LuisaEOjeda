import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


export default function CountriesList(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ 'maxHeight': '90vh', 'overflow': 'scroll' }}
        >
          <div className="list-group">
            {props.countries.map(country => (
              <Link
                to={`/${country.alpha3Code}`}
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                  alt="country-flag"
                  width="100px"
                  height="auto"
                />
                <p>{country.name.official}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
