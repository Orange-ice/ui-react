import React from 'react';
import './index.scss';
import {Icon} from '../index';

interface PropsOptions {
  title?: string
  hideCancel?: boolean
  closeOnMask?: boolean
  cancelText?: string
  confirmText?: string
}

interface Props {
  visible: boolean,
  content: React.ReactNode,
  onClose: React.MouseEventHandler,
  onConfirm?: React.MouseEventHandler,
  options?: PropsOptions
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  const {onClose, content, onConfirm, options} = props;
  const onClickMask: React.MouseEventHandler = (e) => {
    if (options?.closeOnMask) {
      onClose(e);
    }
  };
  return (
    props.visible ?
      <>
        <div className={'ice-dialog-mask'} onClick={onClickMask}/>
        <div className={'ice-dialog'}>
          <Icon className={'ice-dialog-close'} name={'close'} onClick={onClose}/>
          <header className={'ice-dialog-header'}>{options?.title || '提示'}</header>
          <main className={'ice-dialog-main'}>{content}</main>
          <footer className={'ice-dialog-footer'}>
            {!options?.hideCancel && <button onClick={onClose}>{options?.cancelText || '取消'}</button>}
            <button onClick={onConfirm || onClose}>{options?.confirmText || '确认'}</button>
          </footer>
        </div>
      </> :
      null
  );
};

export default Dialog;
