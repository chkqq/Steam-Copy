import styles from './style.module.scss'
import GameCardHorizontal from '../../cards/gameCardHorizontal'
import { Game } from '../../../types/gameTypes'

interface FirstGamesTableProps {
    games: Game[]
}

const FirstGamesTable: React.FC<FirstGamesTableProps> = ({ games }) => {
    return (
        <div className={styles.gamesTable}>
            <div className={styles.gamesRoleSmall}>
                {games.slice(0, 4).map((game, index) => (
                    <GameCardHorizontal key={index} game={game} size='Medium' />
                ))}
            </div>
            <div className={styles.gamesRoleLarge}>
                {games.slice(4, 7).map((game, index) => (
                    <GameCardHorizontal key={index} game={game} size='Large' />
                ))}
            </div>
            <div className={styles.gamesRoleSmall}>
                {games.slice(7, 11).map((game, index) => (
                    <GameCardHorizontal key={index} game={game} size='Medium' />
                ))}
            </div>
            <div className={styles.gamesRoleLarge}>
                {games.slice(11, 14).map((game, index) => (
                    <GameCardHorizontal key={index} game={game} size='Large' />
                ))}
            </div>
        </div>
    )
}

export default FirstGamesTable
