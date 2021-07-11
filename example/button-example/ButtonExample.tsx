import React from 'react';
import { Button } from '../../lib';
import ExampleLayout from '../ExampleLayout';
import './buttonExample.scss'

const ButtonExample: React.FC = () => {
  return (
    <ExampleLayout>
      <div className="wrapper">
        <h2>Button 按钮</h2>
        <p>使用方法</p>

        <br/>
        <p>基本用法：</p>
        <div className="buttons">
          <Button>Default</Button>
          <Button effect="primary">Primary</Button>
          <Button variant="outline" effect="primary">Outline</Button>
          <Button effect="primary" disabled>Disable</Button>
        </div>
      </div>
    </ExampleLayout>
  );
};

export default ButtonExample;
