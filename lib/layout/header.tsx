import React, { HTMLAttributes } from 'react';
import joinClass from '../helper/joinClass';
import scopeClassMaker from '../helper/scopeClassMaker';

interface Props extends HTMLAttributes<HTMLElement>{}

const Header: React.FunctionComponent<Props> = (props) => {
  const {className, children, ...rest} = props
  const c = scopeClassMaker('ice-layout-header')
  return (
    <div className={joinClass(c(), className)} {...rest}>{children}</div>
  );
};

export default Header;
