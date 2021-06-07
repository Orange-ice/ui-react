import classNames from '../classNames';

describe('函数classNames的功能测试', () => {
  it('接收参数测试', () => {
    expect(classNames('a')).toEqual('a'); // 一个参数
    expect(classNames('a', 'example')).toEqual('a example'); // 2 个参数
    expect(classNames('a', undefined)).toEqual('a'); // undefined 测试
    expect(classNames('a', 'b', undefined, '你好', '__')).toEqual('a b 你好 __'); // 奇怪的参数及多个参数
  })
})
