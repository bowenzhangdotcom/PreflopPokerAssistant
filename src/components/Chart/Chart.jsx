import React from 'react';
import styles from './Chart.module.css';

const Chart = ({data: {chartRangeHands}}) => {
    if(!chartRangeHands) {
        return 'Loading...'
    }
    return (
        <table id='RangeChart'>
            <tbody>
                <tr>
                    <th></th>
                    <th>A</th>
                    <th>K</th>
                    <th>Q</th>
                    <th>J</th>
                    <th>T</th>
                    <th>9</th>
                    <th>8</th>
                    <th>7</th>
                    <th>6</th>
                    <th>5</th>
                    <th>4</th>
                    <th>3</th>
                    <th>2</th>
                </tr>
                <tr>
                    <th>A</th>
                    <td id='AA' className={styles[chartRangeHands['AA']]}>AA</td>
                    <td id='AKs' className={styles[chartRangeHands['AKs']]}>AKs</td>
                    <td id='AQs' className={styles[chartRangeHands['AQs']]}>AQs</td>
                    <td id='AJs' className={styles[chartRangeHands['AJs']]}>AJs</td>
                    <td id='ATs' className={styles[chartRangeHands['ATs']]}>ATs</td>
                    <td id='A9s' className={styles[chartRangeHands['A9s']]}>A9s</td>
                    <td id='A8s' className={styles[chartRangeHands['A8s']]}>A8s</td>
                    <td id='A7s' className={styles[chartRangeHands['A7s']]}>A7s</td>
                    <td id='A6s' className={styles[chartRangeHands['A6s']]}>A6s</td>
                    <td id='A5s' className={styles[chartRangeHands['A5s']]}>A5s</td>
                    <td id='A4s' className={styles[chartRangeHands['A4s']]}>A4s</td>
                    <td id='A3s' className={styles[chartRangeHands['A3s']]}>A3s</td>
                    <td id='A2s' className={styles[chartRangeHands['A2s']]}>A2s</td>
                </tr>
                <tr>
                    <th>K</th>
                    <td id='AKo' className={styles[chartRangeHands['AKo']]}>AKo</td>
                    <td id='KK' className={styles[chartRangeHands['KK']]}>KK</td>
                    <td id='KQs' className={styles[chartRangeHands['KQs']]}>KQs</td>
                    <td id='KJs' className={styles[chartRangeHands['KJs']]}>KJs</td>
                    <td id='KTs' className={styles[chartRangeHands['KTs']]}>KTs</td>
                    <td id='K9s' className={styles[chartRangeHands['K9s']]}>K9s</td>
                    <td id='K8s' className={styles[chartRangeHands['K8s']]}>K8s</td>
                    <td id='K7s' className={styles[chartRangeHands['K7s']]}>K7s</td>
                    <td id='K6s' className={styles[chartRangeHands['K6s']]}>K6s</td>
                    <td id='K5s' className={styles[chartRangeHands['K5s']]}>K5s</td>
                    <td id='K4s' className={styles[chartRangeHands['K4s']]}>K4s</td>
                    <td id='K3s' className={styles[chartRangeHands['K3s']]}>K3s</td>
                    <td id='K2s' className={styles[chartRangeHands['K2s']]}>K2s</td>
                </tr>
                <tr>
                    <th>Q</th>
                    <td id='AQo' className={styles[chartRangeHands['AQo']]}>AQo</td>
                    <td id='KQo' className={styles[chartRangeHands['KQo']]}>KQo</td>
                    <td id='QQ' className={styles[chartRangeHands['QQ']]}>QQ</td>
                    <td id='QJs' className={styles[chartRangeHands['QJs']]}>QJs</td>
                    <td id='QTs' className={styles[chartRangeHands['QTs']]}>QTs</td>
                    <td id='Q9s' className={styles[chartRangeHands['Q9s']]}>Q9s</td>
                    <td id='Q8s' className={styles[chartRangeHands['Q8s']]}>Q8s</td>
                    <td id='Q7s' className={styles[chartRangeHands['Q7s']]}>Q7s</td>
                    <td id='Q6s' className={styles[chartRangeHands['Q6s']]}>Q6s</td>
                    <td id='Q5s' className={styles[chartRangeHands['Q5s']]}>Q5s</td>
                    <td id='Q4s' className={styles[chartRangeHands['Q4s']]}>Q4s</td>
                    <td id='Q3s' className={styles[chartRangeHands['Q3s']]}>Q3s</td>
                    <td id='Q2s' className={styles[chartRangeHands['Q2s']]}>Q2s</td>
                </tr>
                <tr>
                    <th>J</th>
                    <td id='AJo' className={styles[chartRangeHands['AJo']]}>AJo</td>
                    <td id='KJo' className={styles[chartRangeHands['KJo']]}>KJo</td>
                    <td id='QJo' className={styles[chartRangeHands['QJo']]}>QJo</td>                    
                    <td id='JJ' className={styles[chartRangeHands['JJ']]}>JJ</td>
                    <td id='JTs' className={styles[chartRangeHands['JTs']]}>JTs</td>
                    <td id='J9s' className={styles[chartRangeHands['J9s']]}>J9s</td>
                    <td id='J8s' className={styles[chartRangeHands['J8s']]}>J8s</td>
                    <td id='J7s' className={styles[chartRangeHands['J7s']]}>J7s</td>
                    <td id='J6s' className={styles[chartRangeHands['J6s']]}>J6s</td>
                    <td id='J5s' className={styles[chartRangeHands['J5s']]}>J5s</td>
                    <td id='J4s' className={styles[chartRangeHands['J4s']]}>J4s</td>
                    <td id='J3s' className={styles[chartRangeHands['J3s']]}>J3s</td>
                    <td id='J2s' className={styles[chartRangeHands['J2s']]}>J2s</td>
                </tr>
                <tr>
                    <th>T</th>
                    <td id='ATo' className={styles[chartRangeHands['ATo']]}>ATo</td>
                    <td id='KTo' className={styles[chartRangeHands['KTo']]}>KTo</td>
                    <td id='QTo' className={styles[chartRangeHands['QTo']]}>QTo</td>
                    <td id='JTo' className={styles[chartRangeHands['JTo']]}>JTo</td>
                    <td id='TT' className={styles[chartRangeHands['TT']]}>TT</td>
                    <td id='T9s' className={styles[chartRangeHands['T9s']]}>T9s</td>
                    <td id='T8s' className={styles[chartRangeHands['T8s']]}>T8s</td>
                    <td id='T7s' className={styles[chartRangeHands['T7s']]}>T7s</td>
                    <td id='T6s' className={styles[chartRangeHands['T6s']]}>T6s</td>
                    <td id='T5s' className={styles[chartRangeHands['T5s']]}>T5s</td>
                    <td id='T4s' className={styles[chartRangeHands['T4s']]}>T4s</td>
                    <td id='T3s' className={styles[chartRangeHands['T3s']]}>T3s</td>
                    <td id='T2s' className={styles[chartRangeHands['T2s']]}>T2s</td>
                </tr>
                <tr>
                    <th>9</th>
                    <td id='A9o' className={styles[chartRangeHands['A9o']]}>A9o</td>
                    <td id='K9o' className={styles[chartRangeHands['K9o']]}>K9o</td>
                    <td id='Q9o' className={styles[chartRangeHands['Q9o']]}>Q9o</td>
                    <td id='J9o' className={styles[chartRangeHands['J9o']]}>J9o</td>
                    <td id='T9o' className={styles[chartRangeHands['T9o']]}>T9o</td>
                    <td id='99' className={styles[chartRangeHands['99']]}>99</td>
                    <td id='98s' className={styles[chartRangeHands['98s']]}>98s</td>
                    <td id='97s' className={styles[chartRangeHands['97s']]}>97s</td>
                    <td id='96s' className={styles[chartRangeHands['96s']]}>96s</td>
                    <td id='95s' className={styles[chartRangeHands['95s']]}>95s</td>
                    <td id='94s' className={styles[chartRangeHands['94s']]}>94s</td>
                    <td id='93s' className={styles[chartRangeHands['93s']]}>93s</td>
                    <td id='92s' className={styles[chartRangeHands['92s']]}>92s</td>
                </tr>
                <tr>
                    <th>8</th>
                    <td id='A8o' className={styles[chartRangeHands['A8o']]}>A8o</td>
                    <td id='K8o' className={styles[chartRangeHands['K8o']]}>K8o</td>
                    <td id='Q8o' className={styles[chartRangeHands['Q8o']]}>Q8o</td>
                    <td id='J8o' className={styles[chartRangeHands['J8o']]}>J8o</td>
                    <td id='T8o' className={styles[chartRangeHands['T8o']]}>T8o</td>
                    <td id='98o' className={styles[chartRangeHands['98o']]}>98o</td>
                    <td id='88' className={styles[chartRangeHands['88']]}>88</td>
                    <td id='87s' className={styles[chartRangeHands['87s']]}>87s</td>
                    <td id='86s' className={styles[chartRangeHands['86s']]}>86s</td>
                    <td id='85s' className={styles[chartRangeHands['85s']]}>85s</td>
                    <td id='84s' className={styles[chartRangeHands['84s']]}>84s</td>
                    <td id='83s' className={styles[chartRangeHands['83s']]}>83s</td>
                    <td id='82s' className={styles[chartRangeHands['82s']]}>82s</td>
                </tr>
                <tr>
                    <th>7</th>
                    <td id='A7o' className={styles[chartRangeHands['A7o']]}>A7o</td>
                    <td id='K7o' className={styles[chartRangeHands['K7o']]}>K7o</td>
                    <td id='Q7o' className={styles[chartRangeHands['Q7o']]}>Q7o</td>
                    <td id='J7o' className={styles[chartRangeHands['J7o']]}>J7o</td>
                    <td id='T7o' className={styles[chartRangeHands['T7o']]}>T7o</td>
                    <td id='97o' className={styles[chartRangeHands['97o']]}>97o</td>
                    <td id='87o' className={styles[chartRangeHands['87o']]}>87o</td>
                    <td id='77' className={styles[chartRangeHands['77']]}>77</td>
                    <td id='76s' className={styles[chartRangeHands['76s']]}>76s</td>
                    <td id='75s' className={styles[chartRangeHands['75s']]}>75s</td>
                    <td id='74s' className={styles[chartRangeHands['74s']]}>74s</td>
                    <td id='73s' className={styles[chartRangeHands['73s']]}>73s</td>
                    <td id='72s' className={styles[chartRangeHands['72s']]}>72s</td>
                </tr>
                <tr>
                    <th>6</th>
                    <td id='A6o' className={styles[chartRangeHands['A6o']]}>A6o</td>
                    <td id='K6o' className={styles[chartRangeHands['K6o']]}>K6o</td>
                    <td id='Q6o' className={styles[chartRangeHands['Q6o']]}>Q6o</td>
                    <td id='J6o' className={styles[chartRangeHands['J6o']]}>J6o</td>
                    <td id='T6o' className={styles[chartRangeHands['T6o']]}>T6o</td>
                    <td id='96o' className={styles[chartRangeHands['96o']]}>96o</td>
                    <td id='86o' className={styles[chartRangeHands['86o']]}>86o</td>
                    <td id='76o' className={styles[chartRangeHands['76o']]}>76o</td>
                    <td id='66' className={styles[chartRangeHands['66']]}>66</td>
                    <td id='65s' className={styles[chartRangeHands['65s']]}>65s</td>
                    <td id='64s' className={styles[chartRangeHands['64s']]}>64s</td>
                    <td id='63s' className={styles[chartRangeHands['63s']]}>63s</td>
                    <td id='62s' className={styles[chartRangeHands['62s']]}>62s</td>
                </tr>
                <tr>
                    <th>5</th>
                    <td id='A5o' className={styles[chartRangeHands['A5o']]}>A5o</td>
                    <td id='K5o' className={styles[chartRangeHands['K5o']]}>K5o</td>
                    <td id='Q5o' className={styles[chartRangeHands['Q5o']]}>Q5o</td>
                    <td id='J5o' className={styles[chartRangeHands['J5o']]}>J5o</td>
                    <td id='T5o' className={styles[chartRangeHands['T5o']]}>T5o</td>
                    <td id='95o' className={styles[chartRangeHands['95o']]}>95o</td>
                    <td id='85o' className={styles[chartRangeHands['85o']]}>85o</td>
                    <td id='75o' className={styles[chartRangeHands['75o']]}>75o</td>
                    <td id='65o' className={styles[chartRangeHands['65o']]}>65o</td>
                    <td id='55' className={styles[chartRangeHands['55']]}>55</td>
                    <td id='54s' className={styles[chartRangeHands['54s']]}>54s</td>
                    <td id='53s' className={styles[chartRangeHands['53s']]}>53s</td>
                    <td id='52s' className={styles[chartRangeHands['52s']]}>52s</td>
                </tr>
                <tr>
                    <th>4</th>
                    <td id='A4o' className={styles[chartRangeHands['A4o']]}>A4o</td>
                    <td id='K4o' className={styles[chartRangeHands['K4o']]}>K4o</td>
                    <td id='Q4o' className={styles[chartRangeHands['Q4o']]}>Q4o</td>
                    <td id='J4o' className={styles[chartRangeHands['J4o']]}>J4o</td>
                    <td id='T4o' className={styles[chartRangeHands['T4o']]}>T4o</td>
                    <td id='94o' className={styles[chartRangeHands['94o']]}>94o</td>
                    <td id='84o' className={styles[chartRangeHands['84o']]}>84o</td>
                    <td id='74o' className={styles[chartRangeHands['74o']]}>74o</td>
                    <td id='64o' className={styles[chartRangeHands['64o']]}>64o</td>
                    <td id='54o' className={styles[chartRangeHands['54o']]}>54o</td>
                    <td id='44' className={styles[chartRangeHands['44']]}>44</td>
                    <td id='43s' className={styles[chartRangeHands['43s']]}>43s</td>
                    <td id='42s' className={styles[chartRangeHands['42s']]}>42s</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td id='A3o' className={styles[chartRangeHands['A3o']]}>A3o</td>
                    <td id='K3o' className={styles[chartRangeHands['K3o']]}>K3o</td>
                    <td id='Q3o' className={styles[chartRangeHands['Q3o']]}>Q3o</td>
                    <td id='J3o' className={styles[chartRangeHands['J3o']]}>J3o</td>
                    <td id='T3o' className={styles[chartRangeHands['T3o']]}>T3o</td>
                    <td id='93o' className={styles[chartRangeHands['93o']]}>93o</td>
                    <td id='83o' className={styles[chartRangeHands['83o']]}>83o</td>
                    <td id='73o' className={styles[chartRangeHands['73o']]}>73o</td>
                    <td id='63o' className={styles[chartRangeHands['63o']]}>63o</td>
                    <td id='53o' className={styles[chartRangeHands['53o']]}>53o</td>
                    <td id='43o' className={styles[chartRangeHands['43o']]}>43o</td>
                    <td id='33' className={styles[chartRangeHands['33']]}>33</td>
                    <td id='32s' className={styles[chartRangeHands['32s']]}>32s</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td id='A2o' className={styles[chartRangeHands['A2o']]}>A2o</td>
                    <td id='K2o' className={styles[chartRangeHands['K2o']]}>K2o</td>
                    <td id='Q2o' className={styles[chartRangeHands['Q2o']]}>Q2o</td>
                    <td id='J2o' className={styles[chartRangeHands['J2o']]}>J2o</td>
                    <td id='T2o' className={styles[chartRangeHands['T2o']]}>T2o</td>
                    <td id='92o' className={styles[chartRangeHands['92o']]}>92o</td>
                    <td id='82o' className={styles[chartRangeHands['82o']]}>82o</td>
                    <td id='72o' className={styles[chartRangeHands['72o']]}>72o</td>
                    <td id='62o' className={styles[chartRangeHands['62o']]}>62o</td>
                    <td id='52o' className={styles[chartRangeHands['52o']]}>52o</td>
                    <td id='42o' className={styles[chartRangeHands['42o']]}>42o</td>
                    <td id='32o' className={styles[chartRangeHands['32o']]}>32o</td>
                    <td id='22' className={styles[chartRangeHands['22']]}>22</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Chart;