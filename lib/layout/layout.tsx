import React, { HTMLAttributes, useEffect, useState } from 'react';
import scopeClassMaker from '../helper/scopeClassMaker';
import joinClass from '../helper/joinClass';
import './index.scss';
import Aside from './aside';

interface Props extends HTMLAttributes<HTMLElement> {
  children: Array<React.ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const c = scopeClassMaker('ice-layout'); // class 统一前缀
  const { className, children, ...rest } = props;
  const [hasAside, setHasAside] = useState(false);
  useEffect(() => {
    children.forEach(item => {
      if (item.type === Aside) {
        setHasAside(true);
      }
    });
  }, []);
  return (
    <div className={joinClass(c(), className, hasAside ? 'has-aside' : undefined)} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
