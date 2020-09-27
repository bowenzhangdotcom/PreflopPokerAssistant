import React from 'react';
import Chart from './components/Chart/Chart';
import styles from './App.module.css';
import {ChartDatabase} from './ChartDB/chartDB';


class App extends React.Component {
    state = {};

    componentDidMount() {
        this.setState({
            //todo update to dynamic
            heroPosition: 'EP',
            villianPosition: 'BU',
            chartType: 'F3B',
            handChart: ChartDatabase['F3B']['EP']['BU']['range']['chart']
        });
    };

    render() {
        return (
            <div>
                <h1>Name of the poker chart.</h1>
                <div className={styles.container}>
                    <Chart data={this.state} />
                </div>
            </div>
        );
    };
};

export default App;