import styles from './style.module.scss'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.delimiter} />
              <div className={styles.logos}>
                <div className={styles.newFooterLogo}/>
                <img src="/steam_logo_footer.png" alt="" />
              </div>
              <div className={styles.footerText}>
                <span>© 2024 Valve Corporation. Все права сохранены. Все торговые марки являются собственностью соответствующих владельцев в США и других странах.</span>
                <div className={styles.footerTextAndLinks}>
                    <span>НДС включён во все цены, где он применим.&nbsp;&nbsp;</span>
                    <Link to='/' className={styles.links}>Политика конфиденциальности</Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to='/' className={styles.links}>Правовая информация</Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to='/' className={styles.links}>Соглашение подписчика Steam</Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to='/' className={styles.links}>Возвраты</Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to='/' className={styles.links}>Файлы cookie</Link>
                </div>
              </div>
              <div className={styles.delimiter} />
              <div className={styles.contactLinks}>
                <Link to='/' className={styles.links}>О Valve</Link>
                <span>|</span>
                <Link to='/' className={styles.links}>Вакансии</Link>
                <span>|</span>
                <Link to='/' className={styles.links}>Stemworks</Link>
                <span>|</span>
                <Link to='/' className={styles.links}>Дистрибуция Steam</Link>
                <span>|</span>
                <Link to='/' className={styles.links}>Служба поддержки</Link>
                <span>|</span>
                <Link to='/' className={styles.links}>Подарочные карты</Link>
                <span>|</span>
                <Link to='/' className={styles.links}>
                  <div className={styles.socNetworkLinks}>
                    <img src="/facebook.png" alt="" />
                    <span>Steam</span>
                  </div>
                </Link>
                <span>|</span>
                <Link to='/' className={styles.links}>
                  <div className={styles.socNetworkLinks}>
                    <img src="/twitter.png" alt="" />
                    <span>@steam</span>
                  </div>
                </Link>
              </div>
            </div>
        </div>
    )
}

export default Footer