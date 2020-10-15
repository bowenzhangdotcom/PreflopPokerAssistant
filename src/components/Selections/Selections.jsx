import React from 'react';
import styles from './Selections.module.css';


class Selections extends React.Component {
    render() {
        console.log(this.props.selectedChartType);
        return (
                <>
                    <div className={styles.chartType} id="chartType" onChange={this.props.handleChartTypeUpdate}>
                        <h3>Chart Type</h3>
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
                                <label htmlFor='F3B' className={styles.SelectionsLabel}>F3B</label>
                            </li>
                        </ul>
                    </div>  
                    <div className={styles.heroPosition} id="heroPosition" onChange={this.props.handleHeroPositionUpdate}>
                        <h3>Hero Position</h3>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='UTG' name='heroPosition' id='UTG-HP'/>
                                    <label htmlFor='UTG-HP' className={styles.SelectionsLabel}>UTG</label>
                                </li>
                                <li>
                                    <input type='radio' value='HJ' name='heroPosition'  id='HJ-HP'/>
                                    <label htmlFor='HJ-HP' className={styles.SelectionsLabel}>HJ</label>
                                </li>
                                <li>
                                    <input type='radio' value='CO' name='heroPosition'  id='CO-HP'/>
                                    <label htmlFor='CO-HP' className={styles.SelectionsLabel}>CO</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='BTN' name='heroPosition' id='BTN-HP'/>
                                    <label htmlFor='BTN-HP' className={styles.SelectionsLabel}>BTN</label>
                                </li>
                                <li>
                                    <input type='radio' value='SB' name='heroPosition'  id='SB-HP'/>
                                    <label htmlFor='SB-HP' className={styles.SelectionsLabel}>SB</label>
                                </li>
                                <li>
                                    <input type='radio' value='BB' name='heroPosition'  id='BB-HP'/>
                                    <label htmlFor='BB-HP' className={styles.SelectionsLabel}>BB</label>
                                </li>
                            </ul>
                        </div>
                               
                    </div>  
                    <div className={styles.villianPosition} id="villianPosition" onChange={this.props.handleVillianPositionUpdate}>
                        <h3>Villian Position</h3>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='UTG' name='villianPosition' id='UTG-VP'/>
                                    <label htmlFor='UTG-VP' className={styles.SelectionsLabel}>UTG</label>
                                </li>
                                <li>
                                    <input type='radio' value='HJ' name='villianPosition'  id='HJ-VP'/>
                                    <label htmlFor='HJ-VP' className={styles.SelectionsLabel}>HJ</label>
                                </li>
                                <li>
                                    <input type='radio' value='CO' name='villianPosition'  id='CO-VP'/>
                                    <label htmlFor='CO-VP' className={styles.SelectionsLabel}>CO</label>
                                </li>
                            </ul>
                        </div>
                       <div>
                        <ul>
                                <li>
                                    <input type='radio' value='BTN' name='villianPosition' id='BTN-VP'/>
                                    <label htmlFor='BTN-VP' className={styles.SelectionsLabel}>BTN</label>
                                </li>
                                <li>
                                    <input type='radio' value='SB' name='villianPosition'  id='SB-VP'/>
                                    <label htmlFor='SB-VP' className={styles.SelectionsLabel}>SB</label>
                                </li>
                                <li>
                                    <input type='radio' value='BB' name='villianPosition'  id='BB-VP'/>
                                    <label htmlFor='BB-VP' className={styles.SelectionsLabel}>BB</label>
                                </li>
                            </ul>
                       </div>
    
                    </div> 
                </>
        );
    };
};

export default Selections;