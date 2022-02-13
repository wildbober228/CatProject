export interface IImage {
    id: number;
    height: number;
    url?: string| undefined;
    width: number;
}

export interface ICat {
    id: string;
    name: string;
    life_span_max?: number;
    life_span_min?: number;
    origin?: string;
    country_code?: string;
    description?: string;
    temperament?: string;
    adaptability?: number;
    affection_level?: number;
    child_friendly?: number;
    dog_friendly?: number;
    energy_level?: number;
    experimental?: number;
    grooming?: number;
    hairless?: number;
    image: IImage;
}

export interface ICatInfo {
    breeds: IBreeds;
    id: number;
    height: number;
    url: string;
    width: number;
}

export interface IWeight {
    metric: string;
}

export interface IBreeds {
    id: number;
    name: string;
    description: string;
    temperament: string;
    origin: string;
    weight: IWeight
}
