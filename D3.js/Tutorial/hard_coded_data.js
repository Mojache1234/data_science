var dataArray = [20, 40, 50, 60];

var height = 500;
var width = 500;
var maxX = dataArray.reduce((x, y) => (x > y ? x : y));
var minX = dataArray.reduce((x, y) => (x < y ? x : y));

var widthScale = d3.scaleLinear().domain([0, maxX]).range([0, width]);
var colorScale = d3
    .scaleLinear()
    .domain([minX, maxX])
    .range(['#f28e2b', '#4e79a7']);

var axis = d3.axisBottom().ticks(5).scale(widthScale);

var canvas = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(50, 50)');

var bars = canvas
    .selectAll('rect')
    .data(dataArray)
    .enter()
    .append('rect')
    .attr('width', function (d) {
        return widthScale(d);
    })
    .attr('fill', function (d) {
        return colorScale(d);
    })
    .attr('height', 50)
    .attr('y', function (d, i) {
        return i * 60;
    });

canvas
    .append('g')
    .attr(
        'transform',
        `translate(0, ${(dataArray.length * 60 + 10).toString()})`
    )
    .call(axis);

// var circle = canvas
//     .append('circle')
//     .attr('cx', 250)
//     .attr('cy', 250)
//     .attr('r', 50)
//     .attr('fill', 'red');

// var rect = canvas.append('rect').attr('width', 100).attr('height', 50);

// var line = canvas
//     .append('line')
//     .attr('x1', 0)
//     .attr('y1', 100)
//     .attr('x2', 400)
//     .attr('y2', 400)
//     .attr('stroke', 'green')
//     .attr('stroke-width', 10);