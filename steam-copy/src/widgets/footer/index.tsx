import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import React from 'react'

const footerLinks = [
    { name: 'Политика конфиденциальности', path: '/' },
    { name: 'Правовая информация', path: '/' },
    { name: 'Соглашение подписчика Steam', path: '/' },
    { name: 'Возвраты', path: '/' },
    { name: 'Файлы cookie', path: '/' }
]

const contactLinks = [
    { name: 'О Valve', path: '/' },
    { name: 'Вакансии', path: '/' },
    { name: 'Steamworks', path: '/' },
    { name: 'Дистрибуция Steam', path: '/' },
    { name: 'Служба поддержки', path: '/' },
    { name: 'Подарочные карты', path: '/' }
]

const socialLinks = [
    { name: 'Steam', path: '/', imgSrc: '/facebook.png', alt: 'Facebook' },
    { name: '@steam', path: '/', imgSrc: '/twitter.png', alt: 'Twitter' }
]

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.delimiter} />
                <div className={styles.logos}>
                    <div className={styles.newFooterLogo} />
                    <img src="/steam_logo_footer.png" alt="Steam Logo" />
                </div>
                <div className={styles.footerText}>
                    <span>© 2024 Valve Corporation. Все права сохранены. Все торговые марки являются собственностью соответствующих владельцев в США и других странах.</span>
                    <div className={styles.footerTextAndLinks}>
                        <span>НДС включён во все цены, где он применим.&nbsp;&nbsp;</span>
                        {footerLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link to={link.path} className={styles.links}>{link.name}</Link>
                                {index < footerLinks.length - 1 && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className={styles.delimiter} />
                <div className={styles.contactLinks}>
                    {contactLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <Link to={link.path} className={styles.links}>{link.name}</Link>
                            <span>|</span>
                        </React.Fragment>
                    ))}
                    {socialLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <Link to={link.path} className={styles.links}>
                                <div className={styles.socNetworkLinks}>
                                    <img src={link.imgSrc} alt={link.alt} />
                                    <span>{link.name}</span>
                                </div>
                            </Link>
                            {index < socialLinks.length - 1 && <span>|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
