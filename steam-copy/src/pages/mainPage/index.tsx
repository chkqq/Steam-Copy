import React from 'react'
import styles from './style.module.scss'
import Header from '../../widgets/header';

const MainPage: React.FC = () => {

    return (
        <div className={styles.main}>
            <Header />
        </div>
    );
}

export default MainPage
