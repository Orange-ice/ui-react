import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

const App:React.FunctionComponent = () => {
  return (
    <>
      <Icon name={'alipay'} />
      <Icon name={'github'} />
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
