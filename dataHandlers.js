var parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("prices.csv")
  .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
  .get(function(error,data){
    console.log(data);
  });

d3.tsv("prices.tsv")
  .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
  .get(function(error,data){
    console.log(data);
  });

var psv = d3.dsvFormat("|");
d3.text("prices.txt")
  .get(function(error,data){
    var rows = psv.parse(data);
    var newRows = [];
    for (var p=0; p<rows.length; p++) {
      newRows.push({month: parseDate(rows[p].month), price:Number(rows[p].price.trim().slice(1))});
    }
    console.log(newRows);
  });
