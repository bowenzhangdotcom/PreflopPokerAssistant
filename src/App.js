import React from 'react';
import Chart from './components/Chart/Chart';
import Legend from './components/Legend/Legend';
import Selections from './components/Selections/Selections';
import styles from './App.module.css';
import {fetchData, defaultChart} from './api/index.js';


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
        let cT = this.state.chartType;
        let hP = this.state.heroPosition;
        let vP = this.state.villianPosition;
        
        if(cT === 'RFI') {
            vP = 'NA'
        };
        
        const serverData = await fetchData(cT, hP, vP);
        try {
            this.setState({chartRangeHands: serverData["chartRange"]});
            this.setState({chartName: serverData["chartName"]});
        } catch (error) {
            this.setState({chartRangeHands: defaultChart});
            this.setState({chartName: 'Please select a valid range'})
        };
        console.log(this.state);
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

    handleChartTypeUpdate = (event) => {
        this.setState({
            chartType: event.target.value
        });
    }

    handleHeroPositionUpdate = (event) => {
        this.setState({
            heroPosition: event.target.value
        });
    }

    handleVillianPositionUpdate = (event) => {
        this.setState({
            villianPosition: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h1 className={styles.ChartName}>{this.state.chartName || 'Please select a valid range'}</h1>
                <div className={styles.container}>
                    <div className={styles.Selections}>
                        <Selections className={styles.Selections}
                            selectedChartType = {this.state.chartType}
                            handleChartTypeUpdate = {this.handleChartTypeUpdate} 
                            handleHeroPositionUpdate = {this.handleHeroPositionUpdate} 
                            handleVillianPositionUpdate = {this.handleVillianPositionUpdate} 
                        />                       
                    </div>
                    <div className={styles.ChartCombo}>
                        <Chart data={this.state.chartRangeHands} />
                        <Legend />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;

//deploy server!
//add option for password entry as an opening popup 
//Update into absolutes for the iphone xs max
//add documentation on how to use e.g. chartType definitions and positions

//label for not in range / update fold to be a brighter blue
//new column to db for chart source
//new buttons for new chart types
//add option for how to display - split range toggle
//add option to display with split ranges
//Update irrelevant selections to dissapear on selection
//Fix centering of buttons and such