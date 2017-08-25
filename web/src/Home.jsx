import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

const Home = () => <div>
    <h2>Home</h2>
    <p>
        This is the home page. Any other feature in this app,
        navigatable via the following links, <b>comes from different modules</b>,
        and NOT from App components!
    </p>
    
    <Link to={"/feature1"} className="btn btn-default">Feature 1</Link>
    
</div>;

export default Home;