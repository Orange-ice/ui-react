import React, {useState} from 'react';
import ExampleLayout from '../ExampleLayout';
import {Dialog, alert} from '../../lib';
import {Button} from '../../lib';

const DialogExample = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    alert('这是 alert 打开的对话框。');
  };
  return (
    <ExampleLayout>
      <div className="example-wrapper">
        <h2>Dialog 对话框</h2>
        <p>使用方法</p>

        <br/>
        <p>基本用法：</p>
        <div className="example">
          <Button effect="primary" onClick={onClick}>点击打开（alert）</Button>

          <Button effect="primary" onClick={() => setVisible(true)}>点击打开</Button>
          <Dialog
            visible={visible}
            content={
              <div>
                <strong>你好</strong>，这是一段<em>信息。</em>
              </div>
            }
            onClose={() => {
              setVisible(false);
            }}/>
        </div>
      </div>
    </ExampleLayout>
  );
};

export default DialogExample;
