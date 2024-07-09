import React from 'react'
import styles from './style.module.scss'

interface CarouselButtonProps {
    direction: 'prev' | 'next'
    onClick: () => void
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick }) => {
    return (
        <button onClick={onClick} className={styles.carouselButton}>
            {direction === 'prev' ? '❮' : '❯'}
        </button>
    )
}

export default CarouselButton
