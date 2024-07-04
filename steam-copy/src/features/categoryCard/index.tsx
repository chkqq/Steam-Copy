import React from 'react';
import styles from './style.module.scss';
import { Category } from '../../types/gameTypes';

interface CategoryCardProps{
    category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
    return (
        <div
            className={styles.mainBox}
            style={{
                backgroundImage: `url(${category.imgUrl})`,
                '--gradient-color': category.gradientColor
            } as React.CSSProperties}
        >
            <div className={styles.gradient} />
            <span className={styles.title}>{category.title}</span>
        </div>
    );
};

export default CategoryCard;
