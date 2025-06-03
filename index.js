
document.getElementById("btn").addEventListener("click", function() {
  alert("you clicked the btn mf");
});
document.getElementById("text").addEventListener("dblclick", function() {
this.style.color = "white";
this.style.background = "black";
this.style.padding = "10px";
this.style.display = "inline-block";
this.style.border = "solid 2px yellow";
});
let box = document.getElementById("div");
box.addEventListener("mouseover", function() {
  box.style.background = "green";
  box.style.color = "yellow";
});
box.addEventListener("mouseout", function() {
  box.style.background = "yellow";
  box.style.color = "green";
});
let input = document.getElementById("input");
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      document.body.style.background = "lightgreen";
    }
    if (event.key === "Shift") {
      input.style.background = "blue";
      input.style.color = "white";
    }
  });
input.addEventListener("keyup", function(soul) {
  if (soul.key === "Shift") {
    document.body.style.fontFamily = "sans-serif";
    document.body.style.fontSize = "larger";
    input.style.background = "red";
    input.style.color = "yellow";
  }
});
input.addEventListener("keypress", function(zaka) {
  if (zaka.key === "Z") {
    document.body.style.fontSize = "22px";
  }
});
let put = document.getElementById("myinput");
let output = document.getElementById("output");
put.addEventListener("focus", () => {
  put.style.background = "blue";
  put.style.color = "rgb(244, 9, 158)";
  put.style.border = "5px solid red";
  output.textContent = "inputka ayaad ku dhufatay";
});

put.addEventListener("blur", () => {
  put.style.background = "rgb(187, 42, 16)";
  put.style.color = "blue";
  put.style.border = "5px solid yellow";
  output.textContent = "waxaad ka baxday input ka";
});
let list = document.getElementById("list");
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.color = "red";
    alert("waxaad gujisay " + event.target.textContent);
  }
});
let gujis = 0;

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let current = parseInt(e.target.getAttribute("data-count")) || 0;
    current++;
    gujis++;
    e.target.setAttribute("data-count", current);
    e.target.textContent = `${e.target.textContent.split(' (')[0]} (${current}x gujin)`;
    document.getElementById("count").textContent = "Gujis: " + gujis;
  }
});
document.getElementById("myform").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  if (name.trim() === "") {
    document.getElementById("result").textContent = "fadlan gali magacaga mf";
  }else {
    document.getElementById("result").textContent = "waad ku mahadsantahay mf";
  }
});
document.getElementById("bio").addEventListener("input", function(e) {
  const text = e.target.value.length;
  document.getElementById("livecount").textContent = `${text} chracters`;
});