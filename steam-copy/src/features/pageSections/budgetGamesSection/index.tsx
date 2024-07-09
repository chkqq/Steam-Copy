import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'
import SecondGamesTable from '../../../features/tables/secondGamesTable'
import TableTitle from '../../../ui/tableTitle'
import SeeMoreLink from '../../../ui/seeMoreLink'
const BudgetGamesSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div>
        <TableTitle title='До 300 руб.' description={false} />
        <SecondGamesTable games={games} columns={4} />
        <div className={styles.moreGamesLinks}>
            <span>Больше:</span>
            <SeeMoreLink text='До 300 руб.' />
            <SeeMoreLink text='До 159 руб.' />
        </div>
    </div>
)

export default BudgetGamesSection