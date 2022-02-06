function timSoDuongNhoNhat() {
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] > 0) {
      var soDuongNhoNhat = numArr[index];
      break;
    }
  }
  if (soDuongNhoNhat !== 0) {
    for (let index = 0; index < numArr.length; index++) {
      if (numArr[index] < soDuongNhoNhat && numArr[index] > 0) {
        soDuongNhoNhat = numArr[index];
      }
    }
  }
  document.getElementById(
    "pTagSoDuongNhoNhat"
  ).innerText = `Số dương nhỏ nhất trong mảng là : ${soDuongNhoNhat}`;
}
document
  .getElementById("btnSoDuongNhoNhat")
  .addEventListener("click", timSoDuongNhoNhat);
