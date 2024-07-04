export interface Game {
    id: string;
    title: string;
    releaseDate: string;
    description: string;
    discount: number;
    originalPrice: number;
    discountPrice: number;
    reviewsSummary: string;
    reviewsCount: number;
    tags: string[];
    imageUrl: string;
    gifUrl: string;
}

export interface Category {
    id: string;
    title: string;
    imgUrl: string;
    gradientColor: string;
}
