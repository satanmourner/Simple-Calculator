var currNum = "";
 oldNum = "",
 number = [],
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
  number.push(currNum);
  currNum = "";
  operator = text;
  document.getElementById("res").innerHTML = operator;
}

assign = () => {
  number.push(currNum);
  number = number.map(changeNum);

  for (var i = 0; i < (number.length - 1); i++) {
    currNum = compute(number[i], number[i + 1], operator[i]);
    displayRes = currNum;
  }
  number.splice(0, 2);
  document.getElementById("res").innerHTML = displayRes;
  document.getElementById("resCenter").innerHTML = displayRes;
}

changeNum = (value) => parseFloat(value);

compute = (oldNum, currNum, operator) => {
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
  if (!currNum || !oldNum) { displayRes = ""; }
  return displayRes;
}

clearing = () => {
  oldNum = "";
  currNum = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("resCenter").innerHTML = "";
}

$(".btnGrid").click(() => {
  new Audio("audio/button-3.mp3").play();
})

$(".btnGrid").click(() => {
  $target = $('#resCenter');
  $target.removeClass('anime');
  setTimeout("$target.addClass('anime');", 100);
});

