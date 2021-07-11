import React, {useState} from 'react';
import Form, {FormValue} from '../../lib/form/form';
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
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    console.log(formData);
  };
  return (
    <ExampleLayout>
      <Form
        value={formData}
        fields={fields}
        onChange={(val) => setFormData(val)}
        onSubmit={onSubmit}
        buttons={
          <>
            <Button effect="primary">登录</Button>
          </>
        }/>
    </ExampleLayout>
  );
};

export default FormExample;