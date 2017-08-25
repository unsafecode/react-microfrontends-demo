import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// See https://github.com/ctrlplusb/react-async-component
import { asyncComponent } from 'react-async-component';

// Homepage comes from "root" App
import Home from "./Home";

// Features come from separated packages,
// and are lazy-loaded
const Catalog = asyncComponent({
  resolve: () => import("@unsafecode/react-microfrontend-catalog")
});
const Cart = asyncComponent({
  resolve: () => import("@unsafecode/react-microfrontend-cart")
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Microfrontends in React</h2>
        </div>
        <p className="App-intro">
          In a <em>microservices-oriented</em> architecture,
          the frontend typically stills pretty monolithic:
          regardless of how many services you design, you end
          up with a single, giant client project.
        </p>

        <p>
          This actually collides with microservices, since
          we should be able to develop and upgrade UI parts
          <em>independently</em>.
        </p>

        <p>
          This simple demo showcases a very easy way to deal with
          this case: we build one React library package for each
          application <em>feature</em>, or page, and one final
          <em>web</em> project (build with create-react-app)
          referencing all of them with Router.
        </p>
        
        <Router>
          <div>
            {/* https://reacttraining.com/react-router/web/guides/quick-start */}
            <Route path="/" exact component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
