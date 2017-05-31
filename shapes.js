var dataArray = [5,11,18];
var dataDays=['Mon','Wed','Fri'];
var rainbow=d3.scaleSequential(d3.interpolateRainbow).domain([0,10]);
var rainbow2=d3.scaleSequential(d3.interpolateRainbow).domain([0,3]);
var x=d3.scaleBand()
  .domain(dataDays)
  .range([0,170])
  .paddingInner(0.1176);
var xAxis=d3.axisBottom(x);

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

var cat20=d3.schemeCategory20;

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
    .attr("height",function(d,i){ return d*15; })
    .attr("width","50")
    .attr("fill",function(d,i){return rainbow(i);})
    .attr("x",function(d,i){ return 60*i; })
    .attr("y",function(d,i){ return 300-(d*15); });

svg.append("g")
  .attr("class","x axis hidden")
  .attr("transform","translate(0,300)")
  .call(xAxis);

var newX=300;
svg.selectAll("circle.first")
  .attr("class","first")
  .data(dataArray)
  .enter().append("circle")
  .attr("fill",function(d,i){return rainbow2(i);})
  .attr("cx", function(d,i){
    newX+=(d*3)+(i*20);
    return newX;})
  .attr("cy","100")
  .attr("r",function(d){ return d*3;});

var newX=600;
svg.selectAll("ellipse")
  .attr("class","second")
  .data(dataArray)
  .enter().append("ellipse")
  .attr("fill",function(d,i){return cat20[i];})
  .attr("cx", function(d,i){
    newX+=(d*3)+(i*20);
    return newX;})
  .attr("cy","100")
  .attr("rx",function(d){ return d*3;})
  .attr("ry","30");

var newX=900;
svg.selectAll("line")
  .data(dataArray)
  .enter().append("line")
  // .style("stroke","green")
  // .attr("stroke","blue")
  .attr("sttoke-width","2")
  .attr("x1",newX)
  .attr("y1",function(d,i){return 80+(i*20);})
  .attr("x2",function(d){return newX+(d*15);})
  .attr("y2",function(d,i){return 80+(i*20);});

var textArray=['start','middle','end'];
svg.append("text").selectAll("tspan")
  .data(textArray)
  .enter().append("tspan")
    .attr("font-size","30")
    .attr("x",newX)
    .attr("y", function(d,i){return 150+(i*30)})
    .attr("stroke","blue")
    .attr("fill","blue")
    .attr("stroke-width","2")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text(function(d) {return d;});

svg.append("line")
  .attr("x1",newX)
  .attr("x2",newX)
  .attr("y1","150")
  .attr("y2","210")
