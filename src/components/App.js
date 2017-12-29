import React, { Component } from 'react';
import '../styles/App.css';

//components==================================
import EarthquakeInfo from './EarthquakeInfo.js';
import EarthquakeList from './EarthquakeList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tile">
          <div className="my-header">EarthQuakes!</div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
