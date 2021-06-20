import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './lib';
import Dialog, {alert} from './lib/dialog/dialog';
import Button from './lib/button/button';
import Layout from './lib/layout/layout';
import './example.scss'
import Header from './lib/layout/header';
import Content from './lib/layout/content';
import Footer from './lib/layout/footer';
import Aside from './lib/layout/aside';
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
            title: 'Attention'
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

        <Button disabled>Default</Button>
        <Button onClick={pay} effect={'primary'} disabled>Primary</Button>
        <Button disabled onClick={pay} effect={'success'}>Success</Button>
        <Button disabled effect={'info'}>Info</Button>
        <Button disabled effect={'error'}>Error</Button>
        <Button disabled effect={'warning'}>Warning</Button>

        <br/>
        <br/>

        <Button variant={'outline'} disabled>Default</Button>
        <Button variant={'outline'} effect={'primary'} disabled>Primary</Button>
        <Button variant={'outline'} effect={'success'} disabled>Success</Button>
        <Button disabled variant={'outline'} effect={'info'}>Info</Button>
        <Button disabled variant={'outline'} effect={'error'}>Error</Button>
        <Button disabled variant={'outline'} effect={'warning'}>Warning</Button>

        <br/>
        <br/>

        <Button variant={'ghost'} disabled>Default</Button>
        <Button variant={'ghost'} effect={'primary'} disabled>Primary</Button>
        <Button disabled variant={'ghost'} effect={'success'}>Success</Button>
        <Button disabled variant={'ghost'} effect={'info'}>Info</Button>
        <Button disabled variant={'ghost'} effect={'error'}>Error</Button>
        <Button disabled variant={'ghost'} effect={'warning'}>Warning</Button>

        <hr/>
        <div>
          <h3>Layout</h3>
          <Layout className={'hi'}>
            <Header className={'hhh'}>header</Header>
            <Content className={'ccc'}>内容</Content>
            <Footer className={'fff'}>footer</Footer>
          </Layout>

          ------- <br/>
          <Layout>
            <Header>header</Header>
            <Layout>
              <Aside>aside</Aside>
              <Content>content</Content>
            </Layout>
            <Footer>footer</Footer>
          </Layout>

          ------- <br/>
          <br/>

          <Layout>
            <Aside>aside</Aside>
            <Layout>
              <Header>header</Header>
              <Content>content1111111111111111111111111</Content>
              <Footer>footer</Footer>
            </Layout>
          </Layout>

        </div>
      </div>
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))
