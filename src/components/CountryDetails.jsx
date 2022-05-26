import React from 'react';
import  {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';

export default function CountryDetails({ country, allCountries }) {
//const { country, allCountries } = this.props;

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
        alt="country-flag"
        style={{ 'width': '300px', 'max-height': '300px' }}
      />
      <h1>{country.name}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ 'width': '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(border => (
                  <li key={country.alpha3Code}>
                    <Link to={`/${border}`+ `${country.alpha3Code}`}>
                      {allCountries.filter(
                        country => (country.alpha3Code === border)[0].name
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
