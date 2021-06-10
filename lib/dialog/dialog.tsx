import React from 'react';
import './index.scss'
import { Icon } from '../index';

interface Props {
  visible: boolean,
  content: React.ReactNode
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <>
        <div className={'ice-dialog-mask'}/>
        <div className={'ice-dialog'}>
          <Icon className={'ice-dialog-close'} name={'close'} />
          <header className={'ice-dialog-header'}>提示</header>
          <main className={'ice-dialog-main'}>{props.content}</main>
          <footer className={'ice-dialog-footer'}>
            <button>取消</button>
            <button>确认</button>
          </footer>
        </div>
      </> :
      null
  );
};

export default Dialog;
