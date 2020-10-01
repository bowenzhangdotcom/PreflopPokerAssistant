import React from 'react';
import Chart from './components/Chart/Chart';
import Legend from './components/Legend/Legend';
import styles from './App.module.css';
import {fetchData} from './api/index.js';
import {RangeChart} from './ChartDB/HandDefinitions/chart.js';



class App extends React.Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            chartType: 'NA',
            heroPosition: 'NA',
            villianPosition: 'NA',
            chartName: '',
            chartRangeHands: ''
        };
    };

    async componentDidMount() {
        //inputChartType, inputHeroPosition, inputVillianPosition
        const serverData = await fetchData(this.state.chartType, this.state.heroPosition, this.state.villianPosition);
        let chartRangeObject = this.generateChartRange(serverData);
        this.setState({chartRangeHands: chartRangeObject.getChart()});
        this.setState({chartName: serverData["chartName"]});
        console.log(this.state);
    }

    generateChartRange(data, chartName) {
        let chartRange = new RangeChart(data["chartName"]);
        chartRange.setRaise(data["raiseShortRange"]);
        chartRange.setCall(data["callShortRange"]);
        chartRange.setFold(data["foldShortRange"]);
        return chartRange;
    }

    render() {
        return (
            <div>
                <h1>{this.state.chartName}</h1>
                <div className={styles.container}>
                    <Chart data={this.state} />
                    <Legend />
                </div>
            </div>
        );
    };
};

export default App;

//update fetchdata to take inputs from state and do upon update of state
//update to make fetchdata also create a rangeChart object
//make sure this is able to be passed down to state and back up


//add buttons to update state and trigger a recalc

//spacing between gaps
//if logic is not obvious, extract into a variable

