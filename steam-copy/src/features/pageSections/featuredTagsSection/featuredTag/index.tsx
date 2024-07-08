import styles from '../../style.module.scss'
import { Game } from '../../../../types/gameTypes'
import SecondGamesTable from '../../../../features/tables/secondGamesTable'
const FeaturedTag: React.FC<{ title: string, games: Game[] }> = ({ title, games }) => (
    <div>
        <div className={styles.tablesTitleBox}>
            <p className={styles.tablesTitle}>{title}</p>
            <span className={styles.tablesDescription}>Избранная метка</span>
        </div>
        <SecondGamesTable games={games} columns={2} />
        <div className={styles.moreGamesLinks}>
            <div className={styles.seeMore}>Ещё</div>
        </div>
    </div>
)

export default FeaturedTag