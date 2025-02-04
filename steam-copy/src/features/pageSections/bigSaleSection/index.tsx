import React from 'react'
import GameCarouselContainer from '../../../features/carouselContainers/gameCarouselContainer'
import GameCardHorizontal from '../../../features/cards/gameCardHorizontal'
import { Game } from '../../../types/gameTypes'
import styles from './style.module.scss'
import SeeMoreLink from '../../../ui/seeMoreLink'

const BigSaleSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div className={styles.bigSaleBackgroung}>
        <div className={styles.bigSaleInfoAndSeeMore}>
            <div className={styles.bigSaleInfo}>
                <span className={styles.title}>Крупные скидки</span>
                <span className={styles.description}>Особенно крупные скидки на некоторые из лучших игр всех времён</span>
            </div>
            <SeeMoreLink text='Просмотреть всё' />
        </div>
        <GameCarouselContainer games={games} CardComponent={(props) => <GameCardHorizontal {...props} size="Large" />} />
    </div>
)

export default BigSaleSection
