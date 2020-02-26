let dataset = ({ 'Happy': 65, 'Meh': 30, 'Sad':25})
let margin=50;
let height = 500;
let width = height;

const svg = d3.select("#piechart");
    
svg.attr('width', width + margin + margin)
    .attr('height', height + margin + margin)

const color = d3.scaleOrdinal()
    .domain(dataset)
    .range(['#F1892D', '#0EAC51', '#0077C0', '#7E349D', '#DA3C78', '#E74C3C'])

const g = svg.append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

const pie = d3.pie()
    .value((d) => d.value)

const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(200)

const part = g.selectAll('.part')
    .data(pie(d3.entries(dataset)))
    .enter()
    .append('g')
    
part.append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i))

part.append("text")
    .attr('transform', (d) => 'translate(' + arc.centroid(d) + ')')
    .text((d) => d.data.key)
    .attr('fill', 'white')

