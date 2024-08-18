const n = 10;
const array = [];

init();

function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  showBars();
}

function play() {
  const copyarray = [...array];
  const swaps = BubbleShort(copyarray);
  animate(swaps);
  // showBars();
}

function animate(swaps) {
  if (swaps.length == 0) {
    return;
  }
  const [i, j] = swaps.shift();
  [array[i], array[j]] = [array[j], array[i]];
  showBars();
  setTimeout(function () {
    animate(swaps);
  }, 320);
}

function BubbleShort(array) {
  const swaps = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        swapped = true;
        swaps.push([i - 1, i]);
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  } while (swapped);
  return swaps;
}

function showBars() {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    // bar.innerText = Math.floor(array[i]*100);
    container.appendChild(bar);

    const sideL = document.createElement("div");
    sideL.classList.add("sideL");
    bar.appendChild(sideL);
    
    const sideT = document.createElement("div");
    sideT.classList.add("sideT");
    // sideT.innerText = Math.floor(array[i]*100);
    sideT.innerHTML =`<p>${Math.floor(array[i]*100)}</p>`;

    bar.appendChild(sideT);
    

  }
}