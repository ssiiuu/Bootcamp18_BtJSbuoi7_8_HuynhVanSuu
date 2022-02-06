function timSoChanCuoiCung() {
  var soChanCuoiCung = -1;
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] % 2 == 0) {
      soChanCuoiCung = numArr[index];
    }
  }

  document.getElementById(
    "pTagSoChanCuoiCung"
  ).innerText = `Số chẵn cuối cùng trong mảng là : ${soChanCuoiCung}`;
}
document
  .getElementById("btnSoChanCuoiCung")
  .addEventListener("click", timSoChanCuoiCung);
