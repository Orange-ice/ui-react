import { Icon } from '../../lib';
import React from 'react';
import ExampleLayout from '../ExampleLayout';

const IconExample: React.FC = () => {
  return (
    <ExampleLayout>
      <div className="example-wrapper">
        <h2>Icon 图标</h2>
        <p>使用方法</p>

        <br/>
        <p>基本用法：</p>
        <div className="example">
          <Icon name="alipay"/>
          <Icon name="github"/>
        </div>
      </div>
    </ExampleLayout>
  );
};
export default IconExample;
