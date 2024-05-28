import React, { FC } from 'react';

type VerticalArrowProps = {
    height?: number;
}

const VerticalArrow: FC<VerticalArrowProps> = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 210"
            preserveAspectRatio="none"
        >
            <line
                x1="50"
                y1="0"
                x2="50"
                y2="100%"
                style={{
                    stroke: 'black',
                    strokeWidth: 2
                }}
            />
        </svg>
    );
};

export { VerticalArrow };
