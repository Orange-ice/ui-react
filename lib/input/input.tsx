import React, {InputHTMLAttributes} from 'react';
import joinClass from '../helper/joinClass';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <input className={joinClass('ice-input', className)} {...rest}/>
  );
};

export default Input;