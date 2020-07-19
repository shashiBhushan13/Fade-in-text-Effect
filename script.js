const text = document.querySelector(".main-text");

var n = 0;
let timer = setInterval(onTick, 2500);

function onTick() {
  if (n === 0) {
    text.innerHTML = " Hi there! I'm <span >Shashi</span>";

    n = 1;
    return;
  }
  if (n === 4) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs" ">Shashi</span>';

    n = 1;
    return;
  } else if (n == 1) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs">a Developer</span>';
    n = 2;
    return;
  } else if (n == 2) {
    text.innerHTML =
      ' Hi there! I\'m <span class="jobs">a Software Developer</span>';
    n = 3;
    return;
  } else if (n == 3) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs">a Full-Stack-Developer</span>';
    n = 4;
    return;
  }
}
