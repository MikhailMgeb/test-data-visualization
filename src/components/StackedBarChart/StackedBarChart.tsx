import React, { FC, useEffect, useState } from 'react';

import { cnStackedBarChart } from './StackedBarChart.classname';
import { getHeight, getRelativeHeight, transformData } from '../../utils';
import { Footer } from '../Footer/Footer';
import { Column } from '../Columns/Column';

import type { ResultChart, DataResponse } from '../../types';

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
                setNormative(dataResponse.norm);
                setDataChart(transformData(dataResponse));
            })
    }, [url])

    if (dataChart === undefined) {
        return (<div>Идет загрузка данных....</div>)
    }

    const relativeHeight = getRelativeHeight(dataChart);

    return (
        <div className={cnStackedBarChart()}>
            <h2 className={cnStackedBarChart('Title')}>{chartTitle}</h2>
            <div className={cnStackedBarChart('Chart')}>
                {dataChart.map((block, index) => (
                    <Column key={index} dataColumn={block} relativeHeight={relativeHeight} />
                ))}
                <div className={cnStackedBarChart('Columns')}
                >
                    <div className={cnStackedBarChart('Column', { normative: true })}
                        style={{
                            height: getHeight(normative, relativeHeight),
                        }}
                    >
                        <span className={cnStackedBarChart('NormativeValue')}>{normative || null}</span>
                    </div>
                    <div className={cnStackedBarChart('ColumnTitle')} >normative</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export { StackedBarChart };
