import React from 'react';
import styles from './Chart.module.css';

const Chart = ({data: {chartRangeHands}}) => {
    if(!chartRangeHands) {
        return 'Loading...'
    }
    const handChartRange = chartRangeHands;
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
                    <td id='AA' className={styles[handChartRange['AA']]}>AA</td>
                    <td id='AKs' className={styles[handChartRange['AKs']]}>AKs</td>
                    <td id='AQs' className={styles[handChartRange['AQs']]}>AQs</td>
                    <td id='AJs' className={styles[handChartRange['AJs']]}>AJs</td>
                    <td id='ATs' className={styles[handChartRange['ATs']]}>ATs</td>
                    <td id='A9s' className={styles[handChartRange['A9s']]}>A9s</td>
                    <td id='A8s' className={styles[handChartRange['A8s']]}>A8s</td>
                    <td id='A7s' className={styles[handChartRange['A7s']]}>A7s</td>
                    <td id='A6s' className={styles[handChartRange['A6s']]}>A6s</td>
                    <td id='A5s' className={styles[handChartRange['A5s']]}>A5s</td>
                    <td id='A4s' className={styles[handChartRange['A4s']]}>A4s</td>
                    <td id='A3s' className={styles[handChartRange['A3s']]}>A3s</td>
                    <td id='A2s' className={styles[handChartRange['A2s']]}>A2s</td>
                </tr>
                <tr>
                    <th>K</th>
                    <td id='AKo' className={styles[handChartRange['AKo']]}>AKo</td>
                    <td id='KK' className={styles[handChartRange['KK']]}>KK</td>
                    <td id='KQs' className={styles[handChartRange['KQs']]}>KQs</td>
                    <td id='KJs' className={styles[handChartRange['KJs']]}>KJs</td>
                    <td id='KTs' className={styles[handChartRange['KTs']]}>KTs</td>
                    <td id='K9s' className={styles[handChartRange['K9s']]}>K9s</td>
                    <td id='K8s' className={styles[handChartRange['K8s']]}>K8s</td>
                    <td id='K7s' className={styles[handChartRange['K7s']]}>K7s</td>
                    <td id='K6s' className={styles[handChartRange['K6s']]}>K6s</td>
                    <td id='K5s' className={styles[handChartRange['K5s']]}>K5s</td>
                    <td id='K4s' className={styles[handChartRange['K4s']]}>K4s</td>
                    <td id='K3s' className={styles[handChartRange['K3s']]}>K3s</td>
                    <td id='K2s' className={styles[handChartRange['K2s']]}>K2s</td>
                </tr>
                <tr>
                    <th>Q</th>
                    <td id='AQo' className={styles[handChartRange['AQo']]}>AQo</td>
                    <td id='KQo' className={styles[handChartRange['KQo']]}>KQo</td>
                    <td id='QQ' className={styles[handChartRange['QQ']]}>QQ</td>
                    <td id='QJs' className={styles[handChartRange['QJs']]}>QJs</td>
                    <td id='QTs' className={styles[handChartRange['QTs']]}>QTs</td>
                    <td id='Q9s' className={styles[handChartRange['Q9s']]}>Q9s</td>
                    <td id='Q8s' className={styles[handChartRange['Q8s']]}>Q8s</td>
                    <td id='Q7s' className={styles[handChartRange['Q7s']]}>Q7s</td>
                    <td id='Q6s' className={styles[handChartRange['Q6s']]}>Q6s</td>
                    <td id='Q5s' className={styles[handChartRange['Q5s']]}>Q5s</td>
                    <td id='Q4s' className={styles[handChartRange['Q4s']]}>Q4s</td>
                    <td id='Q3s' className={styles[handChartRange['Q3s']]}>Q3s</td>
                    <td id='Q2s' className={styles[handChartRange['Q2s']]}>Q2s</td>
                </tr>
                <tr>
                    <th>J</th>
                    <td id='AJo' className={styles[handChartRange['AJo']]}>AJo</td>
                    <td id='KJo' className={styles[handChartRange['KJo']]}>KJo</td>
                    <td id='QJo' className={styles[handChartRange['QJo']]}>QJo</td>                    
                    <td id='JJ' className={styles[handChartRange['JJ']]}>JJ</td>
                    <td id='JTs' className={styles[handChartRange['JTs']]}>JTs</td>
                    <td id='J9s' className={styles[handChartRange['J9s']]}>J9s</td>
                    <td id='J8s' className={styles[handChartRange['J8s']]}>J8s</td>
                    <td id='J7s' className={styles[handChartRange['J7s']]}>J7s</td>
                    <td id='J6s' className={styles[handChartRange['J6s']]}>J6s</td>
                    <td id='J5s' className={styles[handChartRange['J5s']]}>J5s</td>
                    <td id='J4s' className={styles[handChartRange['J4s']]}>J4s</td>
                    <td id='J3s' className={styles[handChartRange['J3s']]}>J3s</td>
                    <td id='J2s' className={styles[handChartRange['J2s']]}>J2s</td>
                </tr>
                <tr>
                    <th>T</th>
                    <td id='ATo' className={styles[handChartRange['ATo']]}>ATo</td>
                    <td id='KTo' className={styles[handChartRange['KTo']]}>KTo</td>
                    <td id='QTo' className={styles[handChartRange['QTo']]}>QTo</td>
                    <td id='JTo' className={styles[handChartRange['JTo']]}>JTo</td>
                    <td id='TT' className={styles[handChartRange['TT']]}>TT</td>
                    <td id='T9s' className={styles[handChartRange['T9s']]}>T9s</td>
                    <td id='T8s' className={styles[handChartRange['T8s']]}>T8s</td>
                    <td id='T7s' className={styles[handChartRange['T7s']]}>T7s</td>
                    <td id='T6s' className={styles[handChartRange['T6s']]}>T6s</td>
                    <td id='T5s' className={styles[handChartRange['T5s']]}>T5s</td>
                    <td id='T4s' className={styles[handChartRange['T4s']]}>T4s</td>
                    <td id='T3s' className={styles[handChartRange['T3s']]}>T3s</td>
                    <td id='T2s' className={styles[handChartRange['T2s']]}>T2s</td>
                </tr>
                <tr>
                    <th>9</th>
                    <td id='A9o' className={styles[handChartRange['A9o']]}>A9o</td>
                    <td id='K9o' className={styles[handChartRange['K9o']]}>K9o</td>
                    <td id='Q9o' className={styles[handChartRange['Q9o']]}>Q9o</td>
                    <td id='J9o' className={styles[handChartRange['J9o']]}>J9o</td>
                    <td id='T9o' className={styles[handChartRange['T9o']]}>T9o</td>
                    <td id='99' className={styles[handChartRange['99']]}>99</td>
                    <td id='98s' className={styles[handChartRange['98s']]}>98s</td>
                    <td id='97s' className={styles[handChartRange['97s']]}>97s</td>
                    <td id='96s' className={styles[handChartRange['96s']]}>96s</td>
                    <td id='95s' className={styles[handChartRange['95s']]}>95s</td>
                    <td id='94s' className={styles[handChartRange['94s']]}>94s</td>
                    <td id='93s' className={styles[handChartRange['93s']]}>93s</td>
                    <td id='92s' className={styles[handChartRange['92s']]}>92s</td>
                </tr>
                <tr>
                    <th>8</th>
                    <td id='A8o' className={styles[handChartRange['A8o']]}>A8o</td>
                    <td id='K8o' className={styles[handChartRange['K8o']]}>K8o</td>
                    <td id='Q8o' className={styles[handChartRange['Q8o']]}>Q8o</td>
                    <td id='J8o' className={styles[handChartRange['J8o']]}>J8o</td>
                    <td id='T8o' className={styles[handChartRange['T8o']]}>T8o</td>
                    <td id='98o' className={styles[handChartRange['98o']]}>98o</td>
                    <td id='88' className={styles[handChartRange['88']]}>88</td>
                    <td id='87s' className={styles[handChartRange['87s']]}>87s</td>
                    <td id='86s' className={styles[handChartRange['86s']]}>86s</td>
                    <td id='85s' className={styles[handChartRange['85s']]}>85s</td>
                    <td id='84s' className={styles[handChartRange['84s']]}>84s</td>
                    <td id='83s' className={styles[handChartRange['83s']]}>83s</td>
                    <td id='82s' className={styles[handChartRange['82s']]}>82s</td>
                </tr>
                <tr>
                    <th>7</th>
                    <td id='A7o' className={styles[handChartRange['A7o']]}>A7o</td>
                    <td id='K7o' className={styles[handChartRange['K7o']]}>K7o</td>
                    <td id='Q7o' className={styles[handChartRange['Q7o']]}>Q7o</td>
                    <td id='J7o' className={styles[handChartRange['J7o']]}>J7o</td>
                    <td id='T7o' className={styles[handChartRange['T7o']]}>T7o</td>
                    <td id='97o' className={styles[handChartRange['97o']]}>97o</td>
                    <td id='87o' className={styles[handChartRange['87o']]}>87o</td>
                    <td id='77' className={styles[handChartRange['77']]}>77</td>
                    <td id='76s' className={styles[handChartRange['76s']]}>76s</td>
                    <td id='75s' className={styles[handChartRange['75s']]}>75s</td>
                    <td id='74s' className={styles[handChartRange['74s']]}>74s</td>
                    <td id='73s' className={styles[handChartRange['73s']]}>73s</td>
                    <td id='72s' className={styles[handChartRange['72s']]}>72s</td>
                </tr>
                <tr>
                    <th>6</th>
                    <td id='A6o' className={styles[handChartRange['A6o']]}>A6o</td>
                    <td id='K6o' className={styles[handChartRange['K6o']]}>K6o</td>
                    <td id='Q6o' className={styles[handChartRange['Q6o']]}>Q6o</td>
                    <td id='J6o' className={styles[handChartRange['J6o']]}>J6o</td>
                    <td id='T6o' className={styles[handChartRange['T6o']]}>T6o</td>
                    <td id='96o' className={styles[handChartRange['96o']]}>96o</td>
                    <td id='86o' className={styles[handChartRange['86o']]}>86o</td>
                    <td id='76o' className={styles[handChartRange['76o']]}>76o</td>
                    <td id='66' className={styles[handChartRange['66']]}>66</td>
                    <td id='65s' className={styles[handChartRange['65s']]}>65s</td>
                    <td id='64s' className={styles[handChartRange['64s']]}>64s</td>
                    <td id='63s' className={styles[handChartRange['63s']]}>63s</td>
                    <td id='62s' className={styles[handChartRange['62s']]}>62s</td>
                </tr>
                <tr>
                    <th>5</th>
                    <td id='A5o' className={styles[handChartRange['A5o']]}>A5o</td>
                    <td id='K5o' className={styles[handChartRange['K5o']]}>K5o</td>
                    <td id='Q5o' className={styles[handChartRange['Q5o']]}>Q5o</td>
                    <td id='J5o' className={styles[handChartRange['J5o']]}>J5o</td>
                    <td id='T5o' className={styles[handChartRange['T5o']]}>T5o</td>
                    <td id='95o' className={styles[handChartRange['95o']]}>95o</td>
                    <td id='85o' className={styles[handChartRange['85o']]}>85o</td>
                    <td id='75o' className={styles[handChartRange['75o']]}>75o</td>
                    <td id='65o' className={styles[handChartRange['65o']]}>65o</td>
                    <td id='55' className={styles[handChartRange['55']]}>55</td>
                    <td id='54s' className={styles[handChartRange['54s']]}>54s</td>
                    <td id='53s' className={styles[handChartRange['53s']]}>53s</td>
                    <td id='52s' className={styles[handChartRange['52s']]}>52s</td>
                </tr>
                <tr>
                    <th>4</th>
                    <td id='A4o' className={styles[handChartRange['A4o']]}>A4o</td>
                    <td id='K4o' className={styles[handChartRange['K4o']]}>K4o</td>
                    <td id='Q4o' className={styles[handChartRange['Q4o']]}>Q4o</td>
                    <td id='J4o' className={styles[handChartRange['J4o']]}>J4o</td>
                    <td id='T4o' className={styles[handChartRange['T4o']]}>T4o</td>
                    <td id='94o' className={styles[handChartRange['94o']]}>94o</td>
                    <td id='84o' className={styles[handChartRange['84o']]}>84o</td>
                    <td id='74o' className={styles[handChartRange['74o']]}>74o</td>
                    <td id='64o' className={styles[handChartRange['64o']]}>64o</td>
                    <td id='54o' className={styles[handChartRange['54o']]}>54o</td>
                    <td id='44' className={styles[handChartRange['44']]}>44</td>
                    <td id='43s' className={styles[handChartRange['43s']]}>43s</td>
                    <td id='42s' className={styles[handChartRange['42s']]}>42s</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td id='A3o' className={styles[handChartRange['A3o']]}>A3o</td>
                    <td id='K3o' className={styles[handChartRange['K3o']]}>K3o</td>
                    <td id='Q3o' className={styles[handChartRange['Q3o']]}>Q3o</td>
                    <td id='J3o' className={styles[handChartRange['J3o']]}>J3o</td>
                    <td id='T3o' className={styles[handChartRange['T3o']]}>T3o</td>
                    <td id='93o' className={styles[handChartRange['93o']]}>93o</td>
                    <td id='83o' className={styles[handChartRange['83o']]}>83o</td>
                    <td id='73o' className={styles[handChartRange['73o']]}>73o</td>
                    <td id='63o' className={styles[handChartRange['63o']]}>63o</td>
                    <td id='53o' className={styles[handChartRange['53o']]}>53o</td>
                    <td id='43o' className={styles[handChartRange['43o']]}>43o</td>
                    <td id='33' className={styles[handChartRange['33']]}>33</td>
                    <td id='32s' className={styles[handChartRange['32s']]}>32s</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td id='A2o' className={styles[handChartRange['A2o']]}>A2o</td>
                    <td id='K2o' className={styles[handChartRange['K2o']]}>K2o</td>
                    <td id='Q2o' className={styles[handChartRange['Q2o']]}>Q2o</td>
                    <td id='J2o' className={styles[handChartRange['J2o']]}>J2o</td>
                    <td id='T2o' className={styles[handChartRange['T2o']]}>T2o</td>
                    <td id='92o' className={styles[handChartRange['92o']]}>92o</td>
                    <td id='82o' className={styles[handChartRange['82o']]}>82o</td>
                    <td id='72o' className={styles[handChartRange['72o']]}>72o</td>
                    <td id='62o' className={styles[handChartRange['62o']]}>62o</td>
                    <td id='52o' className={styles[handChartRange['52o']]}>52o</td>
                    <td id='42o' className={styles[handChartRange['42o']]}>42o</td>
                    <td id='32o' className={styles[handChartRange['32o']]}>32o</td>
                    <td id='22' className={styles[handChartRange['22']]}>22</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Chart;