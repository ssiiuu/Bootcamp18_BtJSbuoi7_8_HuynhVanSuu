function timSoNhoNhat() {
  var minNum = numArr[0];
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] < minNum) {
      minNum = numArr[index];
    }
  }
  document.getElementById(
    "pTagSoNhoNhat"
  ).innerText = `Số nhỏ nhất trong mảng là : ${minNum}`;
}
document.getElementById("btnSoNhoNhat").addEventListener("click", timSoNhoNhat);
