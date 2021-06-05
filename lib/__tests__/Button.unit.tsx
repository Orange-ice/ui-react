import React from 'react';
import rederer from 'react-test-renderer'
import Button from '../Button';
describe('Button组件', () => {
  it('是个button', () => {
    const dom = rederer.create(<Button/>).toJSON()
    expect(dom).toMatchInlineSnapshot(`
<button>
  按钮
</button>
`)
  })
})
