import React from "react";
import Chart from "./Chart";
import light, { dark } from "./themes";
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import '../menuContent.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);  
        this.toggleDarkMode=this.toggleDarkMode.bind(this);
        this.state = {theme_data: dark, theme_name: 'dark', speed: 4000, menuOpen: false};
        this.openMenu=this.openMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.increaseSpeed=this.increaseSpeed.bind(this);
        this.decreaseSpeed=this.decreaseSpeed.bind(this);
    };

    toggleDarkMode() {
        if (this.state.theme_name === 'light') {
            this.setState({theme_data: dark, theme_name: 'dark'});
            document.body.style = 'background: black;';
        } else {
            this.setState({theme_data: light, theme_name: 'light'});
            document.body.style = 'background: white;';
        }
    }

    openMenu() {
        this.setState({ menuOpen: true });
    }

    closeMenu() {
        this.setState({ menuOpen: false });
    }

    increaseSpeed() {
        if (this.state.speed > 3000) {
            this.setState({speed: (this.state.speed - 500)});
        }
    }

    decreaseSpeed() {
        if (this.state.speed < 10000) {
            this.setState({speed: (this.state.speed + 500)});
        }
    }

    render() { // TODO: Import all the chart configurations and generate the rows with a map function.
        return ( //TODO: This should prioritize all charts on screen (2 rows of 3 or 3 rows of 2)
            <div className="container-fluid" 
                style={{
                    background: this.state.theme_name === 'dark' ? '#000' : '#fff',
                    color: this.state.theme_name === 'dark' ? '#fff' : '#000',
                    height: '100vh'
                }}>
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu}>
                    <div className="menu-item" style={{color: 'black'}}>
                        <div onClick={this.toggleDarkMode} >Toggle DarkMode</div>
                    </div>
                    <div className="menu-item" style={{color: 'black'}}>
                        <div onClick={this.increaseSpeed} >Increase Speed</div>
                    </div>
                    <div className="menu-item" style={{color: 'black'}}>
                        <div onClick={this.decreaseSpeed} >Decrease Speed</div>
                    </div>
                    <div className="menu-item" style={{color: 'black'}}>
                        <p className="hint">Current Interval Value:
                            <span style={{color: 'blue', fontWeight: 'bold', width: '100%'}}> {(this.state.speed / 1000)} seconds</span>
                        </p>
                    </div>
                    <p className="hint" style={{color: 'black'}}>Click outside the menu to close it, or swipe it closed on touch device</p>
                </CheeseburgerMenu>
                <div className="burger-container" style={{height: 50}}>
                    <HamburgerMenu
                        isOpen={this.state.menuOpen}
                        menuClicked={this.openMenu}
                        width={30}
                        height={17}
                        strokeWidth={3.5}
                        rotate={0}
                        color='grey'
                        borderRadius={100}
                        animationDuration={0.1}>
                    </HamburgerMenu>
                   &nbsp; Menu
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <Chart
                            data={[{data: this.props.state.column_chart.series[0].data}]}
                            titleName={this.props.state.column_chart.series[0].title}
                            speed={this.state.speed}
                            chartConfig={this.props.state.column_chart.chartConfig}
                            chartType='column'
                            inverted={this.props.state.column_chart.inverted}
                            colorByPoint={true}
                            series={this.props.state.column_chart.series}
                            theme_data={this.state.theme_data}
                            theme_name={this.state.theme_name}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">                
                        <Chart
                            data={[{data: this.props.state.column_chart.series[0].data}]}
                            titleName={this.props.state.column_chart.series[0].title}
                            speed={this.state.speed}
                            chartConfig={this.props.state.column_chart.chartConfig}
                            chartType={'spline'}
                            inverted={false}
                            colorByPoint={false}
                            series={this.props.state.column_chart.series}
                            theme_data={this.state.theme_data}
                            theme_name={this.state.theme_name}
                        />  
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <Chart //TODO: Implement radial gradient fill https://www.highcharts.com/blog/snippets/dynamic-bubbles-chart/
                            data={[{data: this.props.state.bubble_chart.series[0].data}]}
                            titleName={this.props.state.bubble_chart.series[0].title}
                            speed={this.state.speed}
                            chartConfig={this.props.state.bubble_chart.chartConfig}
                            chartType='bubble'
                            inverted={this.props.state.bubble_chart.inverted}
                            series={this.props.state.bubble_chart.series}
                            theme_data={this.state.theme_data}
                            theme_name={this.state.theme_name}
                        />  
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <Chart
                            data={this.props.state.packed_bubble.series}
                            titleName={"Global Carbon Emissions 2014"}
                            speed={this.state.speed}
                            chartConfig={this.props.state.packed_bubble.chartConfig}
                            chartType='packedbubble'
                            inverted={this.props.state.packed_bubble.inverted}
                            splitSeries={true}
                            series={this.props.state.packed_bubble.series}
                            theme_data={this.state.theme_data}
                            theme_name={this.state.theme_name}
                        />  
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;



