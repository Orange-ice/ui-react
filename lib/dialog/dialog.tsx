import React from 'react';

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <div>dialog组件</div> :
      null
  );
};

export default Dialog;
