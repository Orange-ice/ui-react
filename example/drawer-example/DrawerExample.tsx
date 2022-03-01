import React from 'react';
import ExampleLayout from '../ExampleLayout';
import Drawer from '../../lib/drawer/drawer';
import {Button} from '../../lib';

const DrawerExample = () => {
  const [visible, setVisible] = React.useState(false);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ExampleLayout>
      <Button onClick={() => setVisible(!visible)}>打开</Button>
      <Drawer visible={visible} onClose={onClose} hideHeader={true}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </ExampleLayout>
  );
};


export default DrawerExample;
