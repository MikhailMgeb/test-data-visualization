import React, { FC, useEffect, useRef, useState } from 'react';

import { cnColumn } from './Column.classname';
import { getArrowHeight, getHeight } from '../../utils';

import './Column.css';
import { Arrow } from '../Arrow/Arrow';


type ColumnProps = {
    dataColumn: {
        front: number;
        back: number;
        db: number;
        category: string;
    }
    relativeHeight: number
}

const Column: FC<ColumnProps> = ({ dataColumn, relativeHeight }) => {
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
        <div ref={arrowRef} className={cnColumn()}>
            <div className={cnColumn('Block', { front: true })}
                style={{
                    height: getHeight(front, relativeHeight),
                }}
            >
                <span>{front}</span>
            </div>
            <div className={cnColumn('Block', { back: true })}
                style={{
                    height: getHeight(back, relativeHeight),
                }}
            >
                <span>{back}</span>
            </div>

            <div className={cnColumn('Block', { db: true })}
                style={{
                    height: getHeight(db, relativeHeight),
                }}
            >
                <span>{db}</span>
            </div>
            <div className={cnColumn('BlockTitle')}>{category}</div>
        </div>
    );
};

export { Column };
