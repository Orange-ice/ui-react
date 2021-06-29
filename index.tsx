import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import IconExample from './example/icon-example/IconExample';
import ButtonExample from './example/button-example/ButtonExample';
import DialogExample from './example/dialog-example/DialogExample';

import './example.scss';
import Home from './example/Home';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/icon" component={IconExample}/>
        <Route path="/button" component={ButtonExample}/>
        <Route path="/dialog" component={DialogExample}/>
        <Redirect from="/" to="/home"/>
      </Switch>
    </Router>
  );
};


ReactDOM.render(<App/>, document.getElementById('root'));
