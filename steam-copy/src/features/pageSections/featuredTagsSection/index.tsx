import styles from './style.module.scss'
import FeaturedTag from './featuredTag'
import { Game } from '../../../types/gameTypes'

interface FeaturedTagsSectionProps {
    firstTable: Game[]
    secondTable: Game[]
}
const FeaturedTagsSection: React.FC<FeaturedTagsSectionProps> = ({ firstTable, secondTable }) => (
    <div className={styles.favoriteMark}>
        <FeaturedTag title="Военные Симуляторы" games={firstTable} />
        <FeaturedTag title="Шутеры от первого лица" games={secondTable} />
    </div>
)

export default FeaturedTagsSection