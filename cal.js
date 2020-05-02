var currNum = "",
  number = [],
  operator = [],
  displayRes = "",
  oldNum = 0;

setNum = (btn) => {
  var text = btn.textContent;
  currNum += text;
  currNum = parseFloat(currNum);
  // number.push(currNum);
  console.log(currNum);
  document.getElementById("res").innerHTML = currNum;
  document.getElementById("resCenter").innerHTML = currNum;
}

setSign = () => {
  if (currNum) {
    number[number.indexOf(currNum)] = -1 * currNum;
    currNum = number[number.indexOf(-1 * currNum)];
  }
  console.log(currNum);
  console.log(currNum, number);
  document.getElementById("res").innerHTML = currNum;
  document.getElementById("resCenter").innerHTML = currNum;
}

setOp = (btn) => {
  var text = btn.textContent;
  number.push(currNum);
  currNum = "";
  console.log(number);
  operator.push(text);
  console.log(operator);
  document.getElementById("res").innerHTML = operator[operator.length - 1];
}

assign = () => {
  number.push(currNum);
  // number = number.map(changeNum);
  console.log(number);

  for (var i = 0; i < number.length - 1; i++) {
    number[i+1] = compute(number[i], number[i+1], operator[i]);
  }
  currNum = displayRes;
  console.log(currNum);
  console.log(displayRes);
  console.log(number.indexOf(displayRes));
  number = number.slice(number.indexOf(displayRes) +1);
  console.log(number);
  operator = [];
  console.log(operator);
  document.getElementById("res").innerHTML = displayRes;
  document.getElementById("resCenter").innerHTML = displayRes;
}

// changeNum = (value) => parseFloat(value);

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
  // console.log(displayRes);
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



