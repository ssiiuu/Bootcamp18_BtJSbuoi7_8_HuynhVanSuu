function sapXepTang() {
  for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] > numArr[j]) {
        var t = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = t;
      }
    }
  }
  document.getElementById(
    "pTagSapXepTang"
  ).innerText = `Mảng đã sắp xếp tăng dần : ${numArr}`;
}

document.getElementById("btnSapXepTang").addEventListener("click", sapXepTang);
