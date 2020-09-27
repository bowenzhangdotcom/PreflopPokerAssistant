import React from 'react';
import styles from './Chart.module.css';

const Chart = ({data: {handChart}}) => {
    if(!handChart) {
        return 'Loading...'
    }
    console.log(handChart['AA']);
    return (
        <table id="RangeChart">
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
                    <td id="AA" className={styles[handChart['AA']]}>AA</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Chart;
//todo write some python to generate the html