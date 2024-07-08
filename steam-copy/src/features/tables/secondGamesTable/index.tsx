import React from 'react'
import styles from './style.module.scss'
import GameCardHorizontal from '../../cards/gameCardHorizontal'
import { Game } from '../../../types/gameTypes'

interface SecondGamesTableProps {
    games: Game[]
    columns: 2 | 4
}

const SecondGamesTable: React.FC<SecondGamesTableProps> = ({ games, columns }) => {
    const rows = columns === 2 ? 2 : 4
    const gamesToDisplay = games.slice(0, columns * rows)

    return (
        <div className={`${styles.gamesTable} ${columns === 2 ? styles.twoColumns : styles.fourColumns}`}>
            {gamesToDisplay.map((game) => (
                <GameCardHorizontal key={game.id} game={game} size='Small' />
            ))}
        </div>
    )
}

export default SecondGamesTable
