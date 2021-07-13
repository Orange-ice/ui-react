import React from 'react';
import Input from '../input/input';
interface FieldsItem {
  name: string,
  label: string,
  input: { type: string }
}

export interface FormValue {
  [K: string]: any
}

interface FormProps {
  value: FormValue,
  fields: Array<FieldsItem>,
  buttons: React.ReactFragment,
  onChange: (value: FormValue) => void,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  errors: { [K: string]: string[] }
}

const Form: React.FC<FormProps> = (props) => {
  const {fields, buttons, value, onChange, onSubmit, errors} = props;
  const onInputChange = (name: string, val: string) => {
    const newFormValue = {...value, [name]: val};
    onChange(newFormValue);
  };
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={onFormSubmit}>
      {fields.map(field =>
        <div key={field.name}>
          {field.label}
          <Input
            type={field.input.type}
            value={value[field.name]}
            onChange={(e) => onInputChange(field.name, e.target.value)}/>
          <div>{errors[field.name]}</div>
        </div>
      )}
      <div>{buttons}</div>
    </form>
  );
};

export default Form;