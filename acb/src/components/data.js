const all_data = {
    bubble_chart: {
        inverted: false,
        chartConfig: {
            legend: {
                enabled: false
            },
            title: {text: 'Portfolio Retuurn Contribution (bubble size = portolio weight)'},
            subtitle: {text: '2018-Q2',
                       style: {fontSize: '18px'}
            },
            xAxis: {
                gridLineWidth: 1,
                title: {
                    text: 'Portfolio Return'
                },
                labels: {
                    format: '{value}%',
                    style: {fontSize: '17px'},
                },
            },
            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Portfolio Contribution'
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
                    { x: 5, y: .5, z: 10, name: 'Apple'},
                    { x: 6.5, y: .585, z: 9, name: 'Microsoft'},
                    { x: 0.8, y: .04, z: 5, name: 'Amazon'},
                    { x: 0.4, y: .008, z: 2, name: 'Facebook'},
                    { x: 0.3, y: .0084, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 8.4, y: .168, z: 2, name: 'Alphabet'},
                    { x: 4.2, y: .105, z: 2.5, name: 'JP Morgan'},
                    { x: 3.5, y: .07, z: 2, name: 'Johnson & Johnson'},
                    { x: 1, y: .047, z: 4.7, name: 'Exxon Mobile'},
                    { x: 9.2, y: .1288, z: 1.4, name: 'Visa'},
                ]
            },            
            {
                title: '2018-Q4',
                data: [
                    { x: 5, y: .5, z: 10, name: 'Apple'},
                    { x: 6.5, y: .585, z: 9, name: 'Microsoft'},
                    { x: 0.8, y: .04, z: 5, name: 'Amazon'},
                    { x: 0.4, y: .008, z: 2, name: 'Facebook'},
                    { x: 0.3, y: .0084, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 8.4, y: .168, z: 2, name: 'Alphabet'},
                    { x: 4.2, y: .105, z: 2.5, name: 'JP Morgan'},
                    { x: 3.5, y: .07, z: 2, name: 'Johnson & Johnson'},
                    { x: 1, y: .047, z: 4.7, name: 'Exxon Mobile'},
                    { x: 9.2, y: .1288, z: 1.4, name: 'Visa'},
                ]
            },
            {
                title: '2019-Q1',
                data: [
                    { x: 8, y: 1.2, z: 15, name: 'Apple'},
                    { x: 6.5, y: .585, z: 9, name: 'Microsoft'},
                    { x: 0.8, y: .04, z: 5, name: 'Amazon'},
                    { x: 0.4, y: .008, z: 2, name: 'Facebook'},
                    { x: 0.3, y: .0084, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 8.4, y: .168, z: 2, name: 'Alphabet'},
                    { x: 4.2, y: .105, z: 2.5, name: 'JP Morgan'},
                    { x: 3.5, y: .07, z: 2, name: 'Johnson & Johnson'},
                    { x: 1, y: .047, z: 4.7, name: 'Exxon Mobile'},
                    { x: 9.2, y: .1288, z: 1.4, name: 'Visa'},
                ]
            },
            {
                title: '2019-Q2',
                data: [
                    { x: 2, y: .2, z: 10, name: 'Apple'},
                    { x: 6.5, y: .585, z: 9, name: 'Microsoft'},
                    { x: 0.8, y: .04, z: 5, name: 'Amazon'},
                    { x: 0.4, y: .008, z: 2, name: 'Facebook'},
                    { x: 0.3, y: .0084, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 8.4, y: .168, z: 2, name: 'Alphabet'},
                    { x: 4.2, y: .105, z: 2.5, name: 'JP Morgan'},
                    { x: 3.5, y: .07, z: 2, name: 'Johnson & Johnson'},
                    { x: 1, y: .047, z: 4.7, name: 'Exxon Mobile'},
                    { x: 9.2, y: .1288, z: 1.4, name: 'Visa'},
                ]
            },
            {
                title: '2019-Q3',
                data: [
                    { x: 1, y: .1, z: 10, name: 'Apple'},
                    { x: 6.5, y: .585, z: 9, name: 'Microsoft'},
                    { x: 0.8, y: .04, z: 5, name: 'Amazon'},
                    { x: 0.4, y: .008, z: 2, name: 'Facebook'},
                    { x: 0.3, y: .0084, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 8.4, y: .168, z: 2, name: 'Alphabet'},
                    { x: 4.2, y: .105, z: 2.5, name: 'JP Morgan'},
                    { x: 3.5, y: .07, z: 2, name: 'Johnson & Johnson'},
                    { x: 1, y: .047, z: 4.7, name: 'Exxon Mobile'},
                    { x: 9.2, y: .1288, z: 1.4, name: 'Visa'},
                ]
            },
            {
                title: '2019-Q4',
                data: [
                    { x: 13, y: .65, z: 20, name: 'Apple'},
                    { x: 6.5, y: .585, z: 9, name: 'Microsoft'},
                    { x: 0.8, y: .04, z: 5, name: 'Amazon'},
                    { x: 0.4, y: .008, z: 2, name: 'Facebook'},
                    { x: 0.3, y: .0084, z: 2.8, name: 'Berkshire Hathaway'},
                    { x: 8.4, y: .168, z: 2, name: 'Alphabet'},
                    { x: 4.2, y: .105, z: 2.5, name: 'JP Morgan'},
                    { x: 3.5, y: .07, z: 2, name: 'Johnson & Johnson'},
                    { x: 1, y: .047, z: 4.7, name: 'Exxon Mobile'},
                    { x: 9.2, y: .1288, z: 1.4, name: 'Visa'},
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
                type: 'category',
                labels: {
                    style: {
                        fontSize: '17px',
                        fontWeight: 'bold',
                    }
                },
                title: {
                    text: ''
                },
            },
            yAxis: {
                title: {
                    text: '% Return'
                },
                labels: {
                    style: {
                        fontSize: '17px',
                        fontWeight: 'bold',
                    }
                }
            },
            title: {text: 'Top 10 Portfolio Performers'},
            subtitle: {text: '2018-Q2',
                style: {fontSize: '18px'}
            },
            plotOptions: { 
                column: {colorByPoint: true},
            },
        },
        series: [ // Note, first and last series need to be pre-sorted.
            {
                title: '2018-Q2 ',
                data: [                   
                    {name: 'Apple', y: 20}, {name: 'Microsoft', y: 12}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 4.5}, {name: 'Berkshire Hathaway', y: 4.0}, {name: 'Alphabet', y: 3.6},
                    {name: 'JP Morgan', y: 2.2}, {name: 'Johnson & Johnson', y: .4}, {name: 'Exxon Mobile', y: .2}, 
                    {name: 'Visa', y: .1}
                ]
            },
            {
                title: '2018-Q2',
                data: [
                    {name: 'Apple', y: 16.4}, {name: 'Microsoft', y: 12}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 4.5}, {name: 'Berkshire Hathaway', y: 4.0}, {name: 'Alphabet', y: 3.6},
                    {name: 'Jp Morgan', y: 2.2}, {name: 'Johnson & Johnson', y: .4}, {name: 'Exxon Mobile', y: .2}, 
                    {name: 'Visa', y: .1}
                ]
            },
            { 
                title: '2018-Q3',
                data: [ 
                    {name: 'Apple', y: 6.4}, {name: 'Microsoft', y: 6.1}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 1}, {name: 'Berkshire Hathaway', y: 7}, {name: 'Alphabet', y: 4},
                    {name: 'Jp Morgan', y: 9}, {name: 'Johnson & Johnson', y: 2.0}, {name: 'Exxon Mobile', y: 5.6}, 
                    {name: 'Visa', y: 9.5}
                ]
            },
            { 
                title: '2018-Q4',
                data: [ 
                    {name: 'Apple', y: 8.4}, {name: 'Microsoft', y: 4.1}, {name: 'Amazon', y: 1.0}, 
                    {name: 'Facebook', y: 28.5}, {name: 'Berkshire Hathaway', y: 4.0}, {name: 'Alphabet', y: 5.6},
                    {name: 'Jp Morgan', y: 29.2}, {name: 'Johnson & Johnson', y: 6.4}, {name: 'Exxon Mobile', y: 5.6}, 
                    {name: 'Visa', y: 1.5}
                ]
            },
                { 
                title: '2019-Q1',
                data: [ 
                    {name: 'Apple', y: 6.4}, {name: 'Microsoft', y: 4.1}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 8.5}, {name: 'Berkshire Hathaway', y: 4.0}, {name: 'Alphabet', y: 3.6},
                    {name: 'Jp Morgan', y: 2.2}, {name: 'Johnson & Johnson', y: 6.4}, {name: 'Exxon Mobile', y: 5.6}, 
                    {name: 'Visa', y: 1.5}
                ]
            },
            { 
                title: '2019-Q2',
                data: [ 
                    {name: 'Apple', y: 16.4}, {name: 'Microsoft', y: 12}, {name: 'Amazon', y: 6.0}, 
                    {name: 'Facebook', y: 2.5}, {name: 'Berkshire Hathaway', y: 1.4}, {name: 'Alphabet', y: .6},
                    {name: 'Jp Morgan', y: .2}, {name: 'Johnson & Johnson', y: .15}, {name: 'Exxon Mobile', y: .1}, 
                    {name: 'Visa', y: .01}
                ]
            }          
        ]
    },
    packed_bubble: {
        inverted: false,
        chartConfig: {
            title: {text: 'Portfolio Holdings by Sector'},
            plotOptions: {
                packedbubble: {
                    minSize: '20%',
                    maxSize: '100%',
                    zMin: 0,
                    zMax: 1000,
                    useSimulation: false,
                    layoutAlgorithm: {
                        gravitationalConstant: .85,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true,
                        parentNodeOptions: {
                    bubblePadding: 20
                }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        style: {
                            color: 'black',
                            textOutline: 'none',
                            fontWeight: 'normal',
                            fontSize: '17px'
                        }
                    }
                }
            },
        },
        series: [{
            name: 'Technology',
            data: [{
                name: 'Apple',
                value: 767.1
            }, {
                name: 'Google',
                value: 20.7
            },
            {
                name: "Amazon",
                value: 97.2
            },
            {
                name: "Facebook",
                value: 111.7
            }]
        }, {
            name: 'Finance',
            data: [{
                name: "Bank of America",
                value: 8.2
            },
            {
                name: "JP Morgan Chase",
                value: 9.2
            }]
        }, {
            name: 'Energy',
            data: [{
                name: "Exxon Mobile",
                value: 409.4
            },
            {
                name: "Royal Dutch Shell",
                value: 34.1
            }]
        }, {
            name: 'Health Care',
            data: [{
                name: "Johnson & Johnson",
                value: 7.6
            },
            {
                name: "Pfizer",
                value: 8.4
            }]
        }, {
            name: 'Industrials',
            data: [{
                name: "Honeywell",
                value: 7.2
            },
            {
                name: "General Electric",
                value: 8.1
            },
            {
                name: "United Technologies",
                value: 17.8
            }]
        }],
    }
}
export default all_data;
