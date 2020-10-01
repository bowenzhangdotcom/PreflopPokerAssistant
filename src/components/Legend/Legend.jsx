import React from 'react';
import styles from './Legend.module.css';

const Legend = () => {
    return (
        <>
            <ul className={styles.legend}>
                <li><span className={styles.Raise}></span>Raise</li>
                <li><span className={styles.Call}></span>Call</li>
                <li><span className={styles.Fold}></span>Fold</li>
            </ul>
            <ul className={`${styles.legend} ${styles.dynamic}`}>
                <li><span className={`${styles.dynamicRaise} ${styles.dynamic}`}></span>Dynamic Raise</li>
                <li><span className={`${styles.dynamicCall} ${styles.dynamic}`}></span>Dynamic Call</li>
                <li><span className={`${styles.dynamicFold} ${styles.dynamic}`}></span>Dynamic Fold</li>
            </ul>
        </>
    )
};


export default Legend;