import styles from './style.module.scss'
import { Link } from 'react-router-dom'

interface SeeMoreLinkProps {
    text: string;
}
const SeeMoreLink: React.FC<SeeMoreLinkProps> = ({text}) => {
    return(
        <Link to='/' className={styles.linkBox}>
            <div className={styles.seeMore}>
               {text}
            </div>
        </Link>
    )
}

export default SeeMoreLink