var dataArray = [{x:1,y:2},{x:4,y:4},{x:70,y:20},{x:50,y:50},{x:90,y:90}];

var svg=d3.select("body").append("svg").attr("height","100%").attr("width","100%");

var line = d3.line()
                .x(function(d,i){return d.x*6;})
                .y(function(d,i){return d.y*4;})
                .curve(d3.curveCardinal);


svg.append("path")
  .attr("fill","none")
  .attr("stroke","blue")
  .attr("d",line(dataArray));


svg.append("text").text("hello world!");
