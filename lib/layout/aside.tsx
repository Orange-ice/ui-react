import React, { HTMLAttributes } from 'react';
import scopeClassMaker from '../helper/scopeClassMaker';
import joinClass from '../helper/joinClass';

interface Props extends HTMLAttributes<HTMLElement>{}

const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, children, ...rest} = props
  const c = scopeClassMaker('ice-layout-aside')
  return (
    <div className={joinClass(c(), className)} {...rest}>{children}</div>
  );
};

export default Aside;
