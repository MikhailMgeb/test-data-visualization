import React, { FC } from 'react';

type HorizontalLineProps = {
    x1: number;
    x2: number;
    y: number;
}

const HorizontalLine: FC<HorizontalLineProps> = ({ x1, x2, y }) => (
    <svg height="100%" width="100%">
        <line
            x1={x1}
            y1={y}
            x2={x2}
            y2={y}
            style={{
                stroke: 'black',
                strokeWidth: 2
            }}
        />
    </svg>
);

export { HorizontalLine }
