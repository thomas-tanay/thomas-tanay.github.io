//var colors = {"e": "#990000", "w": "#003399", "c": "#3e9ade", "r": "#ff9933", "G": "#f03300", "F": "#006600", "H": "#66cc33"};
var colors = {"g": "#AA5151", 
              "w": "#0099E5",
              "c": "#34BF49",
              "t": "#FF4C4C",
              "G": "#FF4C4C",
              "F": "#0099E5",
              "H": "#34BF49",
              "alpha": "#2B779D",
              "beta": "#458A4F",
              "theta": "#AA5151"};
var aspect_ratio = 2
var dot_size = 1.5 * aspect_ratio
var background_color = "#f2f2f2ff"
var axes_color = "rgb(60%,60%,60%)"
var arrow_length = 10
var border = 20

//https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-using-html-canvas
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}


function figure(){

  var e = 20
  var w = 100
  var c = 80
  var r = 20
  var G = -170
  var F = 50
  var H = 120
  var theta = 0.2
  var alpha1 = 0.8
  var alpha2 = 0.4
  var beta1 = 0.7
  var beta2 = 0.2

  var l = 50
  var n = [...Array(l).keys()]
  var array_G = new Array(l).fill(G)
  var array_F = new Array(l).fill(F)
  var array_H = new Array(l).fill(H)
  var array_e = new Array(l).fill(e)
  var array_w = new Array(l).fill(w)
  var array_c = new Array(l).fill(c)
  var array_r = new Array(l).fill(r)

  var arrow_e = d3.select("#path3706");
  var arrow_w = d3.select("#path4809");
  var arrow_c = d3.select("#path4809-6");
  var arrow_r = d3.select("#path3706-8");

  var rect_G = d3.select("#rect2987");
  var rect_F = d3.select("#rect2987-8");
  var rect_H = d3.select("#rect2987-8-3");

  var text_e = d3.select("#text888-83").select("tspan");
  var text_theta = d3.select("#text888-83-5").select("tspan");
  var text_alpha1 = d3.select("#text888-8-7").select("tspan");
  var text_alpha2 = d3.select("#text888-8-7-0").select("tspan");
  var text_beta1 = d3.select("#text888-8-1-8").select("tspan");
  var text_beta2 = d3.select("#text888-8-1-8-5").select("tspan");

  var line_e = d3.select("#path2983-8").attr("d");
  var line_theta = d3.select("#path2983-8-5").attr("d");
  var line_alpha1 = d3.select("#path2983-8-3").attr("d");
  var line_alpha2 = d3.select("#path2983-8-5-3").attr("d");
  var line_beta1 = d3.select("#path2983-8-3-1").attr("d");
  var line_beta2 = d3.select("#path2983-8-5-3-7").attr("d");


  function plot_stocks(){

    d3.select("#stocks").html("");
    stocks = d3.select("#stocks").style("position","relative");
    width_stocks = parseFloat(stocks.style("width"));
    height_stocks = parseFloat(stocks.style("height"));
    stocks.attr("width", width_stocks)
          .attr("height", height_stocks);

    var layer1 = stocks.append("canvas")
                   .style("position","absolute")
                   .style("top", 1.5*border + "px")
                   .style("left", "0px")
                   .style("width", (width_stocks-2*border).toString() + "px")
                   .style("height", (height_stocks-2*border).toString() + "px")
                   .attr("width", aspect_ratio*(width_stocks-2*border))
                   .attr("height", aspect_ratio*(height_stocks-2*border));
    ctx_stocks = layer1.node().getContext("2d");

    var layer2 = stocks.append("svg")
                       .style("position","absolute")
                       .style("top", -border + "px")
                       .style("left", -border + "px")
                       .attr("width", width_stocks+2*border)
                       .attr("height", height_stocks+2*border);

    pos_x1 = border
    pos_y1 = 1.5*border + height_stocks/2
    pos_x2 = width_stocks-border
    pos_y2 = 1.5*border + height_stocks/2
    pos_x3 = border
    pos_y3 = 2.5*border + arrow_length
    layer2.append("line")
          .attr("stroke-width", 2)
          .attr("x1", pos_x1)
          .attr("y1", pos_y1)
          .attr("x2", pos_x2+arrow_length/2)
          .attr("y2", pos_y2)
          .attr("stroke", axes_color);

    layer2.append("polygon")
          .attr("fill", axes_color)
          .attr("points", (pos_x2+arrow_length/2) + "," + pos_y2 + " " + 
                          (pos_x2) + "," + (pos_y2-arrow_length/2) + " " + 
                          (pos_x2+arrow_length) + "," + pos_y2 + " " + 
                          (pos_x2) + "," + (pos_y2+arrow_length/2));

    layer2.append("text")
          .attr("text-anchor", "middle")
          .attr("font-family","Roboto")
          .attr("fill", axes_color)
          .attr("font-weight", "bold")
          .attr("font-style", "italic")
          .attr("font-size", "13px")
          .attr("x", pos_x2 + 28)
          .attr("y", pos_y2 + 4)
          .text("time");

    layer2.append("line")
          .attr("stroke-width", 2)
          .attr("x1", pos_x1)
          .attr("y1", pos_y1)
          .attr("x2", pos_x3)
          .attr("y2", pos_y3-arrow_length/2)
          .attr("stroke", axes_color);
    
    layer2.append("polygon")
          .attr("fill", axes_color)
          .attr("points", pos_x3 + "," + (pos_y3-arrow_length/2) + " " + 
                          (pos_x3-arrow_length/2) + "," + pos_y3 + " " + 
                          pos_x3 + "," + (pos_y3-arrow_length) + " " + 
                          (pos_x3 + arrow_length/2) + "," + pos_y3);
  }

  function plot_flows(){

    d3.select("#flows").html("");
    flows = d3.select("#flows").style("position","relative");
    width_flows = parseFloat(flows.style("width"));
    height_flows = parseFloat(flows.style("height"));
    flows.attr("width", width_flows)
         .attr("height", height_flows);

    var layer1 = flows.append("canvas")
                   .style("position","absolute")
                   .style("top", 1.5*border + "px")
                   .style("left", "0px")
                   .style("width", (width_flows-2*border).toString() + "px")
                   .style("height", (height_flows-2*border).toString() + "px")
                   .attr("width", aspect_ratio*(width_flows-2*border))
                   .attr("height", aspect_ratio*(height_flows-2*border));
    ctx_flows = layer1.node().getContext("2d");

    var layer2 = flows.append("svg")
                      .style("position","absolute")
                      .style("top", -border + "px")
                      .style("left", -border + "px")
                      .attr("width", width_flows+2*border)
                      .attr("height", height_flows+2*border);
    
    pos_x1 = border
    pos_y1 = height_flows+border/2
    pos_x2 = width_flows-border
    pos_y2 = height_flows+border/2
    pos_x3 = border
    pos_y3 = 2.5*border + arrow_length
    layer2.append("line")
          .attr("stroke-width", 2)
          .attr("x1", pos_x1)
          .attr("y1", pos_y1)
          .attr("x2", pos_x2+arrow_length/2)
          .attr("y2", pos_y2)
          .attr("stroke", axes_color);

    layer2.append("polygon")
          .attr("fill", axes_color)
          .attr("points", (pos_x2+arrow_length/2) + "," + pos_y2 + " " + 
                          (pos_x2) + "," + (pos_y2-arrow_length/2) + " " + 
                          (pos_x2+arrow_length) + "," + pos_y2 + " " + 
                          (pos_x2) + "," + (pos_y2+arrow_length/2));

    layer2.append("text")
          .attr("text-anchor", "middle")
          .attr("font-family","Roboto")
          .attr("fill", axes_color)
          .attr("font-weight", "bold")
          .attr("font-style", "italic")
          .attr("font-size", "13px")
          .attr("x", pos_x2 + 28)
          .attr("y", pos_y2 + 4)
          .text("time");

    layer2.append("line")
          .attr("stroke-width", 2)
          .attr("x1", pos_x1)
          .attr("y1", pos_y1)
          .attr("x2", pos_x3)
          .attr("y2", pos_y3-arrow_length/2)
          .attr("stroke", axes_color);
    
    layer2.append("polygon")
          .attr("fill", axes_color)
          .attr("points", pos_x3 + "," + (pos_y3-arrow_length/2) + " " + 
                          (pos_x3-arrow_length/2) + "," + pos_y3 + " " + 
                          pos_x3 + "," + (pos_y3-arrow_length) + " " + 
                          (pos_x3 + arrow_length/2) + "," + pos_y3);
  }

  function reset(values) {

    var svg = d3.select("#svg").style("position","relative")

    var width_svg = parseFloat(svg.style("width")) / 145
    
    e = values[0]
    theta = values[1]
    alpha1 = values[2]
    alpha2 = values[3]
    beta1 = values[4]
    beta2 = values[5]
    text_e.text(parseFloat(e)).style("fill", colors["g"]);
    text_theta.text(parseFloat(theta)).style("fill", colors["theta"]);
    text_alpha1.text(parseFloat(alpha1)).style("fill", colors["alpha1"]);
    text_alpha2.text(parseFloat(alpha2)).style("fill", colors["alpha2"]);
    text_beta1.text(parseFloat(beta1)).style("fill", colors["beta1"]);
    text_beta2.text(parseFloat(beta2)).style("fill", colors["beta2"]);

    d3.select("#figure-input-e").remove();
    d3.select("#figure-input-theta").remove();
    d3.select("#figure-input-alpha1").remove();
    d3.select("#figure-input-alpha2").remove();
    d3.select("#figure-input-beta1").remove();
    d3.select("#figure-input-beta2").remove();

    svg.append("input")
       .style("position","absolute")
       .style("top", line_e.slice(12,18)*width_svg - 1 + "px")
       .style("left", line_e.slice(2,8)*width_svg + "px")
       .style("width", 26*width_svg + "px")
       .style("background", colors["g"])
       .attr("id","figure-input-e")
       .attr("type","range")
       .attr("min",0)
       .attr("max",40)
       .attr("step",5)
       .on("input", function() {text_e.text(parseFloat(this.value)).style("fill", colors["g"]);})
       .on("mouseup", function() {e = parseFloat(this.value);})
       .on("ontouchend", function() {e = parseFloat(this.value);})
       .attr("value", e);

    svg.append("input")
       .style("position","absolute")
       .style("top", line_theta.slice(12,18)*width_svg - 1 + "px")
       .style("left", line_theta.slice(2,8)*width_svg + "px")
       .style("width", 26*width_svg + "px")
       .style("background", colors["theta"])
       .attr("id","figure-input-theta")
       .attr("type","range")
       .attr("min",0.1)
       .attr("max",1.0)
       .attr("step",0.1)
       .on("input", function() {text_theta.text(parseFloat(this.value)).style("fill", colors["theta"]);})
       .on("mouseup", function() {theta = parseFloat(this.value);})
       .on("ontouchend", function() {theta = parseFloat(this.value);})
       .attr("value", theta);

    svg.append("input")
       .style("position","absolute")
       .style("top", line_alpha1.slice(12,18)*width_svg - 1 + "px")
       .style("left", line_alpha1.slice(2,8)*width_svg + "px")
       .style("width", 26*width_svg + "px")
       .style("background", colors["alpha"])
       .attr("id","figure-input-alpha1")
       .attr("type","range")
       .attr("min",0.1)
       .attr("max",1.0)
       .attr("step",0.1)
       .on("input", function() {text_alpha1.text(parseFloat(this.value)).style("fill", colors["alpha1"]);})
       .on("mouseup", function() {alpha1 = parseFloat(this.value);})
       .on("ontouchend", function() {alpha1 = parseFloat(this.value);})
       .attr("value", alpha1);

    svg.append("input")
       .style("position","absolute")
       .style("top", line_alpha2.slice(12,18)*width_svg - 1 + "px")
       .style("left", line_alpha2.slice(2,8)*width_svg + "px")
       .style("width", 26*width_svg + "px")
       .style("background", colors["alpha"])
       .attr("id","figure-input-alpha2")
       .attr("type","range")
       .attr("min",0.1)
       .attr("max",1.0)
       .attr("step",0.1)
       .on("input", function() {text_alpha2.text(parseFloat(this.value)).style("fill", colors["alpha2"]);})
       .on("mouseup", function() {alpha2 = parseFloat(this.value);})
       .on("ontouchend", function() {alpha2 = parseFloat(this.value);})
       .attr("value", alpha2);

    svg.append("input")
       .style("position","absolute")
       .style("top", line_beta1.slice(12,18)*width_svg - 1 + "px")
       .style("left", line_beta1.slice(2,8)*width_svg + "px")
       .style("width", 26*width_svg + "px")
       .style("background", colors["beta"])
       .attr("id","figure-input-beta1")
       .attr("type","range")
       .attr("min",0.1)
       .attr("max",1.0)
       .attr("step",0.1)
       .on("input", function() {text_beta1.text(parseFloat(this.value)).style("fill", colors["beta1"]);})
       .on("mouseup", function() {beta1 = parseFloat(this.value);})
       .on("ontouchend", function() {beta1 = parseFloat(this.value);})
       .attr("value", beta1);

    svg.append("input")
       .style("position","absolute")
       .style("top", line_beta2.slice(12,18)*width_svg - 1 + "px")
       .style("left", line_beta2.slice(2,8)*width_svg + "px")
       .style("width", 26*width_svg + "px")
       .style("background", colors["beta"])
       .attr("id","figure-input-beta2")
       .attr("type","range")
       .attr("min",0.1)
       .attr("max",1.0)
       .attr("step",0.1)
       .on("input", function() {text_beta2.text(parseFloat(this.value)).style("fill", colors["beta2"]);})
       .on("mouseup", function() {beta2 = parseFloat(this.value);})
       .on("ontouchend", function() {beta2 = parseFloat(this.value);})
       .attr("value", beta2);
  }

  function update_values(){
    //w = alpha1 * (e + c) + alpha2 * F;
    w = (alpha1 * beta2 * H + alpha1 * e + alpha2 * F) / (1 - alpha1 * beta1 * (1 - theta));
    c = beta1 * (1 - theta) * w + beta2 * H;
    r = theta * w;
    G = G + r - e;
    F = F + c + e - w;
    H = H + w - c - r;

    array_e.push(e); array_w.push(w); array_c.push(c); array_r.push(r); array_G.push(G); array_F.push(F); array_H.push(H);
    array_e.shift(); array_w.shift(); array_c.shift(); array_r.shift(); array_G.shift(); array_F.shift(); array_H.shift();
  }

  function update_svg(){
    arrow_e.style("stroke-width", e/15)
    arrow_w.style("stroke-width", w/15)
    arrow_c.style("stroke-width", c/15)
    arrow_r.style("stroke-width", r/15)

    rect_G.style("height", 5.843 - G/15)
    rect_F.style("height", 5.839 + 2*F/15)
    rect_H.style("height", 5.84  + 2*H/15)
  }

  function update_flows(){

    var x = d3.scaleLinear().domain([0, l]).range([0, aspect_ratio*(width_flows-2*border)])
    var y = d3.scaleLinear().domain([200,-1]).range([0, aspect_ratio*(height_flows-2*border)])
    var bar_width = 0.7*aspect_ratio*(width_flows-2*border) / l

    function plot_data(ctx, x, y, width) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+width, y);
      ctx.stroke();
    }

    ctx_flows.clearRect( 0, 0, aspect_ratio*width_flows, aspect_ratio*height_flows)
    ctx_flows.fillStyle = background_color
    ctx_flows.fillRect(0, 0, aspect_ratio*width_flows, aspect_ratio*height_flows)

    ctx_flows.lineWidth = 4;
    ctx_flows.lineCap = "round"
    for (let t = 0; t < l; t++) {
      ctx_flows.strokeStyle = colors["w"];
      plot_data(ctx_flows, x(t), y(array_w[t]), bar_width)
      ctx_flows.strokeStyle = colors["c"];
      plot_data(ctx_flows, x(t), y(array_c[t]), bar_width)
      ctx_flows.strokeStyle = colors["g"];
      plot_data(ctx_flows, x(t), y(array_e[t]), bar_width)
      ctx_flows.strokeStyle = colors["t"];
      plot_data(ctx_flows, x(t), y(array_r[t]), bar_width)
    }
  }

  function update_stocks(){
    var x = d3.scaleLinear().domain([0, l]).range([0, aspect_ratio*(width_stocks-2*border)])
    var y = d3.scaleLinear().domain([300,-300]).range([0, aspect_ratio*(height_stocks-2*border)])
    var bar_width = 0.7*aspect_ratio*width_stocks / l

    ctx_stocks.clearRect( 0, 0, aspect_ratio*width_stocks, aspect_ratio*width_stocks)
    ctx_stocks.fillStyle = background_color
    ctx_stocks.fillRect(0, 0, aspect_ratio*width_stocks, aspect_ratio*width_stocks)

    for (let t = 0; t < l; t++) {
      ctx_stocks.fillStyle = colors["G"];
      if (array_G[t] < -2) {
        roundRect(ctx_stocks, x(t), y(0), bar_width, y(array_G[t]/2) - y(0), {bl: 5, br: 5}, true, false);
      }
      ctx_stocks.fillStyle = colors["F"];
      if (array_F[t] > 4) {
        roundRect(ctx_stocks, x(t), y(array_F[t]), bar_width/2, y(0) - y(array_F[t]), {tl: 3, tr: 3}, true, false);
      }
      ctx_stocks.fillStyle = colors["H"];
      if (array_H[t] > 4) {
        roundRect(ctx_stocks, x(t)+bar_width/2, y(array_H[t]), bar_width/2, y(0) - y(array_H[t]), {tl: 3, tr: 3}, true, false);
      }
      //ctx_stocks.fillRect();
    }
  }

  plot_stocks()
  plot_flows()
  reset([20, 0.2, 0.8, 0.4, 0.7, 0.2])

  d3.select("#reset_stocks").on("click", function() {
    w = 0
    c = 0
    r = 0
    G = 0
    F = 0
    H = 0
    array_G = new Array(l).fill(0)
    array_F = new Array(l).fill(0)
    array_H = new Array(l).fill(0)
    array_e = new Array(l).fill(0)
    array_w = new Array(l).fill(0)
    array_c = new Array(l).fill(0)
    array_r = new Array(l).fill(0)
  });

  //d3.select("#reset_parameters").on("click", function() {reset([20, 0.2, 0.8, 0.4, 0.7, 0.2])});

  var interval = d3.interval(function(elapsed) {
    update_values()
    update_svg()
    update_flows()
    update_stocks()
    //console.log("w: ", w, "c: ", c, "r: ", r, "G: ", G, "F: ", F, "H: ", H)
    }, 750);

  window.addEventListener("resize", function(event) {
    plot_stocks()
    plot_flows()
    reset([e, theta, alpha1, alpha2, beta1, beta2]);
  });

  //d3.select("#button0").on("click", function() {reset([0, 1.0, 1.0, 1.0, 1.0, 1.0])} )
  //d3.select("#button1").on("click", function() {reset([20, 1.0, 1.0, 1.0, 1.0, 1.0])} )
  //d3.select("#button2").on("click", function() {reset([20, 0.2, 1.0, 1.0, 1.0, 1.0])} )
  //d3.select("#button3").on("click", function() {reset([20, 0.2, 0.8, 0.4, 1.0, 1.0])} )
  //d3.select("#button4").on("click", function() {reset([20, 0.2, 0.8, 0.4, 0.7, 0.2])} )
  //d3.select("#button5").on("click", function() {reset([20, 0.2, 0.1, 0.1, 0.1, 0.1])} )

}

