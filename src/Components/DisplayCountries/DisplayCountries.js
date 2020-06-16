import React, { Component } from 'react';
import './DisplayCountries.css';
import { Countries } from '../Countries/Countries';
export class DisplayCountries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className='showCountries'>
        {countries.map((country, index) => {
          return <Countries key={index} country={country} />;
        })}
      </div>
    );
  }
}
