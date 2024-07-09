import styles from './style.module.scss'
import { Game } from '../../../types/gameTypes'
import SecondGamesTable from '../../../features/tables/secondGamesTable'
import TableTitle from '../../../ui/tableTitle';
import SeeMoreLink from '../../../ui/seeMoreLink';

const SaleLeadersSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <div className={styles.saleLeadersBox}>
        <TableTitle title='Лидеры продаж' description={false}/>
        <SecondGamesTable games={games} columns={4} />
        <div className={styles.moreGamesLinks}>
            <span>Больше:</span>
            <SeeMoreLink text='Лидеры продаж' />
            <span>или</span>
            <SeeMoreLink text='Лидеры продаж по всему миру' />
        </div>
    </div>
);

export default SaleLeadersSection