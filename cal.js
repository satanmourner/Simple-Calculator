var currNum = "",
  oldNum = "",
  operator = "",
  displayRes = "";

setNum = (btn) => {
  var text = btn.textContent;
  currNum += text;
  document.getElementById("res").innerHTML = currNum;
  document.getElementById("resCenter").innerHTML = currNum.substr(-1);
}

setSign = () => {
  if (currNum) { currNum = -1 * currNum; }
  document.getElementById("res").innerHTML = currNum;
  document.getElementById("resCenter").innerHTML = currNum;
}

setOp = (btn) => {
  var text = btn.textContent;
  oldNum = currNum;
  currNum = "";
  operator = text;
  document.getElementById("res").innerHTML = operator;
}

assign = () => {
  currNum = parseFloat(currNum);
  oldNum = parseFloat(oldNum);

  console.log(currNum, oldNum, operator);
  switch (operator) {
    case "+":
      displayRes = oldNum + currNum;
      break;
    case "-":
      displayRes = oldNum - currNum;
      break;
    case "x":
      displayRes = oldNum * currNum;
      break;
    case "÷":
      displayRes = oldNum / currNum;
      break;
    case "%":
      displayRes = oldNum % currNum;
      break;
    default:
      displayRes = "";
  }
  currNum = displayRes;
  document.getElementById("res").innerHTML = displayRes;
  document.getElementById("resCenter").innerHTML = displayRes;
}

clearing = () => {
  oldNum = "";
  currNum = "";
  displayRes = "";
  document.getElementById("res").innerHTML = displayRes;
  document.getElementById("resCenter").innerHTML = displayRes;
}

$(".btnGrid").click(() => {
  new Audio("audio/button-3.mp3").play();
});

$(".btnGrid").click(() => {
  $target = $('#resCenter');
  $target.removeClass('anime');
  setTimeout("$target.addClass('anime');", 100);
});
