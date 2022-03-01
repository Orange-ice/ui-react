import React from 'react';
import Header from '../lib/layout/header';
import Layout from '../lib/layout/layout';
import Aside from '../lib/layout/aside';
import {NavLink} from 'react-router-dom';
import Content from '../lib/layout/content';
import Footer from '../lib/layout/footer';

const ExampleLayout: React.FC = (props) => {
  return (
    <Layout className="site">
      <Header>Header</Header>
      <Layout>
        <Aside className="site-aside">
          <div className="site-aside-nav">
            <NavLink to="/button">Button</NavLink>
            <NavLink to="/icon">Icon</NavLink>
            <NavLink to="/dialog">Dialog</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/scroll">Scroll</NavLink>
            <NavLink to="/drawer">Drawer</NavLink>
          </div>
        </Aside>
        <Content>
          {props.children}
        </Content>
      </Layout>
      <Footer>&copy; Burt</Footer>
    </Layout>
  );
};

export default ExampleLayout;
