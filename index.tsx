import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './lib';
import Dialog from './lib/dialog/dialog';
const App:React.FunctionComponent = () => {
  const pay = () => {
    console.log('pay');
  }
  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
  }
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
          options={{
            closeOnMask: true,
            title: 'Attention',
            cancelText: 'cancel'
          }}
          visible={visible}
          content={
            <span>123</span>
          }
          onClose={onClose}
        />
      </div>
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
