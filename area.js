var dataArray=[17,23,55,69,90,120,140,170,200,230,600,900,1090,2000,3000];
var dataYears=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013];
var height =200;
var width=500;
var y=d3.scaleLinear()
  .domain([0,3000])
  .range([height,0]);
var yAxis=d3.axisLeft(y);
var area=d3.area()
  .x(function(d,i){return i*20;})
  .y0(height)
  .y1(function(d){return y(d);});
var svg=d3.select("body").append("svg").attr("height","100%").attr("width","100%");
var margin={left:50,right:50,top:10,bottom:0};
var chartGroup=svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");

chartGroup.append("path")
  .attr("d",area(dataArray));
chartGroup.append("g")
  .attr("class","axis y")
  .call(yAxis);
