const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

function turnOffLights() {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");
}

function startTrafficLight() {
  turnOffLights();
  red.classList.add("active");

  setTimeout(() => {
    turnOffLights();
    green.classList.add("active");

    setTimeout(() => {
      turnOffLights();
      yellow.classList.add("active");

      setTimeout(() => {
        startTrafficLight();
      }, 1000);

    }, 3000);

  }, 3000);
}

startTrafficLight();
