import React from 'react';
import styles from './Selections.module.css';

const selectionsRender = {
    6: {
        NA: {
            heroPosition: "hide",
            villianPosition: "hide",
            sizing: "hide"
        },
        RFI: {
            villianPosition: "hide",
            BBHP: "hide",
            sizing: "hide"
        }, 
        FOR: {
            UTGHP: "hide",
            BBVP: "hide",
            sizing: "hide"
        }, 
        F3B: {
            BBHP: "hide",
            UTGVP: "hide",
            sizing: "hide"
        }
    }, 
    2: {
        NA: {
            heroPosition: "hide",
            villianPosition: "hide",
            sizing: "hide"
        },
        RFI: {
            heroPosition: "hide",
            villianPosition: "hide",
            '2x': "hide",
            '2.25x': "hide",
            '2.5x': "hide",
            '3x': "hide",
            '3.5x': "hide",
            '4x': "hide",
            '4.5x': "hide",
            '5x': "hide",

        }, 
        FOR: {
            heroPosition: "hide",
            villianPosition: "hide",
            '3.5x': "hide",
            '4x': "hide",
            '4.5x': "hide",
            '5x': "hide",
            disclaimerRFI: "hide",
        }, 
        F3B: {
            heroPosition: "hide",
            villianPosition: "hide",
            sizingRFI: "hide",
            disclaimerRFI: "hide",
        }
    },
    NA: {
        NA: {
            chartType: "hide",
            heroPosition: "hide",
            villianPosition: "hide",
            sizing: "hide"
        }
    },
}

