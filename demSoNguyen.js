var realNumArr = [];

function demCacSoNguyen() {
  var realNumValue = document.getElementById("realNum").value * 1;
  realNumArr.push(realNumValue);
  console.log(realNumArr);
  var sum = 0;
  for (let index = 0; index < realNumArr.length; index++) {
    if (realNumArr[index] - Math.floor(realNumArr[index]) == 0) {
      sum++;
    }
  }
  document.getElementById(
    "pTagDemSoNguyen"
  ).innerText = `Tổng số nguyên trong mảng là : ${sum}`;
}

document
  .getElementById("btnDemSoNguyen")
  .addEventListener("click", demCacSoNguyen);
