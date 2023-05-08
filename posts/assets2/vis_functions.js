var scale_flow = 30
var scale_stock = 10
var slider_width = 17.5
var svg_width = 200
var update_time = 100 // ms
var gray = "rgb(60%,60%,60%)"
var black = "rgb(0%,0%,0%)"

function modelPC(){

  var values = {}

  // variables
  values["G"] = 0.0;
  values["W"] = 0.0;
  values["C"] = 0.0;
  values["T"] = 0.0;
  values["I"] = 0.0;
  values["Vh"] = 0.0;
  values["Bh"] = 0.0;
  values["Hh"] = 0.0;
  values["Bg"] = 0.0;
  values["Bcb"] = 0.0;
  values["Hcb"] = 0.0;

  // parameters
  values["g"] = 20.;
  values["θ"] = 0.2;
  values["α1"] = 0.6;
  values["α2"] = 0.4;
  values["λ0"] = 0.6;
  values["λ1"] = 3;
  values["λ2"] = 0.1;
  values["r"] = 0.0;

  var flows = {
    "G": d3.select("#path3706-8-5"),
    "W": d3.select("#path4809"),
    "C": d3.select("#path4809-4"),
    "T": d3.select("#path3706-8"),
    "I": d3.select("#path3706-8-1")
  };

  var stocks = {
    "Bh": d3.select("#rect451-8-1-5"),
    "Hh": d3.select("#rect451-8-5-6-7"),
    "Bg": d3.select("#rect451-8-1"),
    "Bcb": d3.select("#rect451-8-1-3"),
    "Hcb": d3.select("#rect451-8-5-6-9")
  };

  var labels = {
    "g": d3.select("#text32918-8-6-4-1-8-2-0").select("tspan"),
    "θ": d3.select("#text32918-8-6-4-1-8-5").select("tspan"),
    "α1": d3.select("#text32918-8-6-4-1-8-7").select("tspan"),
    "α2": d3.select("#text32918-8-6-4-1-8-7-2").select("tspan"),
    "λ0": d3.select("#text32918-8-6-4-1-8-7-2-6").select("tspan"),
    "λ1": d3.select("#text32918-8-6-4-1-8-7-2-6-0").select("tspan"),
    "λ2": d3.select("#text32918-8-6-4-1-8-7-2-6-0-9").select("tspan"),
    "r": d3.select("#text32918-8-6-4-1-8-6-3").select("tspan")
  };

  var sliders = {
    "g": d3.select("#path20475-6-0-2").attr("d"),
    "θ": d3.select("#path20475-6-0").attr("d"),
    "α1": d3.select("#path20475-6").attr("d"),
    "α2": d3.select("#path20475-6-1").attr("d"),
    "λ0": d3.select("#path20475-6-1-7").attr("d"),
    "λ1": d3.select("#path20475-6-1-7-1").attr("d"),
    "λ2": d3.select("#path20475-6-1-7-1-6").attr("d"),
    "r": d3.select("#path20475-6-0-5").attr("d")
  }

  var min_max_steps = {
    "g": [0,40,5],
    "θ": [0.1,1.0,0.1],
    "α1": [0.1,1.0,0.1],
    "α2": [0.1,1.0,0.1],
    "λ0": [0.0,1.0,0.1],
    "λ1": [0.0,5.0,1.0],
    "λ2": [0.0,0.5,0.1],
    "r": [0.0,0.1,0.01]
  }

  reset(values);
  
  var interval = d3.interval(function(elapsed) {
    update_values()
    }, update_time);

  window.addEventListener("resize", function(event) {
    reset(values);
  });

  d3.select("#reset_stocks").on("click", function() {
    values["G"] = 0; values["W"] = 0; values["C"] = 0; values["T"] = 0; values["I"] = 0; values["Vh"] = 0; values["Bh"] = 0; values["Hh"] = 0; values["Bg"] = 0; values["Bcb"] = 0; values["Hcb"] = 0;
  });

  function reset(values) {

    var svg = d3.select("#svg").style("position","relative")
    var figure_width = parseFloat(svg.style("width")) / svg_width

    for (param of ["g","θ","α1","α2","λ0","λ1","λ2","r"]) {

      var min_max_step = min_max_steps[param];
      labels[param].text(parseFloat(values[param])).style("fill", black);

      d3.select("#input-" + param).remove();
      svg.append("input")
         .style("position","absolute")
         .style("top", sliders[param].slice(12,18)*figure_width-1 + "px")
         .style("left", sliders[param].slice(2,8)*figure_width + "px")
         .style("width", slider_width*figure_width + "px")
         .style("background", gray)
         .attr("id","input-" + param)
         .attr("type","range")
         .attr("min", min_max_step[0])
         .attr("max", min_max_step[1])
         .attr("step", min_max_step[2])
         .attr("value", values[param])
         .on("input", function() { labels[this.id.substr(6)].text(parseFloat(this.value)).style("fill", black);})
         .on("mouseup", function() {values[this.id.substr(6)] = parseFloat(this.value);})
         .on("touchend", function() {values[this.id.substr(6)] = parseFloat(this.value);});
    }

    labels["r"].text(parseFloat(values["r"])*100 + "%").style("fill", black);
    d3.select("#input-r").on("input", function() {labels["r"].text(Math.round(parseFloat(this.value)*100) + "%").style("fill", black);});
    //labels["λ2"].text(parseFloat(values["λ2"])*100 + "%").style("fill", black);
    //d3.select("#input-λ2").on("input", function() {labels["λ2"].text(Math.round(parseFloat(this.value)*100) + "%").style("fill", black);});

  }

  function update_values(){
    values["G"] = values["g"]
    values["I"] = values["r"] * values["Bh"]
    values["C"] = (values["α1"] * (1 - values["θ"]) * (values["G"] + values["I"]) + values["α2"] * values["Vh"]) / (1 - values["α1"] * (1 - values["θ"]))
    values["W"] = values["C"] + values["G"]
    values["T"] = values["θ"] * values["W"]
    
    values["Vh"] = values["Vh"] + values["W"] + values["I"] - values["C"] - values["T"]
    values["Bh"] = values["Vh"] * (values["λ0"] + values["λ1"] * values["r"]) - values["λ2"] * (values["W"] - values["T"] + values["I"])
    if (values["Bh"] < 0) {values["Bh"] = 0}
    if (values["Bh"] > values["Vh"]) {values["Bh"] = values["Vh"]}
    values["Hh"] = values["Vh"] - values["Bh"]
    values["Bg"] = values["Bg"] + values["T"] - values["G"] - values["I"] 
    values["Bcb"] = values["Hh"]
    values["Hcb"] = -values["Hh"] 

    for (variable of ["G","I","W","C","T"]) {
      flows[variable].style("stroke-width", values[variable]/scale_flow)
    }

    for (variable of ["Bh","Hh","Bg","Bcb","Hcb"]) {
      stocks[variable].style("height", 3 + math.abs(values[variable])/scale_stock)
    }
  }
}


