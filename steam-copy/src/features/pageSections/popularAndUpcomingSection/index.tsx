import styles from '../style.module.scss'
import SecondGamesTable from '../../../features/tables/secondGamesTable'
import { Game } from '../../../types/gameTypes'

const PopularAndUpcomingSection: React.FC<{ activeTab: string, onTabClick: (tab: string) => void, popularGames: Game[], upcomingGames: Game[] }> = ({ activeTab, onTabClick, popularGames, upcomingGames }) => (
    <div className={styles.popularAndNewUpComing}>
        <div className={styles.tabs}>
            <span className={activeTab === 'popular' ? styles.activeTab : ''} onClick={() => onTabClick('popular')}>
                Популярные новинки
            </span>
            <span className={activeTab === 'upcoming' ? styles.activeTab : ''} onClick={() => onTabClick('upcoming')}>
                Будущие продукты
            </span>
        </div>
        {activeTab === 'popular' && <SecondGamesTable games={popularGames} columns={4} />}
        {activeTab === 'upcoming' && <SecondGamesTable games={upcomingGames} columns={4} />}
        <div className={styles.moreGamesLinks}>
            <span>Больше:</span>
            <div className={styles.seeMore}>Популярные новинки</div>
            <span>или</span>
            <div className={styles.seeMore}>Все новинки</div>
        </div>
    </div>
)

export default PopularAndUpcomingSection