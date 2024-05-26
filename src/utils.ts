import { CategoryKey, DataResponse, ResultChart } from './components/StackedBarChart/types';

export const transformData = (data: DataResponse): ResultChart[] => {
    const transformedData: ResultChart[] = [];

    Object.keys(data).forEach((key) => {
        if (key !== 'title' && key !== 'norm') {
            const category: CategoryKey = key as CategoryKey;
            const subCategory = data[key];
            const transformedItem: ResultChart = {
                category,
                front: subCategory.front,
                back: subCategory.back,
                db: subCategory.db
            };
            transformedData.push(transformedItem);
        }
    });
    return transformedData;
};

export function getMaxHeight(data: DataResponse) {
    return Math.max(...data.map((block: ResultChart) => block.front + block.back + block.db))
}

export function getHeight(value: number, max: number): string {

    if (Math.floor((value / max) * 300) === 0) {
        return `20px`
    }
    
    return `${Math.floor((value / max) * 300)}px`
}
