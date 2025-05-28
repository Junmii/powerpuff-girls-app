export interface Episode {
    id: number;
    image: ImageObject;
    summary?: string;
    name: string;
    season: string;
    number: string;
}

export interface Series {
    id: number;
    image: ImageObject;
    summary: string;
    name: string;
    genres: string[];
}

interface ImageObject {
    medium?: string;
    original?: string;    
}