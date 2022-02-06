function demTongSoAm(arr) {
  var soAmArr = arr.filter(function (item) {
    return item < 0;
  });
  return soAmArr.length;
}

function demTongSoDuong(arr) {
  var soDuongArr = arr.filter(function (item) {
    return item > 0;
  });
  return soDuongArr.length;
}

function soSanhSoAmDuong() {
  var soSoAm = demTongSoAm(numArr);
  var soSoDuong = demTongSoDuong(numArr);
  var contentHTML = ``;
  if (soSoDuong > soSoAm) {
    contentHTML = `Số dương nhiều hơn số âm`;
  } else if (soSoDuong < soSoAm) {
    contentHTML = `Số âm nhiều hơn số dương`;
  } else {
    contentHTML = `Số số âm bằng số số dương`;
  }
  document.getElementById("pTagSoSanhSoAmDuong").innerText = contentHTML;
}

document
  .getElementById("btnSoSanhSoAmDuong")
  .addEventListener("click", soSanhSoAmDuong);
