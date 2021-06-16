import React, { HTMLAttributes } from 'react';
import { scopeClassMaker } from '../helper/scopeClassMaker';
import joinClass from '../helper/joinClass';

interface Props extends HTMLAttributes<HTMLElement>{}

const Layout: React.FunctionComponent<Props> = (props) => {
  const c = scopeClassMaker('ice-layout') // class 统一前缀
  const {className, children, ...rest} = props
  return (
    <div className={joinClass(c(), className)} {...rest}>{props.children}</div>
  );
};

export default Layout;
