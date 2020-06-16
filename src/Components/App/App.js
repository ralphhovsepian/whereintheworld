import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Nav } from '../Nav/Nav';
import { Inputs } from '../Inputs/Inputs';
import { DisplayCountries } from '../DisplayCountries/DisplayCountries';
import { CountryDetails } from '../CountryDetails/CountryDetails';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '',
      countries: [],
      region: '',
    };
  }

  componentDidMount = async () => {
    let fetchAll = await fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => this.setState({ countries: data }));
  };

  handleValue = async (e) => {
    let updateVal = await this.setState({ currentVal: e.target.value });

    if (this.state.currentVal !== '') {
      let fetchCountries = await fetch(
        `https://restcountries.eu/rest/v2/name/${this.state.currentVal}`
      )
        .then((response) => {
          if (response.status === 404) {
            console.log('error');
          } else {
            return response.json();
          }
        })
        .then((data) => data && this.setState({ countries: data }))
        .catch((err) => console.log('no'));
    }
  };

  handleFilter = async (e) => {
    let updateRegion = await this.setState({ region: e.target.value });

    if (this.state.region !== '') {
      let fetchCountries = await fetch(
        `https://restcountries.eu/rest/v2/region/${this.state.region}`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ countries: data }));
    } else {
      console.log('g');
    }
  };

  handleMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Nav handleMode={this.handleMode} />
          <Switch>
            <Route
              exact
              path='/whereintheworld/'
              render={() => (
                <React.Fragment>
                  <Inputs
                    handleFilter={this.handleFilter}
                    handleValue={this.handleValue}
                    value={this.state.currentVal}
                  />
                  <DisplayCountries countries={this.state.countries} />
                </React.Fragment>
              )}
            />

            <Route path='/Details/:id' component={CountryDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
