import React from 'react'
import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'

interface GameCardVerticalProps {
    game: Game
}

const GameCardVertical: React.FC<GameCardVerticalProps> = ({ game }) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${game.imageUrl})` }}>
                <div className={styles.gamePriceBox}>
                    <div className={styles.discount}>
                        <span>{game.discount}%</span>
                    </div>
                    <div className={styles.originalPrice}>
                        <span>{game.originalPrice}</span>
                    </div>
                    <div className={styles.discountPrice}>
                        <span>{game.discountPrice}</span>
                    </div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.gameGif} style={{ backgroundImage: `url(${game.gifUrl})` }} />
                <div className={styles.gameInfoAndBuyButton}>
                    <div className={styles.gameTitle}>{game.title}</div>
                    <div className={styles.gameReviews}>
                        <span className={styles.summaryReviews}>{game.reviewsSummary} </span>
                        <span>({game.reviewsCount})</span>
                    </div>
                    <div className={styles.gameTags}>
                        {game.tags.map((tag, index) => (
                            <div key={index} className={styles.tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <a href="/" className={styles.buyButton}>
                        В корзину
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GameCardVertical
