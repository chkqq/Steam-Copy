import React, { useState } from 'react'
import styles from './style.module.scss'
import { Category } from '../../../types/gameTypes'
import CategoryCard from '../../cards/categoryCard'
import PageIndicators from '../../../ui/pageIndicators'
import CarouselButton from '../../../ui/CarouselButton'

interface CategoryCarouselContainerProps {
    categories: Category[]
}
const CategoryCarouselContainer: React.FC<CategoryCarouselContainerProps> = ({ categories }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const [isPrev, setIsPrev] = useState(false)
    const categoriesPerPage = 4

    const totalPages = Math.ceil(categories.length / categoriesPerPage)

    const handlePrevPage = () => {
        setIsLoading(true)
        setIsPrev(true)
        setTimeout(() => {
            setIsPrev(false)
            setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
            setIsLoading(false)
        }, 100)
    }

    const handleNextPage = () => {
        setIsLoading(true)
        setIsNext(true)
        setTimeout(() => {
            setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
            setIsLoading(false)
            setIsNext(false)
        }, 100)
    }

    const handlePageIndicatorClick = (pageIndex: number) => {
        setIsLoading(true)
        setTimeout(() => {
            setCurrentPage(pageIndex)
            setIsLoading(false)
        }, 100)
    }

    const getCurrentCategories = () => {
        const startIndex = currentPage * categoriesPerPage
        return categories.slice(startIndex, startIndex + categoriesPerPage)
    }

    return (
        <>
            <div className={styles.carouselContainer}>
                <CarouselButton direction="prev" onClick={handlePrevPage} />
                <div className=
                {`
                    ${styles.categoriesContainer}
                    ${isLoading ? styles.hidden : ''}
                    ${isNext ? styles.next : ''}
                    ${isPrev ? styles.prev : ''}
                `}>
                    {getCurrentCategories().map(category => (
                        <CategoryCard category={category}/>
                    ))}
                </div>
                <CarouselButton direction="next" onClick={handleNextPage} />
            </div>
            <PageIndicators
                totalPages={totalPages}
                currentPage={currentPage}
                onPageIndicatorClick={handlePageIndicatorClick}
            />
        </>
    )
}

export default CategoryCarouselContainer