function compute_values(){
  G_ = 0
  F_ = 0
  H_ = 0
  e_ = 20
  theta_ = 0.2
  alpha1_ = 0.8
  alpha2_ = 0.4
  beta1_ = 0.7
  beta2_ = 0.2

  for (let i = 0; i < 50; i++) {
    w_ = (alpha1_ * beta2_ * H_ + alpha1_ * e_ + alpha2_ * F_) / (1 - alpha1_ * beta1_ * (1 - theta_));
    c_ = beta1_ * (1 - theta_) * w_ + beta2_ * H_;
    r_ = theta_ * w_;
    G_ = G_ + r_ - e_;
    F_ = F_ + c_ + e_ - w_;
    H_ = H_ + w_ - c_ - r_;
  }

  alpha1_ = 0.1
  alpha2_ = 0.1
  beta1_ = 0.1
  beta2_ = 0.1

  for (let i = 0; i < 40; i++) {
    console.log("iteration:", i, "w: ", w_, "c: ", c_, "r: ", r_, "G: ", G_, "F: ", F_, "H: ", H_)
    w_ = (alpha1_ * beta2_ * H_ + alpha1_ * e_ + alpha2_ * F_) / (1 - alpha1_ * beta1_ * (1 - theta_));
    c_ = beta1_ * (1 - theta_) * w_ + beta2_ * H_;
    r_ = theta_ * w_;
    G_ = G_ + r_ - e_;
    F_ = F_ + c_ + e_ - w_;
    H_ = H_ + w_ - c_ - r_;
  }
}