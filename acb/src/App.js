import React, { Component } from "react";
import './App.css';
import Dashboard from"./components/Dashboard";
import all_data from "./components/data.js";


class App extends Component {
  constructor(props) {
    super(props);  
    this.state = all_data;
  };

  render() {
    return (
      <div>
        <Dashboard
          state={this.state}
        />
      </div>
    );
  }
}

export default App;

// <button><img src={require("./public/excel.png")} alt="excel icon"/>Import</button>
// <button><img src={require("./public/excel.png")} alt="excel icon"/>Export</button>
// <button><img src={require("./public/api.png")} alt="api icon"/></button>
// <button> Export to Gif </button>

// Ideas:
// Menu button to add additional chart types or remove existing
// Menu button to make colors monatone.
// Take a look at the highcharts live data feature https://www.highcharts.com/blog/news/live-data-configuration/
