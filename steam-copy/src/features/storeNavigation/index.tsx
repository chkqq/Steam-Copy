import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { categories } from '../../const/categoriesFilter';
import { useState } from 'react';

const StoreNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabHover = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.navBar} onMouseLeave={handleMouseLeave}>
      <div className={`${styles.dropdown} ${isDropdownOpen && styles.dropdownOpen}`} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
        {categories.map((category, index) => (
          <div key={index} className={styles.dropdownColumn}>
            <div className={styles.dropdownHeader}>{category.header}</div>
            {category.items.map((item, id) => (
              <div key={id} className={styles.dropdownItem}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.tab}>
        Магазин
      </div>
      <div className={styles.tab}>Новое и интересное</div>
      <div className={styles.tab} onMouseEnter={() => handleTabHover()}>Категории</div>
      <Link to='/' className={styles.tab}>Предметы за очки</Link>
      <Link to='/' className={styles.tab}>Новости</Link>
      <Link to='/' className={styles.tab}>Лаборатории</Link>
      <div className={styles.searchBox}>
        <input type='search' className={styles.searchInput} placeholder='поиск'/>
        <button className={styles.searchButton} />
      </div>
    </div>
  );
}

export default StoreNavigation;
