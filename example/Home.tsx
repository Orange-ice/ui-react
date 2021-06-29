import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  return (
    <Router>
      <div>Home</div>
      <Link to="/button">Button</Link>
    </Router>
  );
};

export default Home;
