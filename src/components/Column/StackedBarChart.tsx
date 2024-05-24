import React, { FC, useEffect, useState } from 'react';

import { cnStackedBarChart } from './StackedBarChart.classname';
import { getHeight, getMaxHeight, transformData } from '../../utils';
import type { ResultChart, DataResponse } from './types';
import { ReactComponent as LogoNormative } from "../../assets/image/Subtract.svg";

import './StackedBarChart.css';

type StackedBarChartProps = {
    url: string;
}

const StackedBarChart: FC<StackedBarChartProps> = ({ url }) => {
    const [dataChart, setDataChart] = useState<ResultChart[]>();
    const [chartTitle, setChartTitle] = useState('');
    const [normative, setNormative] = useState(0);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((dataResponse: DataResponse) => {
                setChartTitle(dataResponse.title);
                setNormative(dataResponse.norm)
                setDataChart(transformData(dataResponse));
            })
    }, [url])

    if (dataChart === undefined) {
        return (<div>Идет загрузка данных....</div>)
    }

    const maxHeight = getMaxHeight(dataChart);

    return (
        <div className={cnStackedBarChart()}>
            <h2 className={cnStackedBarChart('Title')}>{chartTitle}</h2>
            <div className={cnStackedBarChart('Chart')} style={{}}>
                {dataChart.map((block, index) => (
                    <div className={cnStackedBarChart('Columns')} key={index} style={{}}>
                        <div className={cnStackedBarChart('Column', { front: true })}
                            style={{
                                height: getHeight(block.front, maxHeight),
                            }}
                        >
                            <span>{block.front}</span>
                        </div>
                        <div className={cnStackedBarChart('Column', { back: true })}
                            style={{
                                height: getHeight(block.back, maxHeight),
                            }}
                        >
                            <span>{block.back}</span>
                        </div>
                        <div className={cnStackedBarChart('Column', { db: true })}
                            style={{
                                height: getHeight(block.db, maxHeight),
                            }}
                        >
                            <span>{block.db}</span>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>{block.category}</div>
                    </div>
                ))}
                <div className={cnStackedBarChart('Columns')}
                >
                    <div className={cnStackedBarChart('Column')}
                        style={{
                            height: getHeight(normative, maxHeight),
                        }}
                    >
                    <LogoNormative height={getHeight(normative, maxHeight)}/>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>normative</div>
                </div>

            </div>
        </div>
    );
};

export { StackedBarChart };
