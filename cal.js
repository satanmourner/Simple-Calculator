var currNum = "",
  number = [],
  operator = [],
  displayRes = "";

setNum = (btn) => {
  var text = btn.textContent;
  currNum += text;
  document.getElementById("res").innerHTML = currNum;
  document.getElementById("resCenter").innerHTML = currNum;
}

setSign = () => {
  if (currNum) {
    number[number.indexOf(currNum)] = -1 * currNum;
    currNum = number[number.indexOf(-1 * currNum)];
  }
  document.getElementById("res").innerHTML = currNum;
  document.getElementById("resCenter").innerHTML = currNum;
}

setOp = (btn) => {
  var text = btn.textContent;
  if (!currNum) { currNum = 0; }
  number.push(currNum);
  currNum = "";
  operator.push(text);
  document.getElementById("res").innerHTML = operator[operator.length - 1];
}

setFloat = () => {
  currNum = currNum + ".";
}

assign = () => {
  if (!currNum) { currNum = 0; }
  number.push(currNum);
  number = number.map(changeNum);

  if (operator.length < 1) { displayRes = currNum; }

  for (var i = 0; i < number.length - 1; i++) {
    number[i + 1] = compute(number[i], number[i + 1], operator[i]);
  }

  currNum = displayRes;
  number = []; //NOT HAVE MEMORY
  operator = [];
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

  if (!oldNum && !currNum) { displayRes = ""; }

  return displayRes;
}

clearing = () => {
  oldNum = "";
  currNum = "";
  number = [];
  operator = [];
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



