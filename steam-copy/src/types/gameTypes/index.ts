export interface Game {
    id: string
    title: string
    releaseDate: string
    description: string
    discount: number
    originalPrice: number
    discountPrice: number
    reviewsSummary: string
    reviewsCount: number
    tags: string[]
    imageUrl: string
    gifUrl: string
}

export interface Category {
    id: string
    title: string
    imgUrl: string
    gradientColor: string
}

export interface Data {
    games: Game[]
    firstTableGames: Game[]
    bigDiscountGames: Game[]
    secondTableGames: Game[]
    categories: Category[]
    saleLeadersGames: Game[]
    upToThreeHundredRublesGames: Game[]
    newUpComingGames: Game[]
    [key: string]: Game[] | Category[]
}
