import React, { useState } from 'react'
import styles from './style.module.scss'

type Category = {
    header: string
    items: string[]
}

type DropdownProps = {
    categories: Category[]
    dropDownName: string
}

const Dropdown: React.FC<DropdownProps> = ({ categories, dropDownName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownMouseEnter = () => {
      setIsDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
      setIsDropdownOpen(false)
  }

  return (
      <>
          <div className={styles.tab}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
          >
              {dropDownName}
          </div>
          <div
              className={`${styles.dropdown} ${isDropdownOpen && styles.dropdownOpen}`}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
          >
              {categories.map((category, index) => (
                  <div key={index} className={styles.dropdownColumn}>
                  <div className={styles.dropdownHeader}>{category.header}</div>
                  {category.items.map((item, id) => (
                      <div key={id} className={styles.dropdownItem}>{item}</div>
                  ))}
                  </div>
              ))}
          </div>
      </>
  )
}

export default Dropdown
