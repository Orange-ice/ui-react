import {FormValue} from './form';

interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp
}

type FormRules = Array<FormRule>

interface FormErrors {
  [K: string]: string[]
}

// 判断是否为空
const isEmpty = (value: any) => {
  if (value instanceof Array) {
    return value.length === 0;
  }
  if (value instanceof Object) {
    return Object.keys(value).length === 0;
  }
  return !value;
};

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  const errors: any = {};

  const addError = (key: string, msg: string) => {
    if (!errors[key]) {
      errors[key] = [];
    }
    errors[key].push(msg);
  };

  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, 'required')
    }
    if(rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, 'minLength');
    }
    if(rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, 'maxLength');
    }
    if(rule.pattern && !(rule.pattern.test(value))){
      addError(rule.key, 'pattern');
    }
  });
  return errors
};

export default Validator;