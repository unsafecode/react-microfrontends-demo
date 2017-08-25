import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// See https://github.com/ctrlplusb/react-async-component
import { asyncComponent } from 'react-async-component';
import Home from "./Home";
// import Feature1 from "@unsafecode/react-microfrontend-feature1";

const AsyncFeature1 = asyncComponent({
  resolve: () => import("@unsafecode/react-microfrontend-feature1")
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Router>
          <div>
            {/* https://reacttraining.com/react-router/web/guides/quick-start */}
            <Route path="/" exact component={Home} />
            <Route path="/feature1" component={AsyncFeature1} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
