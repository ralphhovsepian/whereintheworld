import React, { Component } from 'react';
import './CountryDetails.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export class CountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
    };
  }

  componentDidMount = async () => {
    await fetch(
      `https://restcountries.eu/rest/v2/callingcode/${this.props.match.params.id}`
    )
      .then((resp) => resp.json())
      .then((data) =>
        data.map((dt, index) => {
          this.setState({ country: dt });
        })
      );
  };
  render() {
    return (
      <React.Fragment>
        <Link to='/whereintheworld/'>
          <button className='back'>
            <FontAwesomeIcon icon={faArrowLeft} />
            &nbsp; Back
          </button>
        </Link>
        <div className='info'>
          <div className='left'>
            <img src={this.state.country.flag} />
          </div>
          <div className='right'>
            <h1>{this.state.country.name}</h1>
            <p>
              <b>Population: </b>
              {this.state.country.population}
            </p>
            <p>
              <b>Region: </b>
              {this.state.country.region}
            </p>
            <p>
              <b>Capital: </b>
              {this.state.country.capital}
            </p>
            <p>
              <b>Country code: +</b>
              {this.props.match.params.id}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
