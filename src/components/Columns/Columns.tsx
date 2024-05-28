import React, { FC } from 'react';

import { cnColumns } from './Columns.classname';
import { getHeight } from '../../utils';

import './Columns.css';

type ColumnsProps = {
    dataColumn: {
        front: number;
        back: number;
        db: number;
        category: string;
    }
    relativeHeight: number
}

const getArrowHeight = (total: number) => {
    console.log(total)
    return (200 - total);
}

const Columns: FC<ColumnsProps> = ({ dataColumn, relativeHeight }) => {
    const { front, back, db, category } = dataColumn;
    const totalHeightColumn = front + back + db;

    return (
        <aside className={cnColumns('Columns')}>
            <div className={cnColumns('Column', { arrow: true })}
                style={{
                    height: getArrowHeight(totalHeightColumn),
                }}
            >
                <svg height="210" width="500">
                    <line
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="200"
                        style={{
                            stroke: 'rgb(255, 0, 0)',
                            strokeWidth: 2
                        }}
                    />
                </svg> </div>
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
        </aside>
    );
};

export { Columns };
