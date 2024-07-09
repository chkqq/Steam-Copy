import React from 'react'
import styles from './style.module.scss'

interface GamePriceProps {
    location: 'left' | 'right'
    discount: number
    originalPrice: number
    discountPrice: number
}

const GamePrice: React.FC<GamePriceProps> = ({ location, discount, originalPrice, discountPrice }) => {
    return (
        <div className={`${styles.gamePriceBox} ${styles[location]}`}>
            <div className={styles.discount}>
                <span>{`-${discount}%`}</span>
            </div>
            <div className={styles.originalPrice}>
                <span>{originalPrice}</span>
            </div>
            <div className={styles.discountPrice}>
                <span>{discountPrice}</span>
            </div>
        </div>
    )
}

export default GamePrice
