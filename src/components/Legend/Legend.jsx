import React from 'react';
import styles from './Legend.module.css';

const Legend = () => {
    return (
        <>
            <ul className={styles.legend}>
                <li><label className={styles.Raise}>Raise</label></li>
                <li><label className={styles.Call}>Call</label></li>
                <li><label className={styles.Fold}>Fold</label></li>
            </ul>
            {/* <ul className={`${styles.legend} ${styles.dynamic}`}>
                <li><span className={`${styles.dynamicRaise} ${styles.dynamic}`}></span>Dynamic Raise</li>
                <li><span className={`${styles.dynamicCall} ${styles.dynamic}`}></span>Dynamic Call</li>
                <li><span className={`${styles.dynamicFold} ${styles.dynamic}`}></span>Dynamic Fold</li>
            </ul> */}
        </>
    )
};


export default Legend;