import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

const Home = () => <div>
    <h2>Home</h2>
    <p>
        This is the home page, and the only component part of this App in a strict sense.
        Any other feature in this app,
        navigatable via the following links, <b>comes from different modules</b>,
        and NOT from App components!
    </p>
    
    <Link to={"/catalog"} className="btn btn-default">Catalog</Link>
    
</div>;

export default Home;