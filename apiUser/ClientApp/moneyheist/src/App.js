import React, { Component } from 'react';
import './App.css';
import { CityList } from './Components/CityList/CityList';
import Header from './Components/Header/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />    
        <CityList/>
      </div>
    );
  }
}
export default App;