import React, { useState } from 'react';
import styles from './style.module.scss';
import { Category } from '../../../types/gameTypes';

interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div
            className={`${styles.mainBox} ${isFlipped ? styles.flipped : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.cardInner}>
                <div className={styles.cardFront} style={{
                    backgroundImage: `url(${category.imgUrl})`,
                    '--gradient-color': category.gradientColor
                } as React.CSSProperties}>
                    <div className={styles.gradient} />
                    <span className={styles.title}>{category.title}</span>
                </div>
                <div className={styles.cardBack} style={{
                    backgroundImage: `url(${category.imgUrl})`,
                    '--gradient-color': category.gradientColor
                } as React.CSSProperties}>
                    <div className={styles.gradient} />
                    <div className={styles.cardDescription}>
                        <p>{category.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
