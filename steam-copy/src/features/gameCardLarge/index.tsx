import React from 'react';
import styles from './style.module.scss';

export interface Game {
    id: number;
    title: string;
    image: string;
    gif: string;
    discount: string;
    originalPrice: string;
    discountPrice: string;
    reviews: {
        summary: string;
        count: number;
    };
    tags: string[];
}

interface GameCardLargeProps {
    game: Game;
}

const GameCardLarge: React.FC<GameCardLargeProps> = ({ game }) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${game.image})` }}>
                <div className={styles.gamePriceBox}>
                    <div className={styles.discount}>
                        <span>{game.discount}</span>
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
                <div className={styles.gameGif} style={{ backgroundImage: `url(${game.gif})` }} />
                <div className={styles.gameInfoAndBuyButton}>
                    <div className={styles.gameTitle}>{game.title}</div>
                    <div className={styles.gameReviews}>
                        <span className={styles.summaryReviews}>{game.reviews.summary} </span>
                        <span>({game.reviews.count})</span>
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
    );
};

export default GameCardLarge;
