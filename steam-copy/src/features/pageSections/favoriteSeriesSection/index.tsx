import styles from '../style.module.scss'
import { Game } from '../../../types/gameTypes'
import GameCarouselContainer from '../../../features/carouselContainers/gameCarouselContainer'
import GameCardVertical from '../../../features/cards/gameCardVertical'

const FavoriteSeriesSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div className={styles.FavoriteSeries}>
        <span className={styles.tablesTitle}>Избранные серии</span>
        <GameCarouselContainer games={games} CardComponent={GameCardVertical} />
    </div>
);

export default FavoriteSeriesSection