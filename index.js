// we need a function to write /append the op
let res = document.getElementById("result");
function append(input) {
  res.value += input;
}
function clearScreen() {
  res.value = "";
}
function calculer() {
  try {
    res.value = eval(res.value);
  } catch {
    res.value = "ERROR";
  }
}
