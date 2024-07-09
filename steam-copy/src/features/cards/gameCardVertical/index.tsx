import React from 'react'
import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'
import GamePrice from '../../../ui/gamePrice'

interface GameCardVerticalProps {
    game: Game
}

const GameCardVertical: React.FC<GameCardVerticalProps> = ({ game }) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${game.imageUrl})` }}>
                <div className={styles.gamePriceHover}>
                    <GamePrice
                        location='right'
                        discount={game.discount}
                        originalPrice={game.originalPrice}
                        discountPrice={game.discountPrice}
                    />
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
