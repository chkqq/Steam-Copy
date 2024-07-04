import React from 'react';
import styles from './style.module.scss';
import GameCardRectangular from '../gameCardRectangular';
import { Game } from '../../types/gameTypes';

interface SecondGamesTableProps {
    games: Game[];
    columns: 2 | 4;
}

const SecondGamesTable: React.FC<SecondGamesTableProps> = ({ games, columns }) => {
    const rows = columns === 2 ? 2 : 4;
    const gamesToDisplay = games.slice(0, columns * rows);

    return (
        <div className={`${styles.gamesTable} ${columns === 2 ? styles.twoColumns : styles.fourColumns}`}>
            {gamesToDisplay.map((game) => (
                <GameCardRectangular key={game.id} game={game} size='Small' />
            ))}
        </div>
    );
};

export default SecondGamesTable;
