import React, {HTMLAttributes, UIEventHandler, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollBarWidth from './scrollBar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FC<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0); // 滚动条高度
    const [barTop, setBarTop] = useState(0); // 滚动条滚动的高度
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        computedBarHeight();
    }, []);

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
                     style={{height: barHeight, transform: `translateY(${barTop}px)`}}/>
            </div>
        </div>
    );
};

export default Scroll;
