import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Header from '../../widgets/header';
import Footer from '../../widgets/footer';
import StoreNavigation from '../../features/storeNavigation';
import GameCardLarge, { Game } from '../../features/gameCardLarge';

const MainPage: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const gamesPerPage = 3;

    useEffect(() => {
        fetch('/src/dataBase/games.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (!data || !data.games || !Array.isArray(data.games)) {
                    throw new Error('Invalid data structure');
                }
                setGames(data.games);
            })
            .catch(error => console.error('Error fetching games:', error));
    }, []);

    const totalPages = Math.ceil(games.length / gamesPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
    };

    const handlePageIndicatorClick = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const getCurrentGames = () => {
        const startIndex = currentPage * gamesPerPage;
        return games.slice(startIndex, startIndex + gamesPerPage);
    };

    return (
        <div className={styles.background}>
            <div className={styles.backgroundGif}/>
            <div className={styles.pageContent}>
                <Header />
                <StoreNavigation />
                <div className={styles.carouselContainer}>
                    <button onClick={handlePrevPage} className={styles.navButton}>❮</button>
                    <div className={styles.gamesContainer}>
                        {getCurrentGames().map(game => (
                            <GameCardLarge key={game.id} game={game} />
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
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;
