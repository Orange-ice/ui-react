import React from 'react';
import { Button } from '../../lib';
import ExampleLayout from '../ExampleLayout';

const ButtonExample: React.FC = () => {
  return (
    <ExampleLayout>
      <div>
        <Button>Default</Button>
        <Button effect="primary">Primary</Button>
        <Button variant="ghost" effect="primary">Ghost</Button>
        <Button variant="outline" effect="primary">Outline</Button>
        <Button effect="primary" disabled>Disable</Button>
      </div>
    </ExampleLayout>
  );
};

export default ButtonExample;
