d3.json('data/data.json', function (data) {
    var width = 500;
    var height = 500;

    var canvas = d3
        .select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    canvas
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', function (d) {
        return d.age * 10;
        })
        .attr('height', 48)
        .attr('y', function (d, i) {
        return i * 50;
        })
        .attr('fill', 'blue');

    canvas
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('fill', 'white')
        .attr('y', function (d, i) {
        return i * 50;
        })
        .text(function (d) {
        return d.name;
        });
});