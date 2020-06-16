import React, { Component } from 'react';
import './Countries.css';
import { Link } from 'react-router-dom';
export class Countries extends Component {
  render() {
    const { country } = this.props;
    return (
      <Link to={`/Details/${country.callingCodes}`}>
        <div className='country'>
          <div className='list'>
            <img src={country.flag} />
            <h3>{country.name}</h3>
            <p>
              <span>Population: </span>
              {country.population}
            </p>
            <p>
              <span>Region: </span>
              {country.region}
            </p>
            <p>
              <span>Capital: </span>
              {country.capital}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}
