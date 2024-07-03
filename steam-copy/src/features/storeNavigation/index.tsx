import styles from './style.module.scss'
import { Link } from 'react-router-dom'

const StoreNavigation: React.FC = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.tab}>Магазин</div>
            <div className={styles.tab}>Новое и интересное</div>
            <div className={styles.tab}>Категории</div>
            <Link to='/' className={styles.tab}>Предметы за очки</Link>
            <Link to='/' className={styles.tab}>Новости</Link>
            <Link to='/' className={styles.tab}>Лаборатории</Link>
            <div className={styles.searchBox}>
                <input type='search' className={styles.searchInput} placeholder='поиск'/>
                <button className={styles.searchButton} />
            </div>
        </div>
    )
}

export default StoreNavigation