import React, { Component } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
export class Nav extends Component {
  render() {
    const { handleMode } = this.props;
    return (
      <nav>
        <div className='left'>
          <h2>Where in the world?</h2>
        </div>
        <div className='right'>
          <FontAwesomeIcon icon={faMoon} />
          <a href='#' onClick={handleMode}>
            Dark mode
          </a>
        </div>
      </nav>
    );
  }
}
