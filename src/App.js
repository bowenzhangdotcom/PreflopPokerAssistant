import React from 'react';
import Chart from './components/Chart/Chart';
import Legend from './components/Legend/Legend';
import Login from './components/Login/Login';
import Selections from './components/Selections/Selections';
import RngToggle from './components/RngToggle/RngToggle';
import styles from './App.module.css';
import {fetchData, defaultChart} from './api/index.js';


class App extends React.Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            username: 'user',
            password: 'pass',
            chartType: 'NA',
            playerCount:'NA',
            heroPosition: 'NA',
            villianPosition: 'NA',
            sizing:'NA',
            chartName: '',
            chartRangeHands: '',
            RngToggle: false
        };
    };

    async updateChartInfo() {
        let cT = this.state.chartType;
        let pC = this.state.playerCount;
        let hP = this.state.heroPosition;
        let vP = this.state.villianPosition;
        let s = this.state.sizing;
        const username = this.state.username;
        const password = this.state.password;
        
        if(cT === 'RFI') {
            vP = 'NA'
        };
        
        const serverData = await fetchData(username, password, cT, pC, hP, vP, s);
        console.log(serverData);
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
        if (event.target.value === 'RFI' && this.state.playerCount === '2') {
            this.setState({
                sizing: '2.5x'
            });
        };
    };

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

    handlePlayerCountUpdate = (event) => {
        this.setState({
            playerCount: event.target.value, 
            sizing:'NA',
            chartType: 'NA',
            heroPosition: 'NA',
            villianPosition: 'NA',
            chartName: '',
            chartRangeHands: ''
        });
    };

    handleSizingUpdate = (event) => {
        this.setState({
            sizing: event.target.value
        });
    };

    handleRngToggleUpdate = (event) => {
        this.setState({
            RngToggle: event.target.checked
        });
        console.log(this.state);
    };

    render() {
        return (
            <>
            <div className={styles.Login}>
            </div>
            <div className={styles.PrimarySection}>
                <h1 className={styles.ChartName}>{this.state.chartName || 'Please select a valid range'}</h1>
                <div className={styles.container}>
                    <div className={styles.Selections}>
                        <Selections className={styles.Selections}
                            selectedChartType = {this.state.chartType}
                            selectedPlayerCount = {this.state.playerCount}
                            handleChartTypeUpdate = {this.handleChartTypeUpdate} 
                            handleHeroPositionUpdate = {this.handleHeroPositionUpdate} 
                            handleVillianPositionUpdate = {this.handleVillianPositionUpdate} 
                            handlePlayerCountUpdate = {this.handlePlayerCountUpdate}
                            handleSizingUpdate = {this.handleSizingUpdate}
                        />                       
                    </div>
                    <div className={styles.ChartCombo}>
                        <Chart 
                            data={this.state.chartRangeHands}
                            RngToggle={this.state.RngToggle}
                        />
                        <RngToggle 
                            handleRngToggleUpdate = {this.handleRngToggleUpdate}/>
                        <Legend />
                    </div>
                </div>
            </div>
            </>
        );
    };
};

export default App;

//add option for password entry as an opening popup & and update defaults
//deploy server after changing user / pass

//Update formatting for tablet and phone
//add documentation on how to use e.g. chartType definitions and positions