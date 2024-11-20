function submit(event) {
  event.preventDefault();
  let num = document.getElementById("val").value;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  document.getElementById("num").innerHTML = num;
  document.getElementById("result").innerHTML = sum;
  console.log(sum);
}

let count = 0;
function countIt() {
  count++;
  document.getElementById("clickCount").innerHTML = count;
}