import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Icon} from '../index';
import Button from '../button/button';

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
  return ReactDOM.createPortal((
    props.visible ?
      <>
        <div className={'ice-dialog-mask'} onClick={onClickMask}/>
        <div className={'ice-dialog'}>
          <Icon className={'ice-dialog-close'} name={'close'} onClick={onClose}/>
          <header className={'ice-dialog-header'}>{options?.title || '提示'}</header>
          <main className={'ice-dialog-main'}>{content}</main>
          <footer className={'ice-dialog-footer'}>
            {!options?.hideCancel && <Button onClick={onClose}>{options?.cancelText || '取消'}</Button>}
            <Button effect='primary' onClick={onConfirm || onClose}>{options?.confirmText || '确认'}</Button>
          </footer>
        </div>
      </> :
      null
  ), document.body);
};

const alert = (content: string | React.ReactNode, onConfirm?: () => boolean, options?: PropsOptions) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const confirm = () => {
    if (onConfirm) {
      const result = onConfirm();
      result && onClose();
    }else{
      onClose()
    }
  };
  const component = <Dialog
    visible={true}
    content={<div>{content}</div>}
    onConfirm={confirm}
    options={{hideCancel: true, ...options}}
    onClose={onClose}/>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

export {alert};

export default Dialog;
