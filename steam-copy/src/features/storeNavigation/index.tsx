import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { categories } from '../../const/categoriesFilter'
import { newAndInteresting } from '../../const/newAndInteresting'
import Dropdown from '../../ui/dropDown'
const StoreNavigation = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.tab}>
        Магазин
      </div>
      <Dropdown categories={newAndInteresting} dropDownName='Новое и интересное'/>
      <Dropdown categories={categories} dropDownName='Категории'/>
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
