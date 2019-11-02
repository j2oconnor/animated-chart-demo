const all_data = {
    bubble_chart: {
        inverted: false,
        chartConfig: {
            legend: {
                enabled: false
            },
            title: {text: 'Portfolio Contribution (bubble size = portolio weight)'},
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
                pointFormat: '<tr><th colspan="2"><h3>{point.sector}</h3></th></tr>' +
                    '<tr><th>Portfolio Return:</th><td>{point.x}g</td></tr>' +
                    '<tr><th>Portfolio Contribution:</th><td>{point.y}g</td></tr>' +
                    '<tr><th>Portfolio Weight:</th><td>{point.z}%</td></tr>',
                footerFormat: '</table>',
                followPointer: true
            },
        },
        series: [   
            {
                title: '2018-Q2 ',
                data: [
                    { x: 95, y: 95, z: 13.8, name: 'BE', sector: 'Belgium' },
                    { x: 86.5, y: 102.9, z: 14.7, name: 'DE', sector: 'Germany' },
                    { x: 80.8, y: 91.5, z: 15.8, name: 'FI', sector: 'Finland' },
                    { x: 80.4, y: 102.5, z: 12, name: 'NL', sector: 'Netherlands' },
                    { x: 80.3, y: 86.1, z: 11.8, name: 'SE', sector: 'Sweden' },
                    { x: 78.4, y: 70.1, z: 16.6, name: 'ES', sector: 'Spain' },
                    { x: 74.2, y: 68.5, z: 14.5, name: 'FR', sector: 'France' },
                    { x: 73.5, y: 83.1, z: 10, name: 'NO', sector: 'Norway' },
                    { x: 71, y: 93.2, z: 24.7, name: 'UK', sector: 'United Kingdom' },
                    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', sector: 'Italy' },
                    { x: 68.6, y: 20, z: 16, name: 'RU', sector: 'Russia' },
                    { x: 65.5, y: 126.4, z: 35.3, name: 'US', sector: 'United States' },
                    { x: 65.4, y: 50.8, z: 28.5, name: 'HU', sector: 'Hungary' },
                    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', sector: 'Portugal' },
                    { x: 64, y: 82.9, z: 31.3, name: 'NZ', sector: 'New Zealand' }
                ]
            },            
            {
                title: '2018-Q2',
                data: [
                    { x: 95, y: 95, z: 13.8, name: 'BE', sector: 'Belgium' },
                    { x: 86.5, y: 102.9, z: 14.7, name: 'DE', sector: 'Germany' },
                    { x: 80.8, y: 91.5, z: 15.8, name: 'FI', sector: 'Finland' },
                    { x: 80.4, y: 102.5, z: 12, name: 'NL', sector: 'Netherlands' },
                    { x: 80.3, y: 86.1, z: 11.8, name: 'SE', sector: 'Sweden' },
                    { x: 78.4, y: 70.1, z: 16.6, name: 'ES', sector: 'Spain' },
                    { x: 74.2, y: 68.5, z: 14.5, name: 'FR', sector: 'France' },
                    { x: 73.5, y: 83.1, z: 10, name: 'NO', sector: 'Norway' },
                    { x: 71, y: 93.2, z: 24.7, name: 'UK', sector: 'United Kingdom' },
                    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', sector: 'Italy' },
                    { x: 68.6, y: 20, z: 16, name: 'RU', sector: 'Russia' },
                    { x: 65.5, y: 126.4, z: 35.3, name: 'US', sector: 'United States' },
                    { x: 65.4, y: 50.8, z: 28.5, name: 'HU', sector: 'Hungary' },
                    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', sector: 'Portugal' },
                    { x: 64, y: 82.9, z: 31.3, name: 'NZ', sector: 'New Zealand' }
                ]
            },
            {
                title: '2018-Q3',
                data: [
                    { x: 95, y: 95, z: 5.8, name: 'BE', sector: 'Belgium' },
                    { x: 86.5, y: 102.9, z: 6.7, name: 'DE', sector: 'Germany' },
                    { x: 80.8, y: 91.5, z: 7.8, name: 'FI', sector: 'Finland' },
                    { x: 80.4, y: 102.5, z: 8, name: 'NL', sector: 'Netherlands' },
                    { x: 80.3, y: 86.1, z: 4.8, name: 'SE', sector: 'Sweden' },
                    { x: 78.4, y: 70.1, z: 4.6, name: 'ES', sector: 'Spain' },
                    { x: 74.2, y: 68.5, z: 4.5, name: 'FR', sector: 'France' },
                    { x: 73.5, y: 83.1, z: 3, name: 'NO', sector: 'Norway' },
                    { x: 71, y: 93.2, z: 24.7, name: 'UK', sector: 'United Kingdom' },
                    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', sector: 'Italy' },
                    { x: 68.6, y: 20, z: 16, name: 'RU', sector: 'Russia' },
                    { x: 85, y: 80, z: 100, name: 'US', sector: 'United States' },
                    { x: 65.4, y: 50.8, z: 9.5, name: 'HU', sector: 'Hungary' },
                    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', sector: 'Portugal' },
                    { x: 64, y: 82.9, z: 20.3, name: 'NZ', sector: 'New Zealand' }
                ]
            },
            {
                title: '2018-Q4',
                data: [
                    { x: 95, y: 95, z: 5.8, name: 'BE', sector: 'Belgium' },
                    { x: 86.5, y: 102.9, z: 6.7, name: 'DE', sector: 'Germany' },
                    { x: 80.8, y: 91.5, z: 7.8, name: 'FI', sector: 'Finland' },
                    { x: 80.4, y: 102.5, z: 8, name: 'NL', sector: 'Netherlands' },
                    { x: 80.3, y: 86.1, z: 4.8, name: 'SE', sector: 'Sweden' },
                    { x: 78.4, y: 70.1, z: 4.6, name: 'ES', sector: 'Spain' },
                    { x: 74.2, y: 68.5, z: 4.5, name: 'FR', sector: 'France' },
                    { x: 73.5, y: 83.1, z: 3, name: 'NO', sector: 'Norway' },
                    { x: 71, y: 93.2, z: 24.7, name: 'UK', sector: 'United Kingdom' },
                    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', sector: 'Italy' },
                    { x: 68.6, y: 20, z: 16, name: 'RU', sector: 'Russia' },
                    { x: 70, y: 30, z: 300, name: 'US', sector: 'United States' },
                    { x: 65.4, y: 50.8, z: 9.5, name: 'HU', sector: 'Hungary' },
                    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', sector: 'Portugal' },
                    { x: 64, y: 82.9, z: 20.3, name: 'NZ', sector: 'New Zealand' }
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
                    text: 'value'
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
                    {name: 'Sep', y: 216.4}, {name: 'Oct', y: 194.1}, {name: 'June', y: 176.0}, 
                    {name: 'Aug', y: 148.5}, {name: 'May', y: 144.0}, {name: 'Jul', y: 135.6},
                    {name: 'Apr', y: 129.2}, {name: 'Mar', y: 106.4}, {name: 'Nov', y: 95.6}, 
                    {name: 'Feb', y: 71.5}, {name: 'Dec', y: 54.4}, {name: 'Jan', y: 29.9}
                ]
            },
            {
                title: '2018-Q2',
                data: [
                    {name: 'Sep', y: 216.4}, {name: 'Oct', y: 194.1}, {name: 'June', y: 176.0}, 
                    {name: 'Aug', y: 148.5}, {name: 'May', y: 144.0}, {name: 'Jul', y: 135.6},
                    {name: 'Apr', y: 129.2}, {name: 'Mar', y: 106.4}, {name: 'Nov', y: 95.6}, 
                    {name: 'Feb', y: 71.5}, {name: 'Dec', y: 54.4}, {name: 'Jan', y: 29.9}
                ]
            },
            { 
                title: '2018-Q3',
                data: [ 
                    {name: 'Sep', y: 206.4}, {name: 'Oct', y: 164.1}, {name: 'June', y: 206.0}, 
                    {name: 'Aug', y: 101}, {name: 'May', y: 27}, {name: 'Jul', y: 64},
                    {name: 'Apr', y: 69}, {name: 'Mar', y: 42.0}, {name: 'Nov', y: 85.6}, 
                    {name: 'Feb', y: 79.5}, {name: 'Dec', y: 44.4}, {name: 'Jan', y: 59.9}
                ]
            },
            { 
                title: '2018-Q4',
                data: [ 
                    {name: 'Sep', y: 186.4}, {name: 'Oct', y: 124.1}, {name: 'June', y: 201.0}, 
                    {name: 'Aug', y: 128.5}, {name: 'May', y: 44.0}, {name: 'Jul', y: 135.6},
                    {name: 'Apr', y: 129.2}, {name: 'Mar', y: 106.4}, {name: 'Nov', y: 95.6}, 
                    {name: 'Feb', y: 71.5}, {name: 'Dec', y: 54.4}, {name: 'Jan', y: 29.9}
                ]
            },
                { 
                title: '2019-Q1',
                data: [ 
                    {name: 'Sep', y: 156.4}, {name: 'Oct', y: 134.1}, {name: 'June', y: 146.0}, 
                    {name: 'Aug', y: 128.5}, {name: 'May', y: 54.0}, {name: 'Jul', y: 135.6},
                    {name: 'Apr', y: 129.2}, {name: 'Mar', y: 106.4}, {name: 'Nov', y: 95.6}, 
                    {name: 'Feb', y: 71.5}, {name: 'Dec', y: 54.4}, {name: 'Jan', y: 29.9}
                ]
            },
            { 
                title: '2019-Q2',
                data: [ 
                    {name: 'Sep', y: 116.4}, {name: 'Oct', y: 194.1}, {name: 'June', y: 176.0}, 
                    {name: 'Aug', y: 128.5}, {name: 'May', y: 114.0}, {name: 'Jul', y: 105.6},
                    {name: 'Apr', y: 90}, {name: 'Mar', y: 80}, {name: 'Nov', y: 70}, 
                    {name: 'Feb', y: 61.5}, {name: 'Dec', y: 54.4}, {name: 'Jan', y: 39.9}
                ]
            }          
        ]
    },
    packed_bubble: {
        inverted: false,
        chartConfig: {
            title: {text: 'Holdings by Sector'},
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
            name: 'Europe',
            data: [{
                name: 'Germany',
                value: 767.1
            }, {
                name: 'Croatia',
                value: 20.7
            },
            {
                name: "Belgium",
                value: 97.2
            },
            {
                name: "Czech Republic",
                value: 111.7
            },
            {
                name: "Netherlands",
                value: 158.1
            },
            {
                name: "Spain",
                value: 241.6
            },
            {
                name: "Ukraine",
                value: 249.1
            },
            {
                name: "Poland",
                value: 298.1
            },
            {
                name: "France",
                value: 323.7
            },
            {
                name: "Romania",
                value: 78.3
            },
            {
                name: "United Kingdom",
                value: 415.4
            }, {
                name: "Turkey",
                value: 353.2
            }, {
                name: "Italy",
                value: 337.6
            },
            {
                name: "Greece",
                value: 71.1
            },
            {
                name: "Austria",
                value: 69.8
            },
            {
                name: "Belarus",
                value: 67.7
            },
            {
                name: "Serbia",
                value: 59.3
            },
            {
                name: "Finland",
                value: 54.8
            },
            {
                name: "Bulgaria",
                value: 51.2
            },
            {
                name: "Portugal",
                value: 48.3
            },
            {
                name: "Norway",
                value: 44.4
            },
            {
                name: "Sweden",
                value: 44.3
            },
            {
                name: "Hungary",
                value: 43.7
            },
            {
                name: "Switzerland",
                value: 40.2
            },
            {
                name: "Denmark",
                value: 40
            },
            {
                name: "Slovakia",
                value: 34.7
            },
            {
                name: "Ireland",
                value: 34.6
            },
            {
                name: "Croatia",
                value: 20.7
            },
            {
                name: "Estonia",
                value: 19.4
            },
            {
                name: "Slovenia",
                value: 16.7
            },
            {
                name: "Lithuania",
                value: 12.3
            },
            {
                name: "Luxembourg",
                value: 10.4
            },
            {
                name: "Macedonia",
                value: 9.5
            },
            {
                name: "Moldova",
                value: 7.8
            },
            {
                name: "Latvia",
                value: 7.5
            },
            {
                name: "Cyprus",
                value: 7.2
            }]
        }, {
            name: 'Africa',
            data: [{
                name: "Senegal",
                value: 8.2
            },
            {
                name: "Cameroon",
                value: 9.2
            },
            {
                name: "Zimbabwe",
                value: 13.1
            },
            {
                name: "Ghana",
                value: 14.1
            },
            {
                name: "Kenya",
                value: 14.1
            },
            {
                name: "Sudan",
                value: 17.3
            },
            {
                name: "Tunisia",
                value: 24.3
            },
            {
                name: "Angola",
                value: 25
            },
            {
                name: "Libya",
                value: 50.6
            },
            {
                name: "Ivory Coast",
                value: 7.3
            },
            {
                name: "Morocco",
                value: 60.7
            },
            {
                name: "Ethiopia",
                value: 8.9
            },
            {
                name: "United Republic of Tanzania",
                value: 9.1
            },
            {
                name: "Nigeria",
                value: 93.9
            },
            {
                name: "South Africa",
                value: 392.7
            }, {
                name: "Egypt",
                value: 225.1
            }, {
                name: "Algeria",
                value: 141.5
            }]
        }, {
            name: 'Oceania',
            data: [{
                name: "Australia",
                value: 409.4
            },
            {
                name: "New Zealand",
                value: 34.1
            },
            {
                name: "Papua New Guinea",
                value: 7.1
            }]
        }, {
            name: 'North America',
            data: [{
                name: "Costa Rica",
                value: 7.6
            },
            {
                name: "Honduras",
                value: 8.4
            },
            {
                name: "Jamaica",
                value: 8.3
            },
            {
                name: "Panama",
                value: 10.2
            },
            {
                name: "Guatemala",
                value: 12
            },
            {
                name: "Dominican Republic",
                value: 23.4
            },
            {
                name: "Cuba",
                value: 30.2
            },
            {
                name: "USA",
                value: 5334.5
            }, {
                name: "Canada",
                value: 566
            }, {
                name: "Mexico",
                value: 456.3
            }]
        }, {
            name: 'South America',
            data: [{
                name: "El Salvador",
                value: 7.2
            },
            {
                name: "Uruguay",
                value: 8.1
            },
            {
                name: "Bolivia",
                value: 17.8
            },
            {
                name: "Trinidad and Tobago",
                value: 34
            },
            {
                name: "Ecuador",
                value: 43
            },
            {
                name: "Chile",
                value: 78.6
            },
            {
                name: "Peru",
                value: 52
            },
            {
                name: "Colombia",
                value: 74.1
            },
            {
                name: "Brazil",
                value: 501.1
            }, {
                name: "Argentina",
                value: 199
            },
            {
                name: "Venezuela",
                value: 195.2
            }]
        }, {
            name: 'Asia',
            data: [{
                name: "Nepal",
                value: 6.5
            },
            {
                name: "Georgia",
                value: 6.5
            },
            {
                name: "Brunei Darussalam",
                value: 7.4
            },
            {
                name: "Kyrgyzstan",
                value: 7.4
            },
            {
                name: "Afghanistan",
                value: 7.9
            },
            {
                name: "Myanmar",
                value: 9.1
            },
            {
                name: "Mongolia",
                value: 14.7
            },
            {
                name: "Sri Lanka",
                value: 16.6
            },
            {
                name: "Bahrain",
                value: 20.5
            },
            {
                name: "Yemen",
                value: 22.6
            },
            {
                name: "Jordan",
                value: 22.3
            },
            {
                name: "Lebanon",
                value: 21.1
            },
            {
                name: "Azerbaijan",
                value: 31.7
            },
            {
                name: "Singapore",
                value: 47.8
            },
            {
                name: "Hong Kong",
                value: 49.9
            },
            {
                name: "Syria",
                value: 52.7
            },
            {
                name: "DPR Korea",
                value: 59.9
            },
            {
                name: "Israel",
                value: 64.8
            },
            {
                name: "Turkmenistan",
                value: 70.6
            },
            {
                name: "Oman",
                value: 74.3
            },
            {
                name: "Qatar",
                value: 88.8
            },
            {
                name: "Philippines",
                value: 96.9
            },
            {
                name: "Kuwait",
                value: 98.6
            },
            {
                name: "Uzbekistan",
                value: 122.6
            },
            {
                name: "Iraq",
                value: 139.9
            },
            {
                name: "Pakistan",
                value: 158.1
            },
            {
                name: "Vietnam",
                value: 190.2
            },
            {
                name: "United Arab Emirates",
                value: 201.1
            },
            {
                name: "Malaysia",
                value: 227.5
            },
            {
                name: "Kazakhstan",
                value: 236.2
            },
            {
                name: "Thailand",
                value: 272
            },
            {
                name: "Taiwan",
                value: 276.7
            },
            {
                name: "Indonesia",
                value: 453
            },
            {
                name: "Saudi Arabia",
                value: 494.8
            },
            {
                name: "Japan",
                value: 1278.9
            },
            {
                name: "China",
                value: 10540.8
            },
            {
                name: "India",
                value: 2341.9
            },
            {
                name: "Russia",
                value: 1766.4
            },
            {
                name: "Iran",
                value: 618.2
            },
            {
                name: "Korea",
                value: 610.1
            }]
        }],
    }
}
export default all_data;
