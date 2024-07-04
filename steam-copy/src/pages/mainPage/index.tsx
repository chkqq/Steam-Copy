// src/pages/MainPage/index.tsx
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Header from '../../widgets/header';
import Footer from '../../widgets/footer';
import StoreNavigation from '../../features/storeNavigation';
import GameCarouselContainer from '../../features/gameCarouselContainer';
import GameCardLarge from '../../features/gameCardLarge';
import GameCardRectangular from '../../features/gameCardRectangular';
import { Game } from '../../types/gameTypes';
import GamesTable from '../../features/gamesTable';
import CategoryCarouselContainer from '../../features/categoryCarouselContainer';
import { Category } from '../../types/gameTypes';
import SecondGamesTable from '../../features/secondGamesTable';
const MainPage: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [firstTableGames, setFirstTableGames] = useState<Game[]>([])
    const [bigDiscountGames, setBigDiscountGames] = useState<Game[]>([])
    const [secondTableGames, setSecondTableGames] = useState<Game[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [saleLeadersGames, setSaleLeadersGames] = useState<Game[]>([])
    const [upToThreeHundredRublesGames, setUpToThreeHundredRublesGames] = useState<Game[]>([])
    const [newUpComingGames, setNewUpComingGames] = useState<Game[]>([])
    const [activeTab, setActiveTab] = useState<string>('popular');
    useEffect(() => {
        fetch('/src/dataBase/games.json')
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error('Error fetching games:', error));

        fetch('/src/dataBase/bigDiscountGames.json')
            .then(response => response.json())
            .then(data => setBigDiscountGames(data))
            .catch(error => console.error('Error fetching games:', error));

        fetch('/src/dataBase/firstGamesTable.json')
            .then(response => response.json())
            .then(data => setFirstTableGames(data))
            .catch(error => console.error('Error fetching games:', error));

        fetch('/src/dataBase/firstGamesTable.json')
            .then(response => response.json())
            .then(data => setSecondTableGames(data))
            .catch(error => console.error('Error fetching games:', error));

        fetch('/src/dataBase/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching games:', error));

        fetch('/src/dataBase/saleLeadersGames.json')
            .then(response => response.json())
            .then(data => setSaleLeadersGames(data))
            .catch(error => console.error('Error fetching games:', error));
        fetch('/src/dataBase/upToThreeHundredRubles.json')
            .then(response => response.json())
            .then(data => setUpToThreeHundredRublesGames(data))
            .catch(error => console.error('Error fetching games:', error));
        fetch('/src/dataBase/newUpComingGames.json')
            .then(response => response.json())
            .then(data => setNewUpComingGames(data))
            .catch(error => console.error('Error fetching games:', error));
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.background}>
            <div className={styles.backgroundGif} />
            <div className={styles.pageContent}>
                <Header />
                <StoreNavigation />
                <GameCarouselContainer games={games} CardComponent={GameCardLarge} />
                <div className={styles.bigSaleBackgroung}>
                    <div className={styles.bigSaleInfoAndSeeMore}>
                        <div className={styles.bigSaleInfo}>
                            <span className={styles.title}>Крупные скидки</span>
                            <span className={styles.description}>Особенно крупные скидки на некоторые из лучших игр всех времён</span>
                        </div>
                        <div className={styles.seeMore}>посмотреть все</div>
                    </div>
                    <GameCarouselContainer games={bigDiscountGames} CardComponent={(props) => <GameCardRectangular {...props} size="Large" />} />
                </div>
                <GamesTable games={firstTableGames}/>
                <div className={styles.gameCategories}>
                    <div className={styles.title}>
                        <span>КАТЕГОРИИ</span>
                        <span className={styles.subText}>Загляните в любую категорию и получите бесплатный ежедневный стикер</span>
                    </div>
                    <CategoryCarouselContainer categories={categories}/>
                </div>
                <GamesTable games={secondTableGames}/>
                <div>
                    <span className={styles.tablesTitle}>Лидеры Продаж</span>
                    <SecondGamesTable games={saleLeadersGames} columns={4} />
                    <div className={styles.moreGamesLinks}>
                        <span>Больше:</span>
                        <div className={styles.seeMore}>Лидеры продаж</div>
                        <span>или</span>
                        <div className={styles.seeMore}>Лидеры продаж по всему миру</div>
                    </div>
                </div>
                <div className={styles.FavoriteSeries}>
                    <span className={styles.tablesTitle}>Избранные серии</span>
                    <GameCarouselContainer games={games} CardComponent={GameCardLarge} />
                </div>
                <div className={styles.favoriteMark}>
                    <div>
                        <div className={styles.tablesTitleBox}>
                            <p className={styles.tablesTitle}>Военные Симуляторы</p>
                            <span className={styles.tablesDescription}>Избранная метка</span>
                        </div>
                        <SecondGamesTable games={saleLeadersGames} columns={2} />
                        <div className={styles.moreGamesLinks}>
                            <div className={styles.seeMore}>Ещё</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tablesTitleBox}>
                            <p className={styles.tablesTitle}>Шутеры от первого лица</p>
                            <span className={styles.tablesDescription}>Избранная метка</span>
                        </div>
                        <SecondGamesTable games={saleLeadersGames} columns={2} />
                        <div className={styles.moreGamesLinks}>
                            <div className={styles.seeMore}>Ещё</div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className={styles.tablesTitle}>До 300 руб.</span>
                    <SecondGamesTable games={upToThreeHundredRublesGames} columns={4} />
                    <div className={styles.moreGamesLinks}>
                        <span>Больше:</span>
                        <div className={styles.seeMore}>До 300 руб.</div>
                        <div className={styles.seeMore}>До 159 руб.</div>
                    </div>
                </div>
                <div className={styles.popularAndNewUpComing}>
                    <div className={styles.tabs}>
                        <span
                            className={activeTab === 'popular' ? styles.activeTab : ''}
                            onClick={() => handleTabClick('popular')}
                        >
                            Популярные новинки
                        </span>
                        <span
                            className={activeTab === 'upcoming' ? styles.activeTab : ''}
                            onClick={() => handleTabClick('upcoming')}
                        >
                            Будущие продукты
                        </span>
                    </div>
                    {activeTab === 'popular' && <SecondGamesTable games={saleLeadersGames} columns={4} />}
                    {activeTab === 'upcoming' && <SecondGamesTable games={newUpComingGames} columns={4} />}
                    <div className={styles.moreGamesLinks}>
                        <span>Больше:</span>
                        <div className={styles.seeMore}>Популярные новинки</div>
                        <span>или</span>
                        <div className={styles.seeMore}>Все новинки</div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;
