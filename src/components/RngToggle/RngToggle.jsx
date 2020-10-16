import React from 'react';
import styles from './RngToggle.module.css';

class RngToggle extends React.Component{
    render() {
        return(
            <div className={styles.Toggle}>
                <label className={styles.switch}>
                    <input type="checkbox" id="Toggle" onChange={this.props.handleRngToggleUpdate}/>
                    <span className={styles.slider}></span>
                </label>
                <div className={styles.Calc}>Calculate RNG</div>
            </div>
        )
    }
}

export default RngToggle;