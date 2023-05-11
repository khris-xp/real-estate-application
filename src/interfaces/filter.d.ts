export interface IFilterItem {
    name: string;
    value: string;
}

export interface IFilterDataItem {
    items: IFilterItem[];
    placeholder: string;
    queryName: string;
}

export interface IFilterValues {
    purpose?: string;
    rentFrequency?: string;
    categoryExternalID?: string;
    minPrice?: string;
    maxPrice?: string;
    areaMax?: string;
    roomsMin?: string;
    bathsMin?: string;
    sort?: string;
    locationExternalIDs?: string;
}