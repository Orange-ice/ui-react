import React from 'react'
import Icon from '../icon'
import rederer from 'react-test-renderer'
import {mount} from 'enzyme'

describe('Icon 组件测试', () => {
  it('渲染', function () {
    const dom = rederer.create(<Icon name={'github'}/>).toJSON()
    expect(dom).toMatchSnapshot()
  })
  it('click事件', () => {
    const fn = jest.fn()
    const component = mount(<Icon name={'github'} onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
