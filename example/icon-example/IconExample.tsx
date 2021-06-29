import { Icon } from '../../lib';
import React from 'react';
import ExampleLayout from '../ExampleLayout';

const IconExample: React.FC = () => {
  return (
    <ExampleLayout>
      <div>
        <Icon name="alipay"/>
        <Icon name="github"/>
      </div>
    </ExampleLayout>
  );
};
export default IconExample;
