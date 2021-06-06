import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const App:React.FunctionComponent = () => {
  const pay = () => {
    console.log('pay');
  }
  return (
    <>
      <Icon name={'alipay'} className={'123'} onClick={pay} />
      <Icon name={'github'} />
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
