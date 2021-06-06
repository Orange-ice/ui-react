import React from 'react';

interface IconProps {
  name: string
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>Icon---{props.name}</span>
  )
}

export default Icon
