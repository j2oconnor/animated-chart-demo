export const dark = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: 'rgb(33, 128, 207)',
            fontWeight: 'bold',
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
                fontSize: '12px',
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
                fontSize: '12px',
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                style: {
                    color: 'white',
                    fontSize: '15px'
                }
            },
            marker: {
                lineColor: '#333'
            }
        }
    },
    legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },
  };

  const light = {
    colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#f2f2f7'],
                [1, '#e6e6e8']
            ]
        },
        style: {
            fontFamily: 'Dosis, sans-serif'
        }
    },
    title: {
        style: {
            color: 'black',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: 'rgb(33, 128, 207)',
            fontWeight: 'bold',
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                style: {
                    color: 'black',
                    fontSize: '15px'
                }
            },
            marker: {
                lineColor: '#333'
            }
        }
    },
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false,
        style: {
            color: 'black'
        }
    },
    legend: {
        backgroundColor: '#F0F0EA',
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px',
            color: 'black'
        }
    },

    xAxis: {
        title: {
            style: {
                color: 'black',
            }
        },
        labels: {
            style: {
                fontSize: '12px',
                color: 'black'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: 'black',
            }
        },
        labels: {
            style: {
                fontSize: '12px',
                color: 'black'
            }
        }
    },
};

export default light