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
function redLight(event) {
  stopLt.classList.add("stop");
  slowLt.classList.remove("slow");
  goLt.classList.remove("go");
  console.log(`${event.target.textContent} light on`);
}

function yellowLight(event) {
  stopLt.classList.remove("stop");
  slowLt.classList.add("slow");
  goLt.classList.remove("go");
  console.log(`${event.target.textContent} light on`);
}

function greenLight(event) {
  stopLt.classList.remove("stop");
  slowLt.classList.remove("slow");
  goLt.classList.add("go");
  console.log(`${event.target.textContent} light on`);
}
