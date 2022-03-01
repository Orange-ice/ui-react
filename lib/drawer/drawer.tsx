import React from 'react';
import ReactDOM from 'react-dom';
import './drawer.scss';
import joinClass from '../helper/joinClass';
import {Icon} from '../index';

interface DrawerProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  /** 隐藏 header 部分 */
  hideHeader?: boolean;
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const {visible, onClose, children, title, hideHeader} = props;
  const drawerClass = joinClass('ice-drawer', visible ? 'visible' : 'invisible');
  const maskClass = joinClass('ice-drawer-mask', visible ? 'visible' : '');
  return (
    ReactDOM.createPortal((
      <>
        {/* 遮罩层 */}
        <div className={maskClass} onClick={onClose}/>
        {/* 抽屉内容 */}
        <div className={drawerClass}>
          {!hideHeader &&
            <header className="ice-drawer-header">
              <Icon className="ice-drawer-close" name={'close'} onClick={onClose}/>
              <span className="ice-drawer-title">{title}</span>
            </header>}
          <div className="ice-drawer-content">
            {children}
          </div>
        </div>
      </>
    ), document.body));
};


Drawer.defaultProps = {
  title: '标题',
  hideHeader: false
};

export default Drawer;
