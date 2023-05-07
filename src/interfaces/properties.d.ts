export interface IProperties {
    id: number;
    name: string;
    name_l1: string;
    name_l2: string;
    externalID: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    _geoloc: {
        lat: number;
        lng: number;
    };
    geography: {
        lat: number;
        lng: number;
    };
    level: number;
    hierarchy: {
        id: number;
        level: number;
        externalID: string;
        name: string;
        name_l1: string;
        name_l2: string;
        slug: string;
        slug_l1: string;
        slug_l2: string;
    }[];
    adCount: number;
    aliases: string[];
    type: null;
    hasBuilding: boolean;
    trackID: string;
    roles: null;
    completionStatus: string;
    objectID: string;
    _highlightResult: {
        name: {
            value: string;
            matchLevel: string;
            fullyHighlighted: boolean;
            matchedWords: string[];
        };
        name_l1: {
            value: string;
            matchLevel: string;
            matchedWords: string[];
        };
        name_l2: {
            value: string;
            matchLevel: string;
            fullyHighlighted: boolean;
            matchedWords: string[];
        };
        externalID: {
            value: string;
            matchLevel: string;
            matchedWords: string[];
        };
        hierarchy: {
            externalID: {
                value: string;
                matchLevel: string;
                matchedWords: string[];
            };
            slug: {
                value: string;
                matchLevel: string;
                fullyHighlighted: boolean;
                matchedWords: string[];
            };
            slug_l1: {
                value: string;
                matchLevel: string;
                fullyHighlighted: boolean;
                matchedWords: string[];
            };
            slug_l2: {
                value: string;
                matchLevel: string;
                fullyHighlighted: boolean;
                matchedWords: string[];
            };
        }[];
    };
    coverPhoto: {
        url: string;
    };
    price: number;
    rentFrequency: string;
    rooms: number;
    title: string;
    baths: number;
    area: number;
    agency: {
        logo: {
            url: string;
        };
    };
    isVerified: boolean;
}
