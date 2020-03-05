function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


let pack = data => d3.pack()
    .size([width - 2, height - 2])
    .padding(3)
  (d3.hierarchy({children: data})
    .sum(d => d.value))
// var data = d3.csvParse(await FileAttachment("flare.csv").text(), ({id, value}) => ({name: id.split(".").pop(), title: id.replace(/\./g, "/"), group: id.split(".")[1], value: +value}))
var dataRaw =[
    {name: "School",  group: 1, value: 10},
    {name: "Soccer",  group: 2, value: 20},
    {name: "Amazon",  group: 3, value: 39},
    {name: "Internship",  group: 4, value: 39},
    {name: "Beauty",  group: 5, value: 39},
    {name: "Boyfriend", group: 6, value: 41},
    {name: "Painting", group: 6, value: 26},
    {name: "Game", group: 6, value: 10},
    {name: "Grades", group: 6, value: 30},
    {name: "Food", group: 6, value: 28},
    {name: "Weather", group: 6, value: 40}
    
]
let data = shuffle(dataRaw);

let width = 932
let height = width;
let format = d3.format(",d")
let color = d3.scaleOrdinal(data.map(d => d.group), d3.schemeCategory10)
const populateData = ()=>
{

  let wordcloud_ = document.getElementById("wordcloud")
  wordcloud_.innerHTML = "";

const root = pack(data);
  
const svg = d3.select("#wordcloud")
    .attr("viewBox", [0, 0, width, height])
    .attr("font-size", 50)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle");

const leaf = svg.selectAll("g")
  .data(root.leaves())
  .join("g")
    .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

leaf.append("circle")
    .attr("id", d => (d.leafUid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).id)
    .attr("r", d => d.r)
    .attr("fill-opacity", 0.7)
    .attr("fill", d => color(d.data.group));

leaf.append("clipPath")
    .attr("id", d => (d.clipUid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).id)
  .append("use")
    .attr("xlink:href", d => d.leafUid.href);

leaf.append("text")
    .attr("clip-path", d => d.clipUid)
  .selectAll("tspan")
  .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
  .join("tspan")
    .attr("x", 0)
    .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
    .text(d => d);

leaf.append("title")
    .text(d => `${d.data.title}\n${format(d.value)}`);
}

populateData();
const formOnlick =()=>
{
  data = shuffle(dataRaw);
  populateData();
}