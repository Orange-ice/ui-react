import React, {HTMLAttributes, MouseEventHandler, UIEventHandler, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollBarWidth from './scrollBar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FC<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0); // 滚动条高度
    const [barTop, _setBarTop] = useState(0); // 滚动条滚动的高度
    const containerRef = useRef<HTMLDivElement>(null);

    const draggingRef = useRef(false); // 鼠标是否处于按下状态
    const firstYRef = useRef(0); // 鼠标点击时，鼠标距离容器顶部的距离
    const firstBarTopRef = useRef(0); // 鼠标点击时，已滚动的高度

    // 设置 _setBarTop 的限制
    const setBarTop = (number: number) => {
        if (number < 0) return;
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) return;
        _setBarTop(number);
    };

    useEffect(() => {
        computedBarHeight();
    }, []);

    // 绑定监听事件
    useEffect(() => {
        document.addEventListener('mousemove', onMouseMoveBar);
        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('selectstart', onSelect);
        return () => {
            document.removeEventListener('mousemove', onMouseMoveBar);
            document.removeEventListener('mouseup', onMouseUpBar);
            document.removeEventListener('selectstart', onSelect);
        };
    }, []);

    const onSelect = (e: Event) => {
        if (draggingRef.current) e.preventDefault();
    };

    const onScroll: UIEventHandler = (e) => {
        // 计算滚动的高度
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollTop = current!.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
    };

    // 计算滚动条高度（在mounted阶段执行，containerRef.current 不会为空）
    const computedBarHeight = () => {
        const scrollHeight = containerRef.current!.scrollHeight;
        const viewHeight = containerRef.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    };

    // 监听鼠标按下
    const onMouseDownBar: MouseEventHandler = (e) => {
        console.log('start');
        draggingRef.current = true;
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop;
    };
    // 监听鼠标移动
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            const newBarTop = firstBarTopRef.current + delta;
            setBarTop(newBarTop);
            // 让内容同步滚动
            const scrollHeight = containerRef.current!.scrollHeight;
            const viewHeight = containerRef.current!.getBoundingClientRect().height;
            containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    };
    // 监听鼠标松开
    const onMouseUpBar = (e: MouseEvent) => {
        draggingRef.current = false;
    };
    return (
        <div className="ice-scroll" {...rest}>
            <div className="ice-scroll-inner"
                 style={{right: -scrollBarWidth()}}
                 onScroll={onScroll}
                 ref={containerRef}
            >
                {children}
            </div>
            <div className="ice-scroll-track">
                <div className="ice-scroll-track-bar"
                     onMouseDown={onMouseDownBar}
                     style={{height: barHeight, transform: `translateY(${barTop}px)`}}/>
            </div>
        </div>
    );
};

export default Scroll;