function modelBMW(){

  var values = {}

  // variables
  values["W"] = 0.0;
  values["C"] = 0.0;
  values["I"] = 0.0;
  values["rL"] = 0.0;
  values["rM"] = 0.0;

  values["L"] = 200.0;
  values["M"] = 200.0;
  values["K"] = 200.0;
  values["-L"] = -200.0;
  values["-M"] = -200.0;

  var flows = {
    "W": d3.select("#path4809"),
    "C": d3.select("#path4809-4"),
    "I": d3.select("#path31069"),
    "rL": d3.select("#path3706-8"),
    "rM": d3.select("#path3706-8-5")
  };

  var stocks = {
    "L": d3.select("#rect451-8-1-3"),
    "M": d3.select("#rect451-8-5-6-7-3-9"),
    "K": d3.select("#rect451-8-1-5-3-0-4-5"),
    "-L": d3.select("#rect451-8-1-5-3-1-4"),
    "-M": d3.select("#rect451-8-5-6-9")
  };

  // parameters
  values["α0"] = 20;
  values["α1"] = 0.7;
  values["α2"] = 0.1;
  values["δ"] = 0.1;
  values["γ"] = 0.1;
  values["κ"] = 1;
  values["r"] = 0.04;

  var min_max_steps = {
    "α0": [0.,40.,5],
    "α1": [0.1,0.8,0.1],
    "α2": [0.1,0.3,0.1],
    "δ": [0.0,0.4,0.1],
    "γ": [0.1,0.3,0.1],
    "κ": [0.8,1.2,0.1],
    "r": [0.0,0.1,0.01]
  }

  var labels = {
    "α0": d3.select("#text32918-8-6-4-1-8-7").select("tspan"),
    "α1": d3.select("#text32918-8-6-4-1-8-7-2").select("tspan"),
    "α2": d3.select("#text32918-8-6-4-1-8-7-2-6").select("tspan"),
    "δ": d3.select("#text32918-8-6-4-1-8-7-1").select("tspan"),
    "γ": d3.select("#text32918-8-6-4-1-8-7-2-7").select("tspan"),
    "κ": d3.select("#text32918-8-6-4-1-8-7-2-6-8").select("tspan"),
    "r": d3.select("#text32918-8-6-4-1-8-6-3").select("tspan")
  };

  var sliders = {
    "α0": d3.select("#path20475-6").attr("d"),
    "α1": d3.select("#path20475-6-1").attr("d"),
    "α2": d3.select("#path20475-6-1-7").attr("d"),
    "δ": d3.select("#path20475-6-5").attr("d"),
    "γ": d3.select("#path20475-6-1-3").attr("d"),
    "κ": d3.select("#path20475-6-1-7-1").attr("d"),
    "r": d3.select("#path20475-6-8").attr("d")
  }

  reset(values);
  
  var interval = d3.interval(function(elapsed) {
    update_values();
    }, update_time);

  window.addEventListener("resize", function(event) {
    reset(values);
  });

  function reset(values) {

    var svg = d3.select("#svg").style("position","relative")
    var figure_width = parseFloat(svg.style("width")) / svg_width

    for (param of ["α0","α1","α2","δ","γ","κ","r"]) {

      var min_max_step = min_max_steps[param];
      labels[param].text(parseFloat(values[param])).style("fill", black);

      d3.select("#input-" + param).remove();
      svg.append("input")
         .style("position","absolute")
         .style("top", sliders[param].slice(12,18)*figure_width-1 + "px")
         .style("left", sliders[param].slice(2,8)*figure_width + "px")
         .style("width", slider_width*figure_width + "px")
         .style("background", gray)
         .attr("id","input-" + param)
         .attr("type","range")
         .attr("min", min_max_step[0])
         .attr("max", min_max_step[1])
         .attr("step", min_max_step[2])
         .attr("value", values[param])
         .on("input", function() { labels[this.id.substr(6)].text(parseFloat(this.value)).style("fill", black);})
         .on("mouseup", function() {values[this.id.substr(6)] = parseFloat(this.value);})
         .on("touchend", function() {values[this.id.substr(6)] = parseFloat(this.value);});
    }

    labels["r"].text(parseFloat(values["r"])*100 + "%").style("fill", black);
    d3.select("#input-r").on("input", function() {labels["r"].text(Math.round(parseFloat(this.value)*100) + "%").style("fill", black);});

  }

  function update_values(){
    values["rL"] = values["r"] * values["L"]
    values["rM"] = values["r"] * values["M"]
    values["I"] = values["γ"] * (values["κ"] * (values["C"] + values["I"]) - values["K"]) + values["δ"] * values["K"]
    if (values["I"] < 0) {values["I"] = 0}
    values["C"] = (values["α0"] + values["α1"] * (values["I"] - values["δ"] * values["K"]) + values["α2"] * values["M"]) / (1 - values["α1"])
    values["W"] = values["C"] + values["I"] - values["rL"] - values["δ"] * values["K"]

    values["L"] = values["L"] + values["I"] - values["δ"] * values["K"]
    values["M"] = values["L"]
    values["K"] = values["L"] 
    values["-L"] = -values["L"]
    values["-M"] = -values["M"]


    for (variable of ["W","C","I","rL","rM"]) {
      flows[variable].style("stroke-width", values[variable]/scale_flow)
    }

    for (variable of ["L","M","K","-L","-M"]) {
      stocks[variable].style("height", 3 + math.abs(values[variable])/scale_stock)
    }
  }
}
