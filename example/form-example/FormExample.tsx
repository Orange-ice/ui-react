import React, {useState} from 'react';
import Form, {FormValue} from '../../lib/form/form';
import Validator from '../../lib/form/validator';
import ExampleLayout from '../ExampleLayout';
import {Button} from '../../lib';

const FormExample = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'burt',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const [errors, setErrors] = useState({})
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 5},
      {key: 'username', maxLength: 8},
      {key: 'password', required: true}
    ]
    console.log(Validator(formData, rules));
    setErrors(Validator(formData, rules))
  };
  return (
    <ExampleLayout>
      <Form
        value={formData}
        fields={fields}
        onChange={(val) => setFormData(val)}
        onSubmit={onSubmit}
        errors={errors}
        buttons={
          <>
            <Button effect="primary">登录</Button>
          </>
        }/>
    </ExampleLayout>
  );
};

export default FormExample;