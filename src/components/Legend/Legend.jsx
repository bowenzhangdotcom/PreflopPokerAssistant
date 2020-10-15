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
        </>
    )
};


export default Legend;