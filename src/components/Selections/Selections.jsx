import React from 'react';

class Selections extends React.Component {

    render() {
        return (
                <>
                    <div id="chartType" onChange={this.props.handleChartTypeUpdate}>
                        <h3>Chart Type</h3>
                        <input type="radio" value="RFI" name="chartType" /> RFI
                        <input type="radio" value="FOR" name="chartType" /> FOR
                        <input type="radio" value="F3B" name="chartType" /> F3B
                    </div>  
                    <div id="heroPosition" onChange={this.props.handleHeroPositionUpdate}>
                        <h3>Hero Position</h3>
                        <input type="radio" value="EP" name="heroPosition" /> EP
                        <input type="radio" value="MP" name="heroPosition" /> MP
                        <input type="radio" value="CO" name="heroPosition" /> CO
                        <input type="radio" value="BU" name="heroPosition" /> BU
                        <input type="radio" value="SB" name="heroPosition" /> SB
                        <input type="radio" value="BB" name="heroPosition" /> BB
                    </div>  
                    <div id="villianPosition" onChange={this.props.handleVillianPositionUpdate}>
                        <h3>Villian Position</h3>
                        <input type="radio" value="EP" name="villianPosition" /> EP
                        <input type="radio" value="MP" name="villianPosition" /> MP
                        <input type="radio" value="CO" name="villianPosition" /> CO
                        <input type="radio" value="BU" name="villianPosition" /> BU
                        <input type="radio" value="SB" name="villianPosition" /> SB
                        <input type="radio" value="BB" name="villianPosition" /> BB
                    </div> 
                </>
        );
    };
};

export default Selections;