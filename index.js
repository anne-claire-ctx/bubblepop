let count = 0;
const counter = document.querySelector(".counter");
let globalCount = 0;

const createCircle = () => {
  const circle = document.createElement("span");
  circle.classList.add("circle");

  let size = Math.random() * 300 + 50 + "px";
  circle.style.height = size;
  circle.style.width = size;

  circle.style.top = Math.random() * 100 + 30 + "%";
  circle.style.left = Math.random() * 100 + "%";

  document.body.appendChild(circle);

  circle.addEventListener("click", () => {
    circle.remove();
    count++;
    counter.innerHTML = `<h1>${count}</h1>`;
  });

  setTimeout(() => {
    circle.remove();
  }, 5000);
};

setInterval(createCircle, 100);

window.addEventListener("click", () => {
  globalCount++;
  console.log((count / globalCount) * 100 + "%");
});
