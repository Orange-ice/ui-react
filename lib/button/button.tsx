import './index.scss';
import React, {ButtonHTMLAttributes} from 'react';
import classNames from '../helper/classNames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  effect?: 'primary' | 'success' | 'warning' | 'error' | 'info',
  variant?: 'outline' | 'ghost'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {variant, effect, className, children, ...rest} = props
  const classes = classNames('ice-button', className, effect, variant)
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};

export default Button;
