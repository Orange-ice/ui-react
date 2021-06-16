import React from 'react';

import './importIcons'
import './icon.scss'
import joinClass from '../helper/joinClass';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...reset}) => {
  return (
    <svg className={joinClass('ice-icon', className)} {...reset}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
