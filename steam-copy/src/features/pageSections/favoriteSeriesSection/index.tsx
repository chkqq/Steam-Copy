import { Game } from '../../../types/gameTypes'
import GameCarouselContainer from '../../../features/carouselContainers/gameCarouselContainer'
import GameCardVertical from '../../../features/cards/gameCardVertical'
import TableTitle from '../../../ui/tableTitle'

const FavoriteSeriesSection: React.FC<{ games: Game[] }> = ({ games }) => (
    <>
        <TableTitle title='Избранные серии' description={false} />
        <GameCarouselContainer games={games} CardComponent={GameCardVertical} />
    </>
);

export default FavoriteSeriesSection