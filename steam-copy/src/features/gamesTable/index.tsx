import styles from './style.module.scss';
import GameCardRectangular from '../gameCardRectangular';
import { Game } from '../../types/gameTypes';

interface GamesTableProps {
    games: Game[];
}

const GamesTable: React.FC<GamesTableProps> = ({ games }) => {
    return (
        <div className={styles.gamesTable}>
            <div className={styles.gamesRoleSmall}>
                {games.slice(0, 4).map((game, index) => (
                    <GameCardRectangular key={index} game={game} size='Medium' />
                ))}
            </div>
            <div className={styles.gamesRoleLarge}>
                {games.slice(4, 7).map((game, index) => (
                    <GameCardRectangular key={index} game={game} size='Large' />
                ))}
            </div>
            <div className={styles.gamesRoleSmall}>
                {games.slice(7, 11).map((game, index) => (
                    <GameCardRectangular key={index} game={game} size='Medium' />
                ))}
            </div>
            <div className={styles.gamesRoleLarge}>
                {games.slice(11, 14).map((game, index) => (
                    <GameCardRectangular key={index} game={game} size='Large' />
                ))}
            </div>
        </div>
    );
};

export default GamesTable;
