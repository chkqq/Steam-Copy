import styles from '../style.module.scss'
import FeaturedTag from './featuredTag'
import { Game } from '../../../types/gameTypes'
const FeaturedTagsSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div className={styles.favoriteMark}>
        <FeaturedTag title="Военные Симуляторы" games={games} />
        <FeaturedTag title="Шутеры от первого лица" games={games} />
    </div>
)

export default FeaturedTagsSection