class Selections extends React.Component {
    render() {
        const selectionVisibility = selectionsRender[this.props.selectedPlayerCount][this.props.selectedChartType];
        return (
                <>
                    <div className={styles.playerCount} id="chartType" onChange={this.props.handlePlayerCountUpdate}>
                        <h3 className={styles.topLabel}>Player Count</h3>
                        <ul>
                            <li>
                                <input type='radio' value='2' name='playerCount' id='2'/>
                                <label htmlFor='2' className={styles.SelectionsLabel}>2</label>
                            </li>
                            <li>
                                <input type='radio' value='6' name='playerCount'  id='6'/>
                                <label htmlFor='6' className={styles.SelectionsLabel}>6</label>
                            </li>
                        </ul>
                    </div> 
                    <div className={`${styles.chartType} ${styles[selectionVisibility['chartType']]}`} id="chartType" onChange={this.props.handleChartTypeUpdate}>
                        <h3 className={styles.middleLabels}>Chart Type</h3>
                        <ul>
                            <li>
                                <input type='radio' value='RFI' name='chartType' id='RFI'/>
                                <label htmlFor='RFI' className={styles.SelectionsLabel}>RFI</label>
                            </li>
                            <li>
                                <input type='radio' value='FOR' name='chartType'  id='FOR'/>
                                <label htmlFor='FOR' className={styles.SelectionsLabel}>FOR</label>
                            </li>
                            <li>
                                <input type='radio' value='F3B' name='chartType'  id='F3B'/>
                                <label htmlFor='F3B' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['F3B']]}`}>F3B</label>
                            </li>
                        </ul>
                    </div>  
                    <div className={`${styles.sizing} ${styles[selectionVisibility['sizing']]}`}id="sizing" onChange={this.props.handleSizingUpdate}>
                        <h3 className={styles.middleLabels}>Sizing</h3>
                        <div className={`${styles.TextLabel} ${styles[selectionVisibility['disclaimerRFI']]}`}>2.5x SB open size</div>
                        <div className={`${styles[selectionVisibility['sizingRFI']]}`}>
                            <ul>
                                <li className={styles[selectionVisibility['2x']]}>
                                    <input type='radio' value='2x' name='sizing' id='2x'/>
                                    <label htmlFor='2x' className={`${styles.SelectionsLabel}`}>2x</label>
                                </li>
                                <li className={styles[selectionVisibility['2.25x']]}>
                                    <input type='radio' value='2.25x' name='sizing' id='2.25x'/>
                                    <label htmlFor='2.25x' className={`${styles.SelectionsLabel}`}>2.25x</label>
                                </li>
                                <li className={styles[selectionVisibility['2.5x']]}>
                                    <input type='radio' value='2.5x' name='sizing' id='2.5x'/>
                                    <label htmlFor='2.5x' className={`${styles.SelectionsLabel}`}>2.5x</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className={styles[selectionVisibility['3x']]}>
                                    <input type='radio' value='3x' name='sizing' id='3x'/>
                                    <label htmlFor='3x' className={`${styles.SelectionsLabel}`}>3x</label>
                                </li>
                                <li className={styles[selectionVisibility['3.5x']]}>
                                    <input type='radio' value='3.5x' name='sizing' id='3.5x'/>
                                    <label htmlFor='3.5x' className={`${styles.SelectionsLabel}`}>3.5x</label>
                                </li>
                                <li className={styles[selectionVisibility['4x']]}>
                                    <input type='radio' value='4x' name='sizing' id='4x'/>
                                    <label htmlFor='4x' className={`${styles.SelectionsLabel}`}>4x</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className={styles[selectionVisibility['4.5x']]}>
                                    <input type='radio' value='4.5x' name='sizing' id='4.5x'/>
                                    <label htmlFor='4.5x' className={`${styles.SelectionsLabel}`}>4.5x</label>
                                </li>
                                <li className={styles[selectionVisibility['5x']]}>
                                    <input type='radio' value='5x' name='sizing' id='5x'/>
                                    <label htmlFor='5x' className={`${styles.SelectionsLabel}`}>5x</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.heroPosition} ${styles[selectionVisibility['heroPosition']]}`}id="heroPosition" onChange={this.props.handleHeroPositionUpdate}>
                        <h3 className={styles.middleLabels}>Hero Position</h3>
                        <div>
                            <ul>
                                <li className={styles[selectionVisibility['UTGHP']]}>
                                    <input type='radio' value='UTG' name='heroPosition' id='UTGHP'/>
                                    <label htmlFor='UTGHP' className={`${styles.SelectionsLabel}`}>UTG</label>
                                </li>
                                <li className={styles[selectionVisibility['HJHP']]}>
                                    <input type='radio' value='HJ' name='heroPosition'  id='HJHP'/>
                                    <label htmlFor='HJHP' className={styles.SelectionsLabel}>HJ</label>
                                </li>
                                <li className={styles[selectionVisibility['COHP']]}>
                                    <input type='radio' value='CO' name='heroPosition'  id='COHP'/>
                                    <label htmlFor='COHP' className={styles.SelectionsLabel}>CO</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className={styles[selectionVisibility['BTNHP']]}>
                                    <input type='radio' value='BTN' name='heroPosition' id='BTNHP'/>
                                    <label htmlFor='BTNHP' className={styles.SelectionsLabel}>BTN</label>
                                </li>
                                <li className={styles[selectionVisibility['SBHP']]}>
                                    <input type='radio' value='SB' name='heroPosition'  id='SBHP'/>
                                    <label htmlFor='SBHP' className={styles.SelectionsLabel}>SB</label>
                                </li>
                                <li className={styles[selectionVisibility['BBHP']]}>
                                    <input type='radio' value='BB' name='heroPosition'  id='BBHP'/>
                                    <label htmlFor='BBHP' className={`${styles.SelectionsLabel}`}>BB</label>
                                </li>
                            </ul>
                        </div>
                    </div>  
                    <div className={`${styles.villianPosition} ${styles[selectionVisibility['villianPosition']]}`} id="villianPosition" onChange={this.props.handleVillianPositionUpdate}>
                        <h3 className={styles.middleLabels}>Villian Position</h3>
                        <div>
                            <ul>
                                <li className={styles[selectionVisibility['UTGVP']]}>
                                    <input type='radio' value='UTG' name='villianPosition' id='UTGVP'/>
                                    <label htmlFor='UTGVP' className={`${styles.SelectionsLabel}`}>UTG</label>
                                </li>
                                <li className={styles[selectionVisibility['HJVP']]}>
                                    <input type='radio' value='HJ' name='villianPosition'  id='HJVP'/>
                                    <label htmlFor='HJVP' className={styles.SelectionsLabel}>HJ</label>
                                </li>
                                <li className={styles[selectionVisibility['COVP']]}>
                                    <input type='radio' value='CO' name='villianPosition'  id='COVP'/>
                                    <label htmlFor='COVP' className={styles.SelectionsLabel}>CO</label>
                                </li>
                            </ul>
                        </div>
                       <div>
                        <ul>
                            <li className={styles[selectionVisibility['BTNVP']]}>
                                <input type='radio' value='BTN' name='villianPosition' id='BTNVP'/>
                                <label htmlFor='BTNVP' className={styles.SelectionsLabel}>BTN</label>
                            </li>
                            <li className={styles[selectionVisibility['SBVP']]}>
                                <input type='radio' value='SB' name='villianPosition'  id='SBVP'/>
                                <label htmlFor='SBVP' className={styles.SelectionsLabel}>SB</label>
                            </li>
                            <li className={styles[selectionVisibility['BBVP']]}>
                                <input type='radio' value='BB' name='villianPosition'  id='BBVP'/>
                                <label htmlFor='BBVP' className={`${styles.SelectionsLabel}`}>BB</label>
                            </li>
                        </ul>
                       </div>
                    </div> 
                </>
        );
    };
};

export default Selections;