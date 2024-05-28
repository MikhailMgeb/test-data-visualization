import React, { FC, useEffect, useRef, useState } from 'react';

import { cnColumns } from './Columns.classname';
import { getArrowHeight, getHeight } from '../../utils';
import { VerticalArrow } from '../Arrow/Arrow';

import './Columns.css';
import { HorizontalLine } from '../Arrow/HorizontalArrow';

type ColumnsProps = {
    dataColumn: {
        front: number;
        back: number;
        db: number;
        category: string;
    }
    relativeHeight: number
}

const Columns: FC<ColumnsProps> = ({ dataColumn, relativeHeight }) => {
    const [arrowHeight, setArrowHeight] = useState(0);
    const arrowRef = useRef<HTMLDivElement>(null);

    const { front, back, db, category } = dataColumn;

    useEffect(() => {
        if (arrowRef.current) {
            const height = arrowRef.current.getBoundingClientRect().height;
            console.log(height)
            setArrowHeight(getArrowHeight(height));
        }
    }, [arrowRef]);

    return (
        <div ref={arrowRef} className={cnColumns('Columns')}>
            <div className={cnColumns('Column', { arrow: true })}
                style={{
                    height: arrowHeight,
                }}
            >
                <VerticalArrow />
            </div>
            <div className={cnColumns('Column', { front: true })}
                style={{
                    height: getHeight(front, relativeHeight),
                }}
            >
                <span>{front}</span>
            </div>
            <div className={cnColumns('Column', { back: true })}
                style={{
                    height: getHeight(back, relativeHeight),
                }}
            >
                <span>{back}</span>
            </div>
            <div className={cnColumns('Column', { db: true })}
                style={{
                    height: getHeight(db, relativeHeight),
                }}
            >
                <span>{db}</span>
            </div>
            <div className={cnColumns('ColumnTitle')}>{category}</div>
        </div>
    );
};

export { Columns };
