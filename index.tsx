import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import IconExample from './example/icon-example/IconExample';
import ButtonExample from './example/button-example/ButtonExample';
import DialogExample from './example/dialog-example/DialogExample';

import Layout from './lib/layout/layout';
import './example.scss'
import Header from './lib/layout/header';
import Content from './lib/layout/content';
import Footer from './lib/layout/footer';
import Aside from './lib/layout/aside';

const App: React.FunctionComponent = () => {
  return (
      <Router>
        <Layout className="site">
          <Header>Header</Header>
          <Layout>
            <Aside className="site-aside">
              <div className="site-aside-nav">
                <NavLink to="/button">Button</NavLink>
                <NavLink to="/icon">Icon</NavLink>
                <NavLink to="/dialog">Dialog</NavLink>
              </div>
            </Aside>
            <Content>
              <Switch>
                <Route path="/icon" component={IconExample}/>
                <Route path="/button" component={ButtonExample}/>
                <Route path="/dialog" component={DialogExample}/>
              </Switch>
            </Content>
          </Layout>
          <Footer>&copy; Burt</Footer>
        </Layout>
      </Router>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
