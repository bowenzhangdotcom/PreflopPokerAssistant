import React from 'react';
import Chart from './components/Chart/Chart';
import Legend from './components/Legend/Legend';
import Selections from './components/Selections/Selections';
import styles from './App.module.css';
import {fetchData, defaultChart} from './api/index.js';
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

    async updateChartInfo() {
        //inputChartType, inputHeroPosition, inputVillianPosition
        let cT = this.state.chartType;
        let hP = this.state.heroPosition;
        let vP = this.state.villianPosition;
        
        if(cT === 'RFI') {
            vP = 'NA'
        };
        
        const serverData = await fetchData(cT, hP, vP);
        try {
            let chartRangeObject = this.generateChartRange(serverData);
            this.setState({chartRangeHands: chartRangeObject.getChart()});
            this.setState({chartName: serverData["chartName"]});
        } catch (error) {
            this.setState({chartRangeHands: defaultChart});
            this.setState({chartName: 'Please select a valid range'})
        }
    }

    componentDidMount() {
        this.updateChartInfo();
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.chartType !== this.state.chartType 
            || prevState.heroPosition !== this.state.heroPosition
            || prevState.villianPosition !== this.state.villianPosition
        ) {
            this.updateChartInfo();
        }
    };

    generateChartRange = (data) => {
        let chartRange = new RangeChart(data["chartName"]);
        chartRange.setRaise(data["raiseShortRange"]);
        chartRange.setCall(data["callShortRange"]);
        chartRange.setFold(data["foldShortRange"]);
        return chartRange;
    };

    handleChartTypeUpdate = (event) => {
        this.setState({
            chartType: event.target.value
        });
        console.log(this.state)
    }

    handleHeroPositionUpdate = (event) => {
        this.setState({
            heroPosition: event.target.value
        });
        console.log(this.state)
    }

    handleVillianPositionUpdate = (event) => {
        this.setState({
            villianPosition: event.target.value
        });
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <h1>{this.state.chartName || 'Please select a valid range'}</h1>
                <div className={styles.container}>
                    <Selections 
                        handleChartTypeUpdate = {this.handleChartTypeUpdate} 
                        handleHeroPositionUpdate = {this.handleHeroPositionUpdate} 
                        handleVillianPositionUpdate = {this.handleVillianPositionUpdate} 
                    />
                    <Chart data={this.state} />
                    <Legend />
                </div>
            </div>
        );
    };
};

export default App;

//deploy server!
//add option for password entry as an opening popup 
//Reformat positioning to be horizontal for desktop with percentages
//Update into absolutes for the iphone xs max
//add documentation on how to use e.g. chartType definitions and positions

//spacing between gaps
//if logic is not obvious, extract into a variable

