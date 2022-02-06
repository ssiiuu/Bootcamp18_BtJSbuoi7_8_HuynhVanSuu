function demTongSoDuong(arr) {
  var soDuongArr = arr.filter(function (item) {
    return item > 0;
  });
  return soDuongArr.length;
}

function demSoDuong() {
  var soSoDuong = demTongSoDuong(numArr);
  document.getElementById(
    "pTagDemSoDuong"
  ).innerText = `Số lượng số dương trong mảng là : ${soSoDuong}`;
}
document.getElementById("btndemSoDuong").addEventListener("click", demSoDuong);
