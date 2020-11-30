import React from 'react';
import styles from './HowTo.module.css';

const extraContent = 
    <div className={styles.extraContent}>
        <div className={styles.contentColumn}>
            <h3>Chart Types</h3>
                <p>RFI (Raise First In): When you are the first player to enter the pot preflop</p> 
                <p>FOR (Facing Open Raise): When a player before you has raised preflop</p> 
                <p>F3B (Facing 3Bet): When you face a 3Bet after you have Raised First In</p> 
        </div>
        <div className={styles.contentColumn}>    
            <h3>Position</h3>
                <p>UTG: Under The Gun (Button+3)</p> 
                <p>HJ: Hijack (Button+2)</p> 
                <p>CO: Cutoff (Button+1)</p> 
                <p>BU: Button</p> 
                <p>SB: Small Blind</p> 
                <p>BB: Big Blind</p> 
        </div>
        <div className={styles.contentColumn}>
            <h3>Calculate RNG</h3>
                <p>Toggle to enable probability calculation for ranges </p>
        </div>
    </div>


class HowTo extends React.Component {
    render() {
        const readMore = this.props.readMore
        const linkName=readMore?'How to Use <<':'How to Use'
        return (
            <>
                <div className={styles.readMoreLink} onClick={this.props.handleReadMore}>
                    <h2>{linkName}</h2>
                </div>
                {readMore && extraContent}
            </>
        )
    }
};


export default HowTo;