import React from 'react'
import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'
import { useState } from 'react'

interface GameCarouselContainerProps {
    games: Game[]
    CardComponent: React.FC<{ game: Game }>
}

const GameCarouselContainer: React.FC<GameCarouselContainerProps> = ({ games, CardComponent }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const gamesPerPage = 3

    const totalPages = Math.ceil(games.length / gamesPerPage)

    const handlePrevPage = () => {
        setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
    }

    const handlePageIndicatorClick = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }

    const getCurrentGames = () => {
        const startIndex = currentPage * gamesPerPage
        return games.slice(startIndex, startIndex + gamesPerPage)
    }

    return (
        <>
            <div className={styles.carouselContainer}>
                <button onClick={handlePrevPage} className={styles.navButton}>❮</button>
                <div className={styles.gamesContainer}>
                    {getCurrentGames().map(game => (
                        <CardComponent key={game.id} game={game} />
                    ))}
                </div>
                <button onClick={handleNextPage} className={styles.navButton}>❯</button>
            </div>
            <div className={styles.pageIndicators}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`${styles.pageIndicator} ${index === currentPage ? styles.active : ''}`}
                        onClick={() => handlePageIndicatorClick(index)}
                    />
                ))}
            </div>
        </>
    )
}

export default GameCarouselContainer
