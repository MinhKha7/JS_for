// Bài 1
document.getElementById("timN").onclick = function () {
  var tong = 0;
  for (var n = 0; tong <= 10000; n++) {
    tong += n;
  }
  document.getElementById("kq-1").innerHTML = n - 1;
};

// Bài 2

document.getElementById("tinhTong").onclick = function () {
  var x = Number(document.getElementById("soX").value);
  var yMax = Number(document.getElementById("soY").value);
  var tong = 0;
  if (yMax < 0 || yMax % 1 !== 0) {
    alert("y phải là số nguyên dương");
  } else {
    for (var y = 1; y <= yMax; y++) {
      tong += x ** y;
    }
  }

  document.getElementById("kq-2").innerHTML = tong;
};

// Bài 3

document.getElementById("tinhGiaiThua").onclick = function () {
  var n = Number(document.getElementById("soN").value);
  var giaiThua = 1;
  if (n < 0 || n % 1 !== 0) {
    alert("Vui lòng nhập số nguyên dương");
    giaiThua = "";
  } else {
    for (var x = 1; x <= n; x++) {
      giaiThua *= x;
    }
  }

  document.getElementById("kq-3").innerHTML = giaiThua;
};

// Bài 4

document.getElementById("inThe").onclick = function () {
  var n = 10;
  var ketQua = "";
  for (divDaIn = 0; divDaIn < 10; divDaIn++) {
    if (divDaIn % 2 === 0) {
      ketQua += `<div class="output bg-primary"></div>`;
    } else {
      ketQua += `<div class="output bg-danger"></div>`;
    }
  }
  document.getElementById("kq-4").innerHTML = ketQua;
};

// Bài 5

document.getElementById("lietKeSoNguyenTo").onclick = function () {
  var n = Number(document.getElementById("soN-2").value);
  var dem = 0;
  var chuoi = "";
  if (n <= 1) {
    alert("Vui lòng nhập số lớn hơn 1");
  } else {
    for (soCanXet = 2; soCanXet <= n; soCanXet++) {
      for (bienKiem = 1; bienKiem <= soCanXet; bienKiem++) {
        if (soCanXet % bienKiem === 0) {
          dem++;
        }
      }
      if (dem == 2) {
        chuoi += `${soCanXet} `;
      }
      dem = 0;
    }
  }

  document.getElementById("kq-5").innerHTML = chuoi;
};
