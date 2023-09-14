const stopBtn = document.getElementById("stopButton");
const stopLt = document.getElementById("stopLight");

const slowBtn = document.getElementById("slowButton");
const slowLt = document.getElementById("slowLight");

const goBtn = document.getElementById("goButton");
const goLt = document.getElementById("goLight");
//!
//!/
stopBtn.addEventListener("click", redLight);

stopBtn.addEventListener("mouseenter", function (event) {
  console.log(`Entered ${event.target.textContent} button`);
});

stopBtn.addEventListener("mouseleave", function (event) {
  console.log(`Exited ${event.target.textContent} button`);
});
//!
slowBtn.addEventListener("click", yellowLight);

slowBtn.addEventListener("mouseenter", function (event) {
  console.log(`Entered ${event.target.textContent} button`);
});

slowBtn.addEventListener("mouseleave", function (event) {
  console.log(`Exited ${event.target.textContent} button`);
});
//!
goBtn.addEventListener("click", greenLight);

goBtn.addEventListener("mouseenter", function (event) {
  console.log(`Entered ${event.target.textContent} button`);
});

goBtn.addEventListener("mouseleave", function (event) {
  console.log(`Exited ${event.target.textContent} button`);
});
//!/
//!
function redLight() {
  stopLt.classList.toggle("stop");
  lights(stopLt, stopBtn, "stop");
}

function yellowLight() {
  slowLt.classList.toggle("slow");
  lights(slowLt, slowBtn, "slow");
}

function greenLight() {
  goLt.classList.toggle("go");
  lights(goLt, goBtn, "go");
}

function lights(light, btn, color) {
  if (light.className.includes(color)) {
    console.log(`${btn.textContent} light on`);
  } else {
    console.log(`${btn.textContent} light off`);
  }
}
