import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';
import Dialog from './dialog/dialog';

const App:React.FunctionComponent = () => {
  const pay = () => {
    console.log('pay');
  }
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div>
        <h3>Icon</h3>
        <Icon name={'alipay'} className={'123'} onClick={pay} />
        <Icon name={'github'} />
      </div>
      <div>
        <h3>Dialog</h3>
        <button onClick={() => {setVisible(!visible)}}>click</button>
        <Dialog
          visible={visible}
          content={
            <h2>123</h2>
          }
        />
      </div>
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
