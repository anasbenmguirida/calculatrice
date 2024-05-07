// we need a function to write /append the op
const res = document.getElementById("result");
function _append(input) {
  res.value += input;
}
function _clearScreen() {
  res.value = "";
}
function _calculer() {
  try {
    res.value = eval(res.value);
  } catch {
    res.value = "ERROR";
  }
}
