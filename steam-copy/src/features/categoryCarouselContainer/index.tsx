import React, { useState } from 'react';
import styles from './style.module.scss';
import { Category } from '../../types/gameTypes';
import CategoryCard from '../categoryCard';

interface CategoryCarouselContainerProps {
    categories: Category[];
}
const CategoryCarouselContainer: React.FC<CategoryCarouselContainerProps> = ({ categories }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const categoriesPerPage = 4;

    const totalPages = Math.ceil(categories.length / categoriesPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
    };

    const handlePageIndicatorClick = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const getCurrentCategories = () => {
        const startIndex = currentPage * categoriesPerPage;
        return categories.slice(startIndex, startIndex + categoriesPerPage);
    };

    return (
        <div>
            <div className={styles.carouselContainer}>
                <button onClick={handlePrevPage} className={styles.navButton}>❮</button>
                <div className={styles.categoriesContainer}>
                    {getCurrentCategories().map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
                <button onClick={handleNextPage} className={styles.navButton}>❯</button>
            </div>
            <div className={styles.pageIndicators}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`${styles.pageIndicator} ${index === currentPage ? styles.active : ''}`}
                        onClick={() => handlePageIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryCarouselContainer;
