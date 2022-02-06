function doiViTri() {
  num1 = document.getElementById("number1").value * 1;
  num2 = document.getElementById("number2").value * 1;
  var t;
  if (num1 > numArr.length || num2 > numArr.length) {
    document.getElementById(
      "pTagDoiViTri"
    ).innerText = `Bạn vui lòng nhập chính xác vị trí cần đổi `;
  } else {
    t = numArr[num1];
    numArr[num1] = numArr[num2];
    numArr[num2] = t;
    console.log(numArr);
    document.getElementById(
      "pTagDoiViTri"
    ).innerText = `Mảng hiện tại là: ${numArr}`;
  }
}

document.getElementById("btnDoiViTri").addEventListener("click", doiViTri);
