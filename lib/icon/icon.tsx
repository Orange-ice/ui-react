import React from 'react';

import './importIcons'
import './icon.scss'
import classNames from '../helper/classNames';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...reset}) => {
  return (
    <svg className={classNames('ice-icon', className)} {...reset}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
