import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Header from '../../widgets/header'
import Footer from '../../widgets/footer'
import StoreNavigation from '../../features/storeNavigation'
import GameCarouselContainer from '../../features/carouselContainers/gameCarouselContainer'
import GameCardVertical from '../../features/cards/gameCardVertical'
import FirstGamesTable from '../../features/tables/firstGamesTable'
import { Data } from '../../types/gameTypes'
import BigSaleSection from '../../features/pageSections/bigSaleSection'
import CategorySection from '../../features/pageSections/categorySection'
import SaleLeadersSection from '../../features/pageSections/saleLeadersSection'
import FavoriteSeriesSection from '../../features/pageSections/favoriteSeriesSection'
import FeaturedTagsSection from '../../features/pageSections/featuredTagsSection'
import BudgetGamesSection from '../../features/pageSections/budgetGamesSection'
import PopularAndUpcomingSection from '../../features/pageSections/popularAndUpcomingSection'

const MainPage: React.FC = () => {
    const [data, setData] = useState<Data>({
        games: [],
        firstTableGames: [],
        bigDiscountGames: [],
        secondTableGames: [],
        categories: [],
        saleLeadersGames: [],
        upToThreeHundredRublesGames: [],
        newUpComingGames: []
    });

    const [activeTab, setActiveTab] = useState<string>('popular');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoints = [
                    { key: 'games', url: '/src/dataBase/games.json' },
                    { key: 'bigDiscountGames', url: '/src/dataBase/bigDiscountGames.json' },
                    { key: 'firstTableGames', url: '/src/dataBase/firstGamesTable.json' },
                    { key: 'secondTableGames', url: '/src/dataBase/firstGamesTable.json' },
                    { key: 'categories', url: '/src/dataBase/categories.json' },
                    { key: 'saleLeadersGames', url: '/src/dataBase/saleLeadersGames.json' },
                    { key: 'upToThreeHundredRublesGames', url: '/src/dataBase/upToThreeHundredRubles.json' },
                    { key: 'newUpComingGames', url: '/src/dataBase/newUpComingGames.json' }
                ];

                const dataResponses = await Promise.all(endpoints.map(async endpoint => {
                    const response = await fetch(endpoint.url)
                    const text = await response.text()
                    try {
                        return JSON.parse(text)
                    } catch (error) {
                        console.error(`Error parsing JSON from ${endpoint.url}:`, error, text)
                        return null
                    }
                }))

                const newData: Partial<Data> = {}
                endpoints.forEach((endpoint, index) => {
                    if (dataResponses[index] !== null) {
                        newData[endpoint.key] = dataResponses[index]
                    }
                })

                setData(prevData => ({
                    ...prevData,
                    ...newData
                } as Data))
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])


    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    return (
        <div className={styles.background}>
            <div className={styles.backgroundGif} />
            <div className={styles.pageContent}>
                <Header />
                <StoreNavigation />
                <GameCarouselContainer games={data.games} CardComponent={GameCardVertical} />
                <BigSaleSection games={data.bigDiscountGames} />
                <FirstGamesTable games={data.firstTableGames} />
                <CategorySection categories={data.categories} />
                <FirstGamesTable games={data.secondTableGames} />
                <SaleLeadersSection games={data.saleLeadersGames} />
                <FavoriteSeriesSection games={data.games} />
                <FeaturedTagsSection games={data.saleLeadersGames} />
                <BudgetGamesSection games={data.upToThreeHundredRublesGames} />
                <PopularAndUpcomingSection
                    activeTab={activeTab}
                    onTabClick={handleTabClick}
                    popularGames={data.saleLeadersGames}
                    upcomingGames={data.newUpComingGames}
                />
                <Footer />
            </div>
        </div>
    )
}

export default MainPage
