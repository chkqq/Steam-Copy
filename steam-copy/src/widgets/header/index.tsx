import React, { useState } from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const languageData = [
    "简体中文 (упрощенный китайский)",
    "繁體中文 (традиционный китайский)",
    "日本語 (японский)",
    "한국어 (корейский)",
    "ภาษาไทย (тайский)",
    "Български (болгарский)",
    "Čeština (чешский)",
    "Dansk (датский)",
    "Deutsch (немецкий)",
    "English (английский)",
    "Español - España (испанский)",
    "Español - Latinoamérica (латиноам. испанский)",
    "Ελληνικά (греческий)",
    "Français (французский)",
    "Italiano (итальянский)",
    "Bahasa Indonesia (индонезийский)",
    "Magyar (венгерский)",
    "Nederlands (нидерландский)",
    "Norsk (норвежский)",
    "Polski (польский)",
    "Português (португальский)",
    "Português-Brasil (бразильский португальский)",
    "Română (румынский)",
    "Suomi (финский)",
    "Svenska (шведский)",
    "Türkçe (турецкий)",
    "Tiếng Việt (вьетнамский)",
    "Українська (украинский)"
];

const Header: React.FC = () => {
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>('shop');

    const toggleLanguagesDropdown = () => {
        setIsLanguagesOpen(!isLanguagesOpen);
    };

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
            <div className={styles.header}>
                <div className={styles.logoAndNavLinksBox}>
                    <Link to='/' className={styles.logo} />
                    <div className={styles.navigationLinksList}>
                        <span
                            className={activeLink === 'shop' ? styles.activeTab : ''}
                            onClick={() => handleLinkClick('shop')}
                        >
                            магазин
                        </span>
                        <span
                            className={activeLink === 'community' ? styles.activeTab : ''}
                            onClick={() => handleLinkClick('community')}
                        >
                            сообщество
                        </span>
                        <span
                            className={activeLink === 'info' ? styles.activeTab : ''}
                            onClick={() => handleLinkClick('info')}
                        >
                            информация
                        </span>
                        <span
                            className={activeLink === 'support' ? styles.activeTab : ''}
                            onClick={() => handleLinkClick('support')}
                        >
                            поддержка
                        </span>
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
                                    <div>
                                        {languageData.map((language, index) => (
                                            <div key={index} className={styles.language}>
                                                <span>
                                                  {language}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <span  className={styles.problemReport}>Сообщить о проблеме с переводом</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Header;

