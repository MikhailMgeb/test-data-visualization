import React from 'react';

import { cnFooter } from './Footer.classname';

import './Footer.css';

const Footer = () => {
    return (
        <footer className={cnFooter()}>
            <div className={cnFooter('Legend')}>
                <div className={cnFooter('ColoredSquare', { color: "blue" })}></div>
                <span>Клиентская часть</span>
            </div>
            <div className={cnFooter('Legend')}>
                <div className={cnFooter('ColoredSquare', { color: "violet" })}></div>
                <span>Серверная часть</span>
            </div>
            <div className={cnFooter('Legend')}>
                <div className={cnFooter('ColoredSquare', { color: "pink" })}></div>
                <span>База данных</span>
            </div>
        </footer>
    );
}

export { Footer };
