import React from 'react';
import styles from './Selections.module.css';


class Selections extends React.Component {

    render() {
        return (
                <>
                    <h3>Chart Type</h3>
                    <div className={styles.chartType} id="chartType" onChange={this.props.handleChartTypeUpdate}>
                        <ul>
                            <li>
                                <input type='radio' value='RFI' name='chartType' id='RFI'/>
                                <label htmlFor='RFI'>RFI</label>
                            </li>
                            <li>
                                <input type='radio' value='FOR' name='chartType'  id='FOR'/>
                                <label htmlFor='FOR'>FOR</label>
                            </li>
                            <li>
                                <input type='radio' value='F3B' name='chartType'  id='F3B'/>
                                <label htmlFor='F3B'>F3B</label>
                            </li>
                        </ul>
                    </div>  
                    <h3>Hero Position</h3>
                    <div className={styles.heroPosition} id="heroPosition" onChange={this.props.handleHeroPositionUpdate}>
                        <ul>
                            <li>
                                <input type='radio' value='EP' name='heroPosition' id='EP-HP'/>
                                <label htmlFor='EP-HP'>EP</label>
                            </li>
                            <li>
                                <input type='radio' value='MP' name='heroPosition'  id='MP-HP'/>
                                <label htmlFor='MP-HP'>MP</label>
                            </li>
                            <li>
                                <input type='radio' value='CO' name='heroPosition'  id='CO-HP'/>
                                <label htmlFor='CO-HP'>CO</label>
                            </li>
                            <li>
                                <input type='radio' value='BU' name='heroPosition' id='BU-HP'/>
                                <label htmlFor='BU-HP'>BU</label>
                            </li>
                            <li>
                                <input type='radio' value='SB' name='heroPosition'  id='SB-HP'/>
                                <label htmlFor='SB-HP'>SB</label>
                            </li>
                            <li>
                                <input type='radio' value='BB' name='heroPosition'  id='BB-HP'/>
                                <label htmlFor='BB-HP'>BB</label>
                            </li>
                        </ul>
                    </div>  
                    <h3>Villian Position</h3>
                    <div className={styles.villianPosition} id="villianPosition" onChange={this.props.handleVillianPositionUpdate}>
                        <ul>
                            <li>
                                <input type='radio' value='EP' name='villianPosition' id='EP-VP'/>
                                <label htmlFor='EP-VP'>EP</label>
                            </li>
                            <li>
                                <input type='radio' value='MP' name='villianPosition'  id='MP-VP'/>
                                <label htmlFor='MP-VP'>MP</label>
                            </li>
                            <li>
                                <input type='radio' value='CO' name='villianPosition'  id='CO-VP'/>
                                <label htmlFor='CO-VP'>CO</label>
                            </li>
                            <li>
                                <input type='radio' value='BU' name='villianPosition' id='BU-VP'/>
                                <label htmlFor='BU-VP'>BU</label>
                            </li>
                            <li>
                                <input type='radio' value='SB' name='villianPosition'  id='SB-VP'/>
                                <label htmlFor='SB-VP'>SB</label>
                            </li>
                            <li>
                                <input type='radio' value='BB' name='villianPosition'  id='BB-VP'/>
                                <label htmlFor='BB-VP'>BB</label>
                            </li>
                        </ul>
                    </div> 
                </>
        );
    };
};

export default Selections;