import React from "react";
import Chart from "./components/Chart/Chart";
import Legend from "./components/Legend/Legend";
//import Login from './components/Login/Login';
import Selections from "./components/Selections/Selections";
import RngToggle from "./components/RngToggle/RngToggle";
import HowTo from "./components/HowTo/HowTo";
import styles from "./App.module.css";
import { fetchData, defaultChart } from "./api/index.js";
import ReactGA from "react-ga";
ReactGA.initialize("UA-167431009-1");
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      username: "username1",
      password: "password1",
      chartType: "NA",
      playerCount: "NA",
      heroPosition: "NA",
      villianPosition: "NA",
      sizing: "NA",
      chartName: "",
      chartRangeHands: defaultChart,
      RngToggle: false,
      readMore: false,
    };
  }

  async updateChartInfo() {
    let cT = this.state.chartType;
    let pC = this.state.playerCount;
    let hP = this.state.heroPosition;
    let vP = this.state.villianPosition;
    let s = this.state.sizing;
    const username = this.state.username;
    const password = this.state.password;

    if (cT === "RFI") {
      vP = "NA";
    }

    const serverData = await fetchData(username, password, cT, pC, hP, vP, s);
    try {
      this.setState({ chartRangeHands: serverData["chartRange"] });
      this.setState({ chartName: serverData["chartName"] });
    } catch (error) {
      this.setState({ chartRangeHands: defaultChart });
      this.setState({ chartName: "Please select a valid range" });
    }
  }

  componentDidMount() {
    this.updateChartInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.chartType !== this.state.chartType ||
      prevState.heroPosition !== this.state.heroPosition ||
      prevState.villianPosition !== this.state.villianPosition ||
      prevState.sizing !== this.state.sizing
    ) {
      this.updateChartInfo();
    }
  }

  handleLoginPassword(event) {
    this.setState({
      password: event.target.password,
    });
    console.log(this.state);
  }

  handleSubmit() {}

  handleChartTypeUpdate = (event) => {
    this.setState({
      chartType: event.target.value,
    });
    if (event.target.value === "RFI" && this.state.playerCount === "2") {
      this.setState({
        sizing: "2.5x",
      });
    }
    if (event.target.value === "FOR" && this.state.playerCount === "2") {
      this.setState({
        sizing: "2x",
      });
      document.getElementById("2x").checked = true;
    }
    if (event.target.value === "F3B" && this.state.playerCount === "2") {
      this.setState({
        sizing: "3x",
      });
      document.getElementById("3x").checked = true;
    }
  };

  handleHeroPositionUpdate = (event) => {
    this.setState({
      heroPosition: event.target.value,
    });
  };

  handleVillianPositionUpdate = (event) => {
    this.setState({
      villianPosition: event.target.value,
    });
  };

  handlePlayerCountUpdate = (event) => {
    if (event.target.value === "2") {
      this.setState({
        sizing: "2.5x",
        heroPosition: "NA",
        playerCount: event.target.value,
        chartType: "RFI",
        villianPosition: "NA",
        chartName: "",
        chartRangeHands: defaultChart,
      });
      document.getElementById("RFI").checked = true;
    }
    if (event.target.value === "6") {
      this.setState({
        sizing: "NA",
        heroPosition: "UTG",
        playerCount: event.target.value,
        chartType: "RFI",
        villianPosition: "NA",
        chartName: "",
        chartRangeHands: defaultChart,
      });
      document.getElementById("RFI").checked = true;
      document.getElementById("UTGHP").checked = true;
    }
  };

  handleSizingUpdate = (event) => {
    this.setState({
      sizing: event.target.value,
    });
  };

  handleRngToggleUpdate = (event) => {
    this.setState({
      RngToggle: event.target.checked,
    });
  };

  handleReadMore = (event) => {
    this.setState({
      readMore: !this.state.readMore,
    });
  };

  render() {
    return (
      <>
        <div className={styles.RotateScreen}>
          <div className={styles.phone}></div>
          <div className={styles.message}>Please rotate your device!</div>
        </div>
        <div className={styles.PrimarySection}>
          <h1 className={styles.ChartName}>
            {this.state.chartName || "Please select a valid range"}
          </h1>
          <div className={styles.container}>
            <div className={styles.Selections}>
              <Selections
                className={styles.Selections}
                selectedChartType={this.state.chartType}
                selectedPlayerCount={this.state.playerCount}
                handleChartTypeUpdate={this.handleChartTypeUpdate}
                handleHeroPositionUpdate={this.handleHeroPositionUpdate}
                handleVillianPositionUpdate={this.handleVillianPositionUpdate}
                handlePlayerCountUpdate={this.handlePlayerCountUpdate}
                handleSizingUpdate={this.handleSizingUpdate}
              />
            </div>
            <div className={styles.ChartCombo}>
              <Chart
                data={this.state.chartRangeHands}
                RngToggle={this.state.RngToggle}
              />
              <RngToggle handleRngToggleUpdate={this.handleRngToggleUpdate} />
              <Legend />
            </div>
          </div>
          <div className={styles.HowTo}>
            <HowTo
              readMore={this.state.readMore}
              handleReadMore={this.handleReadMore}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
