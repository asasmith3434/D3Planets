
var  names= []
   names.push("Uranus")
   names.push("Venus")
   names.push("Jupiter")

d3.select("#A1")
.append("p")
.text(names)


d3.select("#A2")
.selectAll("span")
  .data(names)  
    .enter()
    .append("span")
    .text(function(d)
          {
        return d
})

var penPromise= d3.json("planets.json")
    penPromise.then(
    function(planData)
        {
            console.log("planData",planData);
            planetPrint(planData)
            planetList(planData)
            planetTable(planData)
            planetTable2(planData)
        },
        function(error)
        {
            console.log("flunk",error)
        }
    )

var planetPrint= function(planData)
{ d3.select("#B3")
    .selectAll("img")
    .data(planData)
    .enter()
    .append("img")
    .attr("src",function(planetPrint)
         {
    return planetPrint.img
})}

var planetList= function(planData)
{
    d3.select("#B4")
    .append("ol")
    .selectAll("li")
    .data(planData)
    .enter()
    .append("li")
    .text(function(d)
         {
        return d.name;
    })
}

var planetTable= function(planData)
{
    d3.select("#C1")
    .append("table")
    .selectAll("tr")
    .data(planData)
    .enter()
    .append("tr")
    .attr("plans", function(d)
         {
        return d.name
    })
}

var planetTable2= function(planData)
{
    d3.select("#C2")
    .append("table")
    .selectAll("tr")
    .data(planData)
    .enter()
    .append("tr")
    .text(function(d)
         {return d.name})
}

 
