const all_data = {
    bubble_chart: {
        inverted: false,
        chartConfig: {
            legend: {
                enabled: false
            },
            title: {text: 'Portfolio Return Contribution (bubble size = portolio weight)'},
            subtitle: {text: '2018-Q2',
                       style: {fontSize: '18px'}
            },
            xAxis: {
                gridLineWidth: 0,
                title: {
                    text: 'Return',
                    style: {fontSize: '17px'}
                },
                labels: {
                    format: '{value}%',
                    style: {fontSize: '15px'},
                },
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Contribution',
                    style: {fontSize: '17px'}
                },
                labels: {
                    format: '{value}%',
                    style: {fontSize: '17px'},
                },
                maxPadding: 0.2,
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                    '<tr><th>Portfolio Return:</th><td>{point.x}%</td></tr>' +
                    '<tr><th>Portfolio Contribution:</th><td>{point.y}%</td></tr>' +
                    '<tr><th>Portfolio Weight:</th><td>{point.z}%</td></tr>',
                footerFormat: '</table>',
                followPointer: true
            },
        },
        series: [   
            {
                title: '2018-Q4 ',
                data: [
                    { x: 2.0, y: .2, z: 10, name: 'Apple'},
                    { x: 3.5, y: .29, z: 12, name: 'Microsoft'},
                    { x: 0.8, y: .16, z: 5.0, name: 'Amazon'},
                    { x: 0.4, y: .18, z: 2.2, name: 'Facebook'},
                    { x: 0.3, y: .11, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 2.4, y: 1.04, z: 2.3, name: 'Alphabet'},
                    { x: 2.2, y: .88, z: 2.5, name: 'JP Morgan'},
                    { x: 1.5, y: .12, z: 12.1, name: 'Johnson & Johnson'},
                    { x: -1.0, y: -.58, z: 1.7, name: 'Exxon Mobile'},
                    { x: 2.2, y: .26, z: 8.4, name: 'Visa'},
                ]
            },{
                title: '2018-Q4',
                data: [
                    { x: 2.0, y: .2, z: 10, name: 'Apple'},
                    { x: 3.5, y: .29, z: 12, name: 'Microsoft'},
                    { x: 0.8, y: .16, z: 5.0, name: 'Amazon'},
                    { x: 0.4, y: .18, z: 2.2, name: 'Facebook'},
                    { x: 0.3, y: .11, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 2.4, y: 1.04, z: 2.3, name: 'Alphabet'},
                    { x: 2.2, y: .88, z: 2.5, name: 'JP Morgan'},
                    { x: 1.5, y: .12, z: 12.1, name: 'Johnson & Johnson'},
                    { x: -1.0, y: -.58, z: 1.7, name: 'Exxon Mobile'},
                    { x: 2.2, y: .26, z: 8.4, name: 'Visa'},
                ]
            },{
                title: '2019-Q1',
                data: [
                    { x: 2.0, y: .17, z: 12, name: 'Apple'},
                    { x: 3.0, y: .75, z: 4.0, name: 'Microsoft'},
                    { x: 0.8, y: .11, z: 7.0, name: 'Amazon'},
                    { x: 0.4, y: .10, z: 4.1, name: 'Facebook'},
                    { x: 0.3, y: .14, z: 2.2, name: 'Berkshire Hathaway'},
                    { x: 0.1, y: .02, z: 6.5, name: 'Alphabet'},
                    { x: 0.1, y: .02, z: 5.5, name: 'JP Morgan'},
                    { x: -1, y: -.12, z: 8.3, name: 'Johnson & Johnson'},
                    { x: 1.8, y: .38, z: 4.7, name: 'Exxon Mobile'},
                    { x: 0.2, y: .04, z: 5.4, name: 'Visa'},
                ]
            },{
                title: '2019-Q2',
                data: [
                    { x: 2.5, y: .18, z: 14, name: 'Apple'},
                    { x: .5, y: .17, z: 3, name: 'Microsoft'},
                    { x: .8, y: .27, z: 3, name: 'Amazon'},
                    { x: .4, y: .06, z: 7, name: 'Facebook'},
                    { x: .3, y: .14, z: 2.1, name: 'Berkshire Hathaway'},
                    { x: .4, y: .04, z: 9, name: 'Alphabet'},
                    { x: -.2, y: -.08, z: 2.5, name: 'JP Morgan'},
                    { x: .5, y: .10, z: 5, name: 'Johnson & Johnson'},
                    { x: 1, y: .12, z: 8.1, name: 'Exxon Mobile'},
                    { x: -1.2, y: -.50, z: 2.4, name: 'Visa'},
                ]
            },{
                title: '2019-Q3',
                data: [
                    { x:-1, y: -.07, z: 15, name: 'Apple'},
                    { x: 2.5, y: .25, z: 2, name: 'Microsoft'},
                    { x: .8, y: .16, z: 5, name: 'Amazon'},
                    { x: .1, y: .01, z: 10, name: 'Facebook'},
                    { x: .2, y: .11, z: 1.8, name: 'Berkshire Hathaway'},
                    { x: .8, y: .07, z: 12, name: 'Alphabet'},
                    { x: .2, y: .08, z: 2.5, name: 'JP Morgan'},
                    { x: .2, y: .08, z: 2.4, name: 'Johnson & Johnson'},
                    { x: .1, y: .01, z: 10.5, name: 'Exxon Mobile'},
                    { x: 2, y: 1.43, z: 1.4, name: 'Visa'},
                ]
            },{
                title: '2019-Q4',
                data: [
                    { x: .7, y: .04, z: 19, name: 'Apple'},
                    { x: .5, y: .17, z: 3, name: 'Microsoft'},
                    { x: -.8, y: -.16, z: 5, name: 'Amazon'},
                    { x: .4, y: .02, z: 17, name: 'Facebook'},
                    { x: .3, y: .38, z: .8, name: 'Berkshire Hathaway'},
                    { x: 1.4, y: .47, z: 3, name: 'Alphabet'},
                    { x: .7, y: .28, z: 2.5, name: 'JP Morgan'},
                    { x: .35, y: .29, z: 1.2, name: 'Johnson & Johnson'},
                    { x: -1, y: -.06, z: 16.2, name: 'Exxon Mobile'},
                    { x: -.4, y: -1.0, z: 0.4, name: 'Visa'},
                ]
            }        
        ]
    },
    column_chart: {
        inverted: true,
        chartConfig: {
            legend: {
                enabled: false
            },
            xAxis: {
                gridLineWidth: 0,
                type: 'category',
                labels: {
                    style: {
                        fontSize: '17px',
                    }
                },
                title: {
                    text: ''
                },
            },
            yAxis: {
                gridLineWidth: 0,
                title: {
                    text: 'Portfolio Weight',
                    style: {fontSize: '17px'}
                },
                labels: {
                    format: '{value}%',
                    style: {
                        fontSize: '17px',
                    }
                }
            },
            title: {text: 'Top Portfolio Holdings'},
            subtitle: {text: '2018-Q2',
                style: {fontSize: '18px'}
            },
            plotOptions: { 
                column: {colorByPoint: true},
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                    '<tr><th>Portfolio Weight:</th><td>{point.y}%</td></tr>',
                footerFormat: '</table>',
                followPointer: true
            }
        },
        series: [ // Note: This data must have consistent ordering
            {
                title: '2018-Q4 ',
                data: [                   
                    {name: 'Microsoft', y: 11}, {name: 'Apple', y: 10}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 4.5}, {name: 'Berkshire Hathaway', y: 4.0}, {name: 'Alphabet', y: 3.6},
                    {name: 'JP Morgan', y: 2.2}, {name: 'Johnson & Johnson', y: .4}, {name: 'Exxon Mobile', y: .2}, 
                    {name: 'Visa', y: .1}
                ]
            },
            {
                title: '2018-Q4',
                data: [
                    {name: 'Microsoft', y: 11}, {name: 'Apple', y: 10}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 4.5}, {name: 'Berkshire Hathaway', y: 4.0}, {name: 'Alphabet', y: 3.6},
                    {name: 'JP Morgan', y: 2.2}, {name: 'Johnson & Johnson', y: .4}, {name: 'Exxon Mobile', y: .2}, 
                    {name: 'Visa', y: .1}
                ]
            },
            { 
                title: '2019-Q1',
                data: [ 
                    {name: 'Microsoft', y: 10}, {name: 'Apple', y: 12}, {name: 'Amazon', y: 7.0}, 
                    {name: 'Facebook', y: 4.0}, {name: 'Berkshire Hathaway', y: 5.0}, {name: 'Alphabet', y: 3.9},
                    {name: 'JP Morgan', y: 3.2}, {name: 'Johnson & Johnson', y: 2.4}, {name: 'Exxon Mobile', y: 1.2}, 
                    {name: 'Visa', y: .1}
                ]
            },
            { 
                title: '2019-Q2',
                data: [ 
                    {name: 'Microsoft', y: 11}, {name: 'Apple', y: 13}, {name: 'Amazon', y: 8.0}, 
                    {name: 'Facebook', y: 6.1}, {name: 'Berkshire Hathaway', y: 6.0}, {name: 'Alphabet', y: 4.2},
                    {name: 'JP Morgan', y: 3.6}, {name: 'Johnson & Johnson', y: 2.0}, {name: 'Exxon Mobile', y: 1.1}, 
                    {name: 'Visa', y: .1}
                ]
            },
                { 
                title: '2019-Q3',
                data: [ 
                    {name: 'Microsoft', y: 11.7}, {name: 'Apple', y: 13.2}, {name: 'Amazon', y: 9.0}, 
                    {name: 'Facebook', y: 8.5}, {name: 'Berkshire Hathaway', y: 7.0}, {name: 'Alphabet', y: 3.6},
                    {name: 'JP Morgan', y: 3.9}, {name: 'Johnson & Johnson', y: 1.4}, {name: 'Exxon Mobile', y: 1.0}, 
                    {name: 'Visa', y: 1.2}
                ]
            },
            { 
                title: '2019-Q4',
                data: [ 
                    {name: 'Microsoft', y: 12}, {name: 'Apple', y: 13.2}, {name: 'Amazon', y: 8.0}, 
                    {name: 'Facebook', y: 9.5},{name: 'Berkshire Hathaway', y: 5.0}, {name: 'Alphabet', y: 3.4},
                    {name: 'JP Morgan', y: 3.2}, {name: 'Johnson & Johnson', y: 1.1}, {name: 'Exxon Mobile', y: 2.0},
                    {name: 'Visa', y: 1.9}
                    
                ]
            }          
        ]
    },
    packed_bubble: {
        inverted: false,
        chartConfig: {
            legend: {enabled: false},
            title: {text: 'Interactive Sector Holdings'},
            plotOptions: {
                packedbubble: {
                    minSize: '30%',
                    maxSize: '100%',
                    zMin: 0,
                    zMax: 1000,
                    useSimulation: false,
                    layoutAlgorithm: {
                        initialPositionRadius: 100,
                        bubblePadding: 10,
                        gravitationalConstant: .10,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true,
                        parentNodeOptions: {
                            bubblePadding: 40,
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        format: '{point.name}',
                        parentNodeFormat: '{point.series.name}',
                        style: {
                            fontSize: '10px',
                            textOverflow: 'ellipsis'
                        }
                    }
                }
            },
            tooltip: { // TODO: shared tooltip throws error, would be nice to get that working.
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                    '<tr><th>Portfolio Weight:</th><td>{point.value}%</td></tr>',
                footerFormat: '</table>',
                followPointer: true
            },
        },
        series: [
            {
                name: 'Information Technology',
                data: [{
                    name: 'Apple',
                    value: 9.2
                },{
                    name: 'Microsoft',
                    value: 2.7
                },{
                    name: 'Infosys',
                    value: 1.2
                },{
                    name: 'Oracle',
                    value: 1.0
                }]
            },{
                name: 'Financials',
                data: [{
                    name: 'Bank of America',
                    value: 5.2
                },{
                    name: 'JP Morgan Chase',
                    value: 2.0
                },{
                    name: 'Berkshire Hathaway',
                    value: 1.5
                },{
                    name: 'Citigroup',
                    value: 1.2
                },{
                    name: 'Barclays',
                    value: .75
                }]
            },{
                name: 'Energy',
                data: [{
                    name: 'Exxon Mobile',
                    value: 4.5
                },{
                    name: 'Royal Dutch Shell',
                    value: 1.8
                },{
                    name: 'Chevron',
                    value: 1.2
                },{
                    name: 'Lukoil',
                    value: 1.1
                },{
                    name: 'ConocoPhillips',
                    value: .5
                }]
            },{
                name: 'Health Care',
                data: [{
                    name: 'Johnson & Johnson',
                    value: 4.2
                },{
                    name: 'Pfizer',
                    value: 3.2
                },{
                    name: 'Abbott Labs',
                    value: 1.3
                },{
                    name: 'Merck & Co.',
                    value: 1.0
                },{
                    name: 'Gilead Sciences',
                    value: .6
                }]
            },{
                name: 'Industrials',
                data: [{
                    name: 'Honeywell',
                    value: 2.2
                },{
                    name: 'General Electric',
                    value: 3.1
                },{
                    name: 'United Technologies',
                    value: 1.8
                },{
                    name: 'Ford',
                    value: 1.5
                },{
                    name: 'General Motors',
                    value: 1.3
                },{
                    name: 'Boeing',
                    value: .9
                }]
            },{
                name: 'Materials',
                data: [{
                    name: 'Dow Inc',
                    value: 7.2
                },{
                    name: 'Du Pont',
                    value: 3.1
                },{
                    name: 'Sherwin-Williams',
                    value: 1.7
                },{
                    name: 'Eastman Chemical Co.',
                    value: 1.3
                },{
                    name: 'International Paper Company',
                    value: .45
                }]
            },{
                name: 'Consumer Staples',
                data: [{
                    name: 'Clorox Co.',
                    value: 2.5
                },{
                    name: 'Costco Wholesale',
                    value: 1.7
                },{
                    name: 'General Mills',
                    value: 3.4
                },{
                    name: 'Kraft Heinz Co.',
                    value: 3.7
                },{
                    name: 'Wal-Mart',
                    value: 1.5
                }]
            },{
                name: 'Consumer Discretionary',
                data: [{
                    name: 'Amazon',
                    value: 5.5
                },{
                    name: 'Autozone',
                    value: 1.7
                },{
                    name: 'Gap Inc',
                    value: 0.9
                },{
                    name: 'Nike Inc',
                    value: 1.4
                }]
            },{
                name: 'Communication Services',
                data: [{
                    name: 'Comcast',
                    value: 3.8
                },{
                    name: 'Google',
                    value: 5.7
                },{
                    name: 'Facebook',
                    value: 4.2
                },{
                    name: 'Netflix',
                    value: 3.2
                },{
                    name: 'Verizon',
                    value: 1.9
                },{
                    name: 'Walt Disney',
                    value: 1.6
                }]
            },{
                name: 'Utilities',
                data: [{
                    name: 'Southern Company',
                    value: 1.5
                },{
                    name: 'Eversource Energy',
                    value: 1.2
                },{
                    name: 'Duke Energy',
                    value: 0.7
                },{
                    name: 'American Water Works',
                    value: 0.25
                }]
            },{
                name: 'Real Estate',
                data: [{
                    name: 'Iron Mountain',
                    value: 2.5
                },{
                    name: 'Public Storage',
                    value: 1.4
                },{
                    name: 'Kimco Realty',
                    value: 0.85
                },{
                    name: 'Prologis Inc',
                    value: .59
                }]
            }
        ]
    }
}
export default all_data;
