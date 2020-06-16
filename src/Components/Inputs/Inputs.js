import React, { Component } from 'react';
import './Inputs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export class Inputs extends Component {
  render() {
    const { handleValue, value, handleFilter } = this.props;
    return (
      <div className='inputs'>
        <div className='search'>
          <input
            type='text'
            placeholder='  Search for a country...'
            onChange={handleValue}
            value={value}
          />
        </div>
        <div className='filter'>
          <select name='Filter' onChange={handleFilter}>
            <option value=''>Filter by region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </div>
    );
  }
}
