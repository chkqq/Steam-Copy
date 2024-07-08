import styles from '../style.module.scss'
import { Game } from '../../../types/gameTypes'
import SecondGamesTable from '../../../features/tables/secondGamesTable'

const BudgetGamesSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div>
        <span className={styles.tablesTitle}>До 300 руб.</span>
        <SecondGamesTable games={games} columns={4} />
        <div className={styles.moreGamesLinks}>
            <span>Больше:</span>
            <div className={styles.seeMore}>До 300 руб.</div>
            <div className={styles.seeMore}>До 159 руб.</div>
        </div>
    </div>
)

export default BudgetGamesSection