export function addDataLabels(chart, theme) {
    var text_color = (theme === 'light' ? 'black' : 'white');
    chart.series[0].points.forEach(function(point, i) {
        var x = chart.plotWidth - point.plotY + chart.plotLeft
        var y = null;
        chart.xAxis[0].ticks[i] && (y = chart.xAxis[0].ticks[i].label.xy.y);
        point.customDataLabel = chart.renderer.text(
            point.y, x, y ).css(
                { color: text_color, fontSize: '17px' }).attr({ zIndex: 3 }).add();
        setAlign(chart, point.customDataLabel);
    });
}

export function updateCustomDataLabelColor(chart, theme) {
    var text_color = (theme === 'light' ? 'black' : 'white');
    chart.series[0].points.forEach(function(point, i) {
        point.customDataLabel.css({color: text_color});
    });
}

function animateAxisLabel(ticks, i, j, inverted) {
        if(inverted === 'true') {
            ticks[i] && (ticks[j] && (ticks[i].label.animate({ y: ticks[j].label.xy.y })));
        } else {
            ticks[i] && (ticks[j] && (ticks[i].label.animate({ x: ticks[j].label.xy.x })));
        }
}

function setAlign(chart, label, xPos) {
    var align = 'left',
    bbox = label.getBBox();
    if (chart.chartWidth < (xPos ? xPos : bbox.x + bbox.width) + 50) {
        align = 'right';
    }
    label.attr({ align: align });
}

function animateColumns(next_series, chart) {
    // Update the chart with the new series
    chart.series[0].update(next_series, true);
    var new_series = chart.series[0].points;
    var sorted_series = new_series.slice();
    sorted_series.sort(function(a, b) { return b.y - a.y; });
    var ticks = chart.xAxis[0].ticks;
    new_series.forEach(function(point, i) {
        sorted_series.forEach(function(sPoint, j) {
            if(point === sPoint) {
                // Move column to new location with animation
                new_series[i].graphic.animate({ x: new_series[j].shapeArgs.x });
                // Animate the label
                animateAxisLabel(ticks, i, j, 'true');
                var labelX = chart.plotWidth - new_series[i].plotY + chart.plotLeft;
                ticks[j] && (new_series[i].customDataLabel.attr({ 
                    text: new_series[i].y}).animate({
                        y: ticks[j].label.xy.y,
                        x: labelX
                    }));
                setAlign(chart, new_series[i].customDataLabel, labelX)
            }
        });
    });
}

function animateGenericChart(chart, next_series) {
    chart.series[0].data.forEach(function(point, i) {
        point.update(next_series.data[i], true);
    });
}

export function animatePackedBubble(chart, series, speed) {
    if (chart.series === undefined) { return }
    [...Array(6)].forEach((_, i) => chart.series[0].remove());
    var s_index = 0, action = 'remove', simulation = 'off';
    const updateBubs = () => {
      if (simulation === 'off'){ // Add all available series then turn on simulation
        chart.addSeries({name: series[s_index].name, data: series[s_index].data});
        s_index ++;
        if (chart.series.length === series.length) {
          simulation = 'on';
          chart.update({plotOptions: {packedbubble: {useSimulation: true}}});
        }
      } else if (simulation === 'on'){ // Cycle through removing then adding all series indefinitely
        if (action === 'remove') {
          chart.series[0] && (chart.series[0].remove());
          if (chart.series.length === 0) {
            action = 'add'
            s_index = 0
          }
        } else if (action === 'add') {
          if (s_index < series.length) {
            chart.addSeries({name: series[s_index].name, data: series[s_index].data});
            s_index ++;
          } else {
            s_index = 0;
            action = 'remove';
          }
        }
      }
      setTimeout(updateBubs, speed);
    }
    updateBubs();
  }


export default function applyCustomAnimation(chart, next_series, chart_type) {
    chart.setTitle(null, { text: next_series.title});
    if (chart_type === 'column') {
        animateColumns(next_series, chart);
      } else {
        animateGenericChart(chart, next_series);
      }
}
