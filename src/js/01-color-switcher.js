
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");


let timerId = null;
function onstartBtnClick(){
    startBtn.style.backgroundColor = getRandomHexColor();
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
        console.log('I love async JS!');
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});
