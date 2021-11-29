import React, {
    HTMLAttributes,
    MouseEventHandler,
    TouchEventHandler,
    UIEventHandler,
    useEffect,
    useRef,
    useState
} from 'react';
import './scroll.scss';
import scrollBarWidth from './scrollBar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {
    onPull?: () => void; // 下拉刷新方法
}

const Scroll: React.FC<Props> = (props) => {
    const {children, onPull, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0); // 滚动条高度
    const [barTop, _setBarTop] = useState(0); // 滚动条滚动的高度
    const containerRef = useRef<HTMLDivElement>(null);

    const draggingRef = useRef(false); // 鼠标是否处于按下状态
    const firstYRef = useRef(0); // 鼠标点击时，鼠标距离容器顶部的距离
    const firstBarTopRef = useRef(0); // 鼠标点击时，已滚动的高度

    const [barVisible, setBarVisible] = useState(false); // 控制滚动条可见性

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

    const timeIdRef = useRef<number | null>(null);
    const onScroll: UIEventHandler = (e) => {
        setBarVisible(true);
        // 计算滚动的高度
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollTop = current!.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
        if (timeIdRef.current !== null) window.clearTimeout(timeIdRef.current);
        timeIdRef.current = window.setTimeout(() => {
            setBarVisible(false);
        }, 300);
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

    const [translateY, _setTranslateY] = useState(0);
    const setTranslateY = (val: number) => {
        if (val < 0) {
            val = 0;
        } else if (val > 60) {
            val = 60;
        }
        _setTranslateY(val);
    };
    // 上次手指的位置
    const lastYRef = useRef(0);
    // 是否处于下拉刷新状态
    const polling = useRef(false);
    const moveCount = useRef(0); // 记录划动次数，第一次滑动才进入下拉更新

    const onTouchStart: TouchEventHandler = (e) => {
        // scrollTop为0时才可进入下拉更新状态
        const scrollTop = containerRef.current!.scrollTop;
        if (scrollTop !== 0) return;
        polling.current = true;
        lastYRef.current = e.touches[0].clientY;
        moveCount.current = 0;
    };

    const onTouchMove: TouchEventHandler = (e) => {
        const deltaY = e.touches[0].clientY - lastYRef.current;
        moveCount.current += 1;
        // deltaY < 0 时是往上划
        if (moveCount.current === 1 && deltaY < 0) {
            polling.current = false;
            return;
        }
        if (!polling.current) return;
        setTranslateY(translateY + deltaY);
        lastYRef.current = e.touches[0].clientY;
    };

    const onTouchEnd: TouchEventHandler = () => {
        if (polling.current) {
            setTranslateY(0);
            onPull?.();
            polling.current = false;
        }
    };

    return (
        <div className="ice-scroll" {...rest}>
            <div className="ice-scroll-inner"
                 style={{right: -scrollBarWidth(), transform: `translateY(${translateY}px)`}}
                 onScroll={onScroll}
                 ref={containerRef}
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
            >
                {children}
            </div>
            {barVisible && <div className="ice-scroll-track">
                <div className="ice-scroll-track-bar"
                     onMouseDown={onMouseDownBar}
                     style={{height: barHeight, transform: `translateY(${barTop}px)`}}/>
            </div>}

        </div>
    );
};

export default Scroll;
