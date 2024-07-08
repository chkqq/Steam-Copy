import styles from '../style.module.scss'
import { Game } from '../../../types/gameTypes'
import SecondGamesTable from '../../../features/tables/secondGamesTable'

const SaleLeadersSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div>
        <span className={styles.tablesTitle}>Лидеры Продаж</span>
        <SecondGamesTable games={games} columns={4} />
        <div className={styles.moreGamesLinks}>
            <span>Больше:</span>
            <div className={styles.seeMore}>Лидеры продаж</div>
            <span>или</span>
            <div className={styles.seeMore}>Лидеры продаж по всему миру</div>
        </div>
    </div>
);

export default SaleLeadersSection