/**
 * @desc 获取当前浏览器得滚动条的宽度
 * @return width 滚动条的宽度
 * */
const scrollBarWidth = () => {
    const div = document.createElement('div');
    div.style.position = 'position';
    // 把 div 放在屏幕之外，防止影响用户
    div.style.top = div.style.left = '-9999px';
    div.style.width = div.style.height = '100px';
    div.style.overflow = 'scroll';

    document.body.appendChild(div);

    const width = div.offsetWidth - div.clientWidth;

    document.body.removeChild(div);

    return width;
};

export default scrollBarWidth;
