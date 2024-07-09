import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'
import PageIndicators from '../../../ui/pageIndicators'
import CarouselButton from '../../../ui/CarouselButton'

interface GameCarouselContainerProps {
    games: Game[]
    CardComponent: React.FC<{ game: Game }>
}

const GameCarouselContainer: React.FC<GameCarouselContainerProps> = ({ games, CardComponent }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const [isPrev, setIsPrev] = useState(false)
    const gamesPerPage = 3
    const totalPages = Math.ceil(games.length / gamesPerPage)
    const [currentGames, setCurrentGames] = useState<Game[]>([])

    useEffect(() => {
        const startIndex = currentPage * gamesPerPage
        const newGames = games.slice(startIndex, startIndex + gamesPerPage)
        setCurrentGames(newGames)
    }, [currentPage, games])

    const handlePrevPage = () => {
        setIsLoading(true)
        setIsPrev(true)
        setTimeout(() => {
            setIsPrev(false)
            setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
            setIsLoading(false)
        }, 100)
    }

    const handleNextPage = () => {
        setIsLoading(true)
        setIsNext(true)
        setTimeout(() => {
            setIsNext(false)
            setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
            setIsLoading(false)
        }, 100)
    }

    const handlePageIndicatorClick = (pageIndex: number) => {
        setIsLoading(true)
        setTimeout(() => {
            setCurrentPage(pageIndex)
            setIsLoading(false)
        }, 100)
    }

    return (
        <>
            <div className={styles.carouselContainer}>
                <CarouselButton direction="prev" onClick={handlePrevPage} />
                <div className={`
                    ${styles.gamesContainer}
                    ${isLoading ? styles.hidden : ''}
                    ${isNext ? styles.next : ''}
                    ${isPrev ? styles.prev : ''}
                `}>
                    {currentGames.map(game => (
                            <CardComponent game={game} key={game.id} />
                    ))}
                </div>
                <CarouselButton direction="next" onClick={handleNextPage} />
            </div>
            <PageIndicators
                totalPages={totalPages}
                currentPage={currentPage}
                onPageIndicatorClick={handlePageIndicatorClick}
            />
        </>
    )
}

export default GameCarouselContainer