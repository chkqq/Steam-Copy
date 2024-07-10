import React, { useState } from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import { languageData } from '../../const/languages';

const navLinks = [
    { name: 'shop', label: 'магазин' },
    { name: 'community', label: 'сообщество' },
    { name: 'info', label: 'информация' },
    { name: 'support', label: 'поддержка' }
];
const Header: React.FC = () => {
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<string>('shop')

    const toggleLanguagesDropdown = () => setIsLanguagesOpen(!isLanguagesOpen)
    const handleLinkClick = (link: string) => setActiveLink(link)

    return (
        <div className={styles.header}>
            <div className={styles.logoAndNavLinksBox}>
                <Link to='/' className={styles.logo} />
                <div className={styles.navigationLinksList}>
                    {navLinks.map((link, index) => (
                        <span
                            key={index}
                            className={activeLink === link.name ? styles.activeTab : ''}
                            onClick={() => handleLinkClick(link.name)}
                        >
                            {link.label}
                        </span>
                    ))}
                </div>
                <div className={styles.downloadAndLoginAndLanguagesSelector}>
                    <Link to='/' className={styles.download}>
                        <img src="/download.png" alt="" />
                        <span>Установить Steam</span>
                    </Link>
                    <Link to='/' className={styles.login}>
                        войти
                    </Link>
                    <span>|</span>
                    <div className={styles.languagesSelector}>
                        <div className={styles.languagesDropdownTrigger} onClick={toggleLanguagesDropdown}>
                            <span>языки</span>
                            <img src="/down.png" alt="" />
                        </div>
                        {isLanguagesOpen && (
                            <div className={styles.languagesDropdown}>
                                {languageData.map((language, index) => (
                                    <div key={index} className={styles.language}>
                                        <span>{language}</span>
                                    </div>
                                ))}
                                <span className={styles.problemReport}>Сообщить о проблеме с переводом</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
