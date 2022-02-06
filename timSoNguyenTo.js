function kiemTraSNT(number) {
  if (number < 2) {
    return 0;
  }
  for (let index = 0; index < number - 1; index++) {
    if (number % index == 0) {
      return 0;
    } else {
      return 1;
    }
  }
}

function timSoNguyenTo() {
  for (let index = 0; index < numArr.length; index++) {
    if (kiemTraSNT(numArr[index]) == 1) {
      var soNguyenToDauTien = numArr[index];
      break;
    } else {
      soNguyenToDauTien = -1;
    }
  }
  document.getElementById(
    "pTagTimSoNguyenTo"
  ).innerText = `Số nguyên tố đầu tiên trong mảng là : ${soNguyenToDauTien}`;
}

document
  .getElementById("btnTimSoNguyenTo")
  .addEventListener("click", timSoNguyenTo);
