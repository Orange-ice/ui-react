import React from 'react';
import Input from '../input/input';
import './form.scss';

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
      <table className="ice-form-table">
        <tbody>
        {fields.map(field =>
          <tr className="ice-form-tr" key={field.name}>
            <td className="ice-form-td">
              <span className="ice-form-label">{field.label}</span>
            </td>
            <td className="ice-form-td">
              <Input
                type={field.input.type}
                value={value[field.name]}
                onChange={(e) => onInputChange(field.name, e.target.value)}/>
              <div className="ice-form-error">{errors[field.name] || <span>&nbsp;</span>}</div>
            </td>
          </tr>
        )}
        <tr className="ice-form-tr">
          <td className="ice-form-td"/>
          <td className="ice-form-td">
            <div>{buttons}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;