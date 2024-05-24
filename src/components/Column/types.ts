export type SubCategory = {
    front: number;
    back: number;
    db: number;
}

export type DataResponse = {
    title: string,
    dev: SubCategory,
    test: SubCategory,
    prod: SubCategory,
    norm: number
} & any;

export type CategoryKey = "dev" | "test" | "prod";

export type ResultChart = { category: CategoryKey, front: number, back: number, db: number };

export type TransformedItem = {
    category: string;
    front: number;
    back: number;
    db: number;
};
