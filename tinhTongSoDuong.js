var numArr = [];

function themSo() {
  var numvalue = document.getElementById("num").value * 1;
  numArr.push(numvalue);
  // console.log(numArr);
  document.getElementById(
    "pTagXuatMang"
  ).innerHTML = `Mảng hiện tại là: ${numArr}`;
}

// tính tổng số dương trong mảng nhập vào

function tinhTongSoDuong() {
  var tongSoDuong = 0;
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] > 0) {
      tongSoDuong += numArr[index];
    }
  }

  document.getElementById(
    "pTagTongSoDuong"
  ).innerText = `Tổng số dương trong mảng là : ${tongSoDuong}`;
}

document
  .getElementById("btntinhTongSoDuong")
  .addEventListener("click", tinhTongSoDuong);
