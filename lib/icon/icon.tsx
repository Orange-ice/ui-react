import React from 'react';

import './importIcons'
import './icon.scss'
import classNames from '../helper/classNames';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, ...reset} = props
  return (
    <svg className={classNames('ice-icon', className)} {...reset}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
