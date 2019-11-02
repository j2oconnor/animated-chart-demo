import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { addDataLabels, updateCustomDataLabelColor, animatePackedBubble} from "./animateCharts"
import applyCustomAnimation from "./animateCharts.js";
import ProgressBar from "./progressBar";

require("highcharts/highcharts-more")(Highcharts);

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.animateChart=this.animateChart.bind(this);

    this.state = {
      theme_name: this.props.theme_name,
      progress: 0,
      chartData: {
        chart: {
          animation: { duration: this.props.speed },
          type: this.props.chartType,
          inverted: this.props.inverted,
          plotBorderWidth: 1,
          zoomType: 'xy',
        },
        title: {
          text: this.props.titleName,
          // useHTML: true // TODO: Animate the title to fly in/out, or remove title and add a custom html element
        },
        series: this.props.data,
        plotOptions: {
          column: this.props.colorByPoint,
          series: {
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              style: {fontSize: '17px'},
            },
            packedbubble: {
              layoutAlgorithm: {
                splitSeries: this.props.splitSeries
              }
            }
          }
        },
        ...this.props.chartConfig
      }
    };
    this.chartRef = React.createRef();
  }

  animateChart(chart, series, chartType) {
    this.setState({progress: 0});
    var count = 1, series_count = series.length
    var chunk = 100 / (series.length - 2), cur_prog = this.state.progress;
    const advanceSeries = () => {
      this.setState({progress: cur_prog});
      let next_series = series[count];
      applyCustomAnimation(chart, next_series, chartType, series, count);
      count++;
      if (count < series_count){
        cur_prog = cur_prog + chunk;
        setTimeout(advanceSeries, this.props.speed);
      } else {
        count = 1;
        cur_prog = 0;
        setTimeout(advanceSeries, this.props.speed);
      }
    }
    advanceSeries();
  }

  componentDidMount() {
    this.setState({chartData: this.props.theme_data});
    var chart = this.refs.chartRef.chart;
    if (this.props.chartType === 'column'){
      addDataLabels(chart, this.props.theme_name);
    }
    if (this.props.chartType === 'packedbubble') {
      animatePackedBubble(chart, this.props.series, this.props.speed);
    } else {
      this.animateChart(chart, this.props.series, this.props.chartType);
    }
  }

  UNSAFE_componentWillReceiveProps(props, prevProps) {
    if (props.theme_name !== prevProps.theme_name) {
      this.setState({chartData: props.theme_data});
      if (this.props.chartType === 'column'){
        var chart = this.refs.chartRef.chart;
        updateCustomDataLabelColor(chart, props.theme_name);
      } 
    }
  }
  
  render() {
    return (
      <>
        <HighchartsReact
          highcharts={Highcharts}
          ref={"chartRef"}
          options={this.state.chartData}
        />
        <ProgressBar percentage={this.state.progress} chartType={this.props.chartType} />
      </>
    );
  }
}

export default Chart;