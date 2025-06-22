function addVal(val) {
  document.getElementById("display").value += val;
}

function Clear() {
  document.getElementById("display").value = "";
}

function calc() {
  try {
    const expression = document.getElementById("display").value;
    const result = Function('"use strict";return (' + expression + ')')();
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
    setTimeout(Clear, 1500); 
  }
}
