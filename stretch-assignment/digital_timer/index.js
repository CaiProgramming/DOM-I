let count = 0;
let counter = setInterval(alertFunc, 10);

function alertFunc() {
  console.log((count += 1));

  let char = count
    .toString()
    .split("")
    .reverse();
  let ms = document.querySelector("#msTens");
  let msh = document.querySelector("#msHundreds");
  let so = document.querySelector("#secondOnes");
  let st = document.querySelector("#secondTens");

  if (count > 700) {
    ms.style.color = "red";
    msh.style.color = "red";
    so.style.color = "red";
    st.style.color = "red";
  }

  console.log(char);
  ms.textContent = char[0];
  if (char[1]) msh.textContent = char[1];
  if (char[2]) so.textContent = char[2];
  if (char[3]) st.textContent = char[3];

  console.log("hello");
  if (count > 1000 || count === 1000) {
    window.clearInterval(counter);
  }
}
