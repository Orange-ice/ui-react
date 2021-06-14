import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './lib';
import Dialog, {alert} from './lib/dialog/dialog';
import Button from './lib/button/button';
import './example.scss'
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
        <hr/>
        <button onClick={() => alert('hello, 这是dialog的alert')}>alert</button>
      </div>
      <div className={'buttons'}>
        <h3>Button</h3>

        <Button>Default</Button>
        <Button onClick={pay} effect={'primary'}>Primary</Button>
        <Button onClick={pay} effect={'success'}>Success</Button>
        <Button effect={'info'}>Info</Button>
        <Button effect={'error'}>Error</Button>
        <Button effect={'warning'}>Warning</Button>

        <br/>
        <br/>

        <Button variant={'outline'}>Default</Button>
        <Button variant={'outline'} effect={'primary'}>Primary</Button>
        <Button variant={'outline'} effect={'success'}>Success</Button>
        <Button variant={'outline'} effect={'info'}>Info</Button>
        <Button variant={'outline'} effect={'error'}>Error</Button>
        <Button variant={'outline'} effect={'warning'}>Warning</Button>

        <br/>
        <br/>

        <Button variant={'ghost'}>Default</Button>
        <Button variant={'ghost'} effect={'primary'}>Primary</Button>
        <Button variant={'ghost'} effect={'success'}>Success</Button>
        <Button variant={'ghost'} effect={'info'}>Info</Button>
        <Button variant={'ghost'} effect={'error'}>Error</Button>
        <Button variant={'ghost'} effect={'warning'}>Warning</Button>
      </div>
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
