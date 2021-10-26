import React, {HTMLAttributes} from 'react';
import './scroll.scss';
import scrollBarWidth from './scrollBar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FC<Props> = (props) => {
    const {children, ...rest} = props;
    return (
        <div className="ice-scroll" {...rest}>
            <div className="ice-scroll-inner" style={{right: -scrollBarWidth()}}>
                {children}
            </div>
        </div>
    );
};

export default Scroll;
