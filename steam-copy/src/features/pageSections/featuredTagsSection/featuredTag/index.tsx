import styles from './style.module.scss'
import { Game } from '../../../../types/gameTypes'
import SecondGamesTable from '../../../../features/tables/secondGamesTable'
import TableTitle from '../../../../ui/tableTitle'
import SeeMoreLink from '../../../../ui/seeMoreLink'
const FeaturedTag: React.FC<{ title: string, games: Game[] }> = ({ title, games }) => (
    <div>
        <TableTitle title={title} description={true} />
        <SecondGamesTable games={games} columns={2} />
        <div className={styles.moreGamesLinks}>
            <SeeMoreLink text='Ещё' />
        </div>
    </div>
)

export default FeaturedTag