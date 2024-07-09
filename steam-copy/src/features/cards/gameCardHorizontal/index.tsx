import React from 'react'
import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'
import { useState } from 'react'
import GamePrice from '../../../ui/gamePrice'

interface GameCardHorizontalProps {
    game: Game
    size: 'Large' | 'Medium' | 'Small'
}

const GameCardHorizontal: React.FC<GameCardHorizontalProps> = ({ game, size }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
    setIsHovered(true)
    }

    const handleMouseLeave = () => {
    setIsHovered(false)
    }
    return (
        <div
            className={`${styles.mainBox} ${styles[size.toLowerCase()]}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${isHovered ? game.gifUrl : game.imageUrl})` }}
            />
            <GamePrice
                location='left'
                discount={game.discount}
                originalPrice={game.originalPrice}
                discountPrice={game.discountPrice}
            />
            <div className={styles.tooltip}>
                <div className={styles.gameTitle}>{game.title}</div>
                <div className={styles.releaseDate}>Дата выпуска: {game.releaseDate}</div>
                <div className={styles.description}>{game.description}</div>
                <div className={styles.gameReviews}>
                    <span>Все обзоры: </span>
                    <div>
                        <span className={styles.summaryReviews}>{game.reviewsSummary}</span>
                        <span>({game.reviewsCount})</span>
                    </div>
                </div>
                <div className={styles.playersTags}>
                    <span>Пользовательские метки:</span>
                    <div className={styles.gameTags}>
                        {game.tags.map((tag, index) => (
                            <div key={index} className={styles.tag}>{tag}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCardHorizontal
