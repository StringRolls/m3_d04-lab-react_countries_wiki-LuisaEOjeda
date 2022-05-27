import React from 'react';
import  {Link, useParams} from 'react-router-dom'

export default function CountryDetails({ countries }) {
 const {countryCode} = useParams()

 const country = countries ? countries.find(country=>country.alpha3Code === countryCode) : {}
 const borders = countries ? countries.filter(border=>country.borders.includes(border.alpha3Code)) : []

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
        alt="country-flag"
        style={{ 'width': '300px', 'max-height': '300px' }}
      />
      <h1>{country.name.common}</h1>

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
              { borders.map(border=>(
                <li>
                  <Link to={`/${border.alpha3Code}`}>
                    {border.name.common}
                  </Link>
                </li>))
              }
              
              
              {/* 
                {country.borders.map(border => (
                  <li key={country.alpha3Code}>
                    <Link to={`/${border}`}>
                      {allCountries && allCountries.filter(
                        country => (country.alpha3Code === border)[0].name
                      )}
                    </Link>
                  </li>
                ))} */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
