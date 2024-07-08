import styles from '../style.module.scss'
import CategoryCarouselContainer from '../../../features/carouselContainers/categoryCarouselContainer'
import { Category } from '../../../types/gameTypes'
const CategorySection: React.FC<{ categories: Category[] }> = ({ categories }) => (
    <div className={styles.gameCategories}>
        <div className={styles.title}>
            <span>КАТЕГОРИИ</span>
            <span className={styles.subText}>Загляните в любую категорию и получите бесплатный ежедневный стикер</span>
        </div>
        <CategoryCarouselContainer categories={categories} />
    </div>
)

export default CategorySection