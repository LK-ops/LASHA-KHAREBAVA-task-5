let count=10;

let intervalId = setInterval(() => {
  let colorGenerator = Math.floor(Math.random() * 456781)
  console.log("Timer : " + count)
  document.body.style.background = `#${colorGenerator}`;
  count--;
if (count < 0) {
  clearInterval(intervalId);

  setInterval(() => {
    console.log("Finished")
  document.body.style.background = "#ffffff";

  }, 2000);
}

}, 1000);