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

export interface IPropertiesDetails {
    id: number
    objectID: number
    ownerID: number
    userExternalID: string
    sourceID: number
    state: string
    geography: Geography
    purpose: string
    price: number
    product: string
    productLabel: string
    rentFrequency: any
    referenceNumber: string
    permitNumber: string
    title: string
    title_l1: string
    description: string
    description_l1: string
    externalID: string
    slug: string
    slug_l1: string
    location: ILocation[]
    category: ICategory[]
    createdAt: number
    approvedAt: number
    updatedAt: number
    touchedAt: number
    reactivatedAt: number
    rooms: number
    baths: number
    area: number
    score: number
    score_l1: number
    coverPhoto: CoverPhoto
    photoCount: number
    videoCount: number
    panoramaCount: number
    photos: IPhoto[]
    floorPlans: any[]
    videos: any[]
    panoramas: any[]
    amenities: any[]
    phoneNumber: PhoneNumber
    contactName: string
    agency: Agency
    active: boolean
    hasExactGeography: boolean
    verification: Verification
    isVerified: boolean
    completionStatus: string
    randBoostScore: number
    randBoostScore_l1: number
    furnishingStatus: any
    extraFields: any
    type: string
    cityLevelScore: number
    indyScore: number
    indyScore_l1: number
    hasMatchingFloorPlans: boolean
}

export interface IAmenities {
    text: string
}

export interface IGeography {
    lat: number
    lng: number
}

export interface ILocation {
    id: number
    level: number
    externalID: string
    name: string
    name_l1: string
    slug: string
    slug_l1: string
}

export interface ICategory {
    id: number
    level: number
    externalID: string
    name: string
    name_l1: string
    slug: string
    slug_l1: string
    nameSingular: string
    nameSingular_l1: string
}

export interface ICoverPhoto {
    id: number
    externalID: string
    title: string
    url: string
    orderIndex: number
    nimaScore: number
    main: boolean
}

export interface IPhoto {
    id: number | string
    externalID: string
    title: string
    url: string
    orderIndex: number
    nimaScore: number
}

export interface IPhoneNumber {
    mobile: string
    phone: string
    whatsapp: string
    proxyMobile: string
    phoneNumbers: string[]
    mobileNumbers: string[]
}

export interface IAgency {
    id: number
    objectID: number
    name: string
    name_l1: string
    externalID: string
    product: string
    productScore: number
    licenses: License[]
    logo: Logo
    slug: string
    slug_l1: string
    tier: number
}

export interface ILicense {
    number: string
    authority: string
}

export interface ILogo {
    id: number
    url: string
}

export interface IVerification {
    status: string
    type: any
    eligible: boolean
    comment: any
    updatedAt: number
    verifiedAt: any
    visitedAt: any
}
