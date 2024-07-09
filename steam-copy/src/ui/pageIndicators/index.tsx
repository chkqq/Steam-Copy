import React from 'react'
import styles from './style.module.scss'

interface PageIndicatorsProps {
    totalPages: number
    currentPage: number
    onPageIndicatorClick: (pageIndex: number) => void
}

const PageIndicators: React.FC<PageIndicatorsProps> = ({ totalPages, currentPage, onPageIndicatorClick }) => {
    return (
        <div className={styles.pageIndicators}>
            {Array.from({ length: totalPages }, (_, index) => (
                <span
                    key={index}
                    className={`${styles.pageIndicator} ${index === currentPage ? styles.active : ''}`}
                    onClick={() => onPageIndicatorClick(index)}
                />
            ))}
        </div>
    )
}

export default PageIndicators