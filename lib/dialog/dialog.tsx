import React from 'react';
import './index.scss'

interface Props {
  visible: boolean,
  content: React.ReactNode
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <>
        <div className={'ice-dialog-mask'}/>
        <div className={'ice-dialog-box'}>
          <header className={'ice-dialog-box-header'}>提示</header>
          <main className={'ice-dialog-box-main'}>{props.content}</main>
          <footer className={'ice-dialog-box-footer'}>
            <button>取消</button>
            <button>确认</button>
          </footer>
        </div>
      </> :
      null
  );
};

export default Dialog;
