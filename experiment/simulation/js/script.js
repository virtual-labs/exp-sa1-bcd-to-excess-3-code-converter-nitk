var n = 1;

function AddData() {
  var e = document.getElementById("A").value;
  var f = document.getElementById("B").value;
  var x = document.getElementById("C").value;
  var y = document.getElementById("D").value;
  var a = document.getElementById("W").value;
  var b = document.getElementById("X").value;
  var c = document.getElementById("Y").value;
  var d = document.getElementById("Z").value;
  var s = document.getElementById("S").value;

  if (!e && !f && !x && !y && !a && !b && !c && !d && !s) {
    alert("Enter the value to proceed.");
    return;
  }

  if (s == "") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "1") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "19") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
  }

  if (s == "15") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "12") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "9") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "16") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "3,21" || s == "21,3") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (
    s == "8,9,14" ||
    s == "9,8,14" ||
    s == "9,14,8" ||
    s == "14,8,9" ||
    s == "14,9,8" ||
    s == "8,14,9"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (
    s == "5,18,1" ||
    s == "5,1,18" ||
    s == "18,1,5" ||
    s == "18,5,1" ||
    s == "1,5,18" ||
    s == "1,18,5"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
  }

  if (
    s == "15,22,6" ||
    s == "15,6,22" ||
    s == "6,15,22" ||
    s == "6,22,15" ||
    s == "22,6,15" ||
    s == "22,15,6"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (s == "2,22" || s == "22,2") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  if (
    s == "10,14,7" ||
    s == "10,7,14" ||
    s == "7,14,10" ||
    s == "7,10,14" ||
    s == "14,10,7" ||
    s == "14,7,10"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (s == "10,14" || s == "14,10") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (
    s == "10,14,7" ||
    s == "10,7,14" ||
    s == "7,14,10" ||
    s == "7,10,14" ||
    s == "14,10,7" ||
    s == "14,7,10"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (s == "10,14" || s == "14,10") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (s == "3,21" || s == "21,3") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (
    s == "8,9,14" ||
    s == "9,8,14" ||
    s == "9,14,8" ||
    s == "14,8,9" ||
    s == "14,9,8" ||
    s == "8,14,9"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "0";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "1";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (
    s == "5,18,1" ||
    s == "5,1,18" ||
    s == "18,1,5" ||
    s == "18,5,1" ||
    s == "1,5,18" ||
    s == "1,18,5"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "0";
      c = "0";
      d = "0";
    }
  }
  if (
    s == "15,22,6" ||
    s == "15,6,22" ||
    s == "6,15,22" ||
    s == "6,22,15" ||
    s == "22,6,15" ||
    s == "22,15,6"
  ) {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "1";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
  }
  if (s == "2,22" || s == "22,2") {
    if (e == "0" && f == "0" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "0" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "0" && x == "1" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "0" && x == "1" && y == "1") {
      a = "0";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "0" && y == "0") {
      a = "0";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "0" && f == "1" && x == "1" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "0" && f == "1" && x == "1" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
    if (e == "1" && f == "0" && x == "0" && y == "0") {
      a = "1";
      b = "1";
      c = "0";
      d = "1";
    }
    if (e == "1" && f == "0" && x == "0" && y == "1") {
      a = "1";
      b = "1";
      c = "0";
      d = "0";
    }
  }

  var table = document.getElementById("mytable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(-1);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);

  cell1.innerHTML = n++;
  cell2.innerHTML = e;
  cell3.innerHTML = f;
  cell4.innerHTML = x;
  cell5.innerHTML = y;
  cell6.innerHTML = a;
  cell7.innerHTML = b;
  cell8.innerHTML = c;
  cell9.innerHTML = d;
  cell10.innerHTML = s;
}

function clearForm() {
  document.getElementById("myForm").reset();
}

function pr() {
  window.print();
}
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function checkmyinput() {
  // Get inputfield
  var inputfield = document.getElementById("A");

  // Get value from inputfield
  var inputval = inputfield.value;

  // Remove non numeric input
  var numeric = inputval.replace(/[^0-9]+/, "");

  // Check if input is numeric and even, if not empty field
  if (numeric.length != inputval.length || (numeric != 0 && numeric != 1)) {
    inputfield.value = "";
  }
}

function checkmyinputB() {
  // Get inputfield
  var inputfield = document.getElementById("B");

  // Get value from inputfield
  var inputval = inputfield.value;

  // Remove non numeric input
  var numeric = inputval.replace(/[^0-9]+/, "");

  // Check if input is numeric and even, if not empty field
  if (numeric.length != inputval.length || (numeric != 0 && numeric != 1)) {
    inputfield.value = "";
  }
}

function checkmyinputZ() {
  // Get inputfield
  var inputfield = document.getElementById("Z");

  // Get value from inputfield
  var inputval = inputfield.value;

  // Remove non numeric input
  var numeric = inputval.replace(/[^0-9]+/, "");

  // Check if input is numeric and even, if not empty field
  if (numeric.length != inputval.length || (numeric != 0 && numeric != 1)) {
    inputfield.value = "";
  }
}


// Single validation function for numeric input
function allowOnlyNumeric(event) {
  const inputField = event.target;
  // Replace any non-numeric characters with an empty string
  inputField.value = inputField.value.replace(/[^0-9]/g, "");
}


const taskTitle = document.querySelector(".task-title");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitle.textContent = "Objective";
    // document.getElementById("Results").style.display = "none";
    // document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
    // document.getElementById("Results").style.display = "none";
    // document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
  }
  if (ele.classList.contains("tool-help")) {
    // Hide grid-container and truth table
    document.querySelector(".grid-container").style.display = "none";
    document.querySelector(".simulator-table").style.display = "none";

    // Show instructions
    document.getElementById("instructions").style.display = "block";
    // taskTitle.textContent = "Help";
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    // taskTitle.textContent = "Experiment";
    document.querySelector(".grid-container").style.display = "grid";
    document.querySelector(".simulator-table").style.display = "block";

    // Show instructions
    document.getElementById("instructions").style.display = "none";
  }
}

function help() {
  // Hide grid-container and truth table using display: none
  document.querySelector(".grid-container").style.display = "none";
  document.querySelector(".simulator-table").style.display = "none";

  // Show instructions
  document.getElementById("instructions").style.display = "block";
}

function changeSwitchImageX() {
  var fx = document.getElementById("faultx");
  var imageX = document.getElementById("switchx");

  var inX = document.getElementById("inputx");
  if (inX.src.match("images/switchoff.jpg")) {
    inX.src = "images/switchon.jpg";
  } else {
    inX.src = "images/switchoff.jpg";
  }

  if (fx.value == "No fault" && imageX.src.match("switchon")) {
    imageX.src = "images/switchoff.jpg";
  } else if (fx.value == "No fault") {
    imageX.src = "images/switchon.jpg";
  }
  checkOutputC();
}

function changeFaultX() {
  var buttonx = document.getElementById("faultx");
  var imageX = document.getElementById("switchx");

  if (buttonx.value == "No fault") {
    buttonx.value = "Stuck at 0";
    imageX.src = "images/switchoff.jpg";
  } else if (buttonx.value == "Stuck at 0") {
    buttonx.value = "Stuck at 1";
    imageX.src = "images/switchon.jpg";
  } else buttonx.value = "No fault";
  checkOutputC();
}

function changeSwitchImageY() {
  var fy = document.getElementById("faulty");
  var imageY = document.getElementById("switchy");

  var inY = document.getElementById("inputy");
  if (inY.src.match("images/switchoff.jpg")) {
    inY.src = "images/switchon.jpg";
  } else {
    inY.src = "images/switchoff.jpg";
  }

  if (fy.value == "No fault" && imageY.src.match("switchon")) {
    imageY.src = "images/switchoff.jpg";
  } else if (fy.value == "No fault") {
    imageY.src = "images/switchon.jpg";
  }
  checkOutputC();
}

function changeFaultY() {
  var buttony = document.getElementById("faulty");
  var imageY = document.getElementById("switchy");

  if (buttony.value == "No fault") {
    buttony.value = "Stuck at 0";
    imageY.src = "images/switchoff.jpg";
  } else if (buttony.value == "Stuck at 0") {
    buttony.value = "Stuck at 1";
    imageY.src = "images/switchon.jpg";
  } else buttony.value = "No fault";
  checkOutputC();
}

function changeSwitchImageZ() {
  var fz = document.getElementById("faultz");
  var imageZ = document.getElementById("switchz");

  var inZ = document.getElementById("inputz");
  if (inZ.src.match("images/switchoff.jpg")) {
    inZ.src = "images/switchon.jpg";
  } else {
    inZ.src = "images/switchoff.jpg";
  }

  if (fz.value == "No fault" && imageZ.src.match("switchon")) {
    imageZ.src = "images/switchoff.jpg";
  } else if (fz.value == "No fault") {
    imageZ.src = "images/switchon.jpg";
  }
  checkOutputC();
}

function changeFaultZ() {
  var buttonz = document.getElementById("faultz");
  var imageZ = document.getElementById("switchz");

  if (buttonz.value == "No fault") {
    buttonz.value = "Stuck at 0";
    imageZ.src = "images/switchoff.jpg";
  } else if (buttonz.value == "Stuck at 0") {
    buttonz.value = "Stuck at 1";
    imageZ.src = "images/switchon.jpg";
  } else buttonz.value = "No fault";
  checkOutputC();
}

function changeFaultXor1() {
  var button1 = document.getElementById("faultxor1");

  if (button1.value == "No fault") {
    button1.value = "Stuck at 0";
  } else if (button1.value == "Stuck at 0") {
    button1.value = "Stuck at 1";
  } else button1.value = "No fault";
  checkOutputC();
}

function changeFaultXor2() {
  var button1 = document.getElementById("faultxor2");

  if (button1.value == "No fault") {
    button1.value = "Stuck at 0";
  } else if (button1.value == "Stuck at 0") {
    button1.value = "Stuck at 1";
  } else button1.value = "No fault";
  checkOutputC();
}

function changeImageP() {
  var fp = document.getElementById("faultp");
  var imagep = document.getElementById("switchp");

  var inP = document.getElementById("inputp");
  if (inP.src.match("images/switchoff.jpg")) {
    inP.src = "images/switchon.jpg";
  } else {
    inP.src = "images/switchoff.jpg";
  }

  if (fp.value == "No fault" && imagep.src.match("switchon")) {
    imagep.src = "images/switchoff.jpg";
  } else if (fp.value == "No fault") {
    imagep.src = "images/switchon.jpg";
  }
  checkOutputC();
}
function changeFaultP() {
  var buttonp = document.getElementById("faultp");
  var imagep = document.getElementById("switchp");

  if (buttonp.value == "No fault") {
    buttonp.value = "Stuck at 0";
    imagep.src = "images/switchoff.jpg";
  } else if (buttonp.value == "Stuck at 0") {
    buttonp.value = "Stuck at 1";
    imagep.src = "images/switchon.jpg";
  } else buttonp.value = "No fault";
  checkOutputC();
}

function changeFaultC() {
  var buttonc = document.getElementById("faultc");

  if (buttonc.value == "No fault") {
    buttonc.value = "Stuck at 0";
  } else if (buttonc.value == "Stuck at 0") {
    buttonc.value = "Stuck at 1";
  } else buttonc.value = "No fault";
  checkOutputC();
}

function checkOutputC() {
  var imageX = document.getElementById("switchx");
  var imageY = document.getElementById("switchy");
  var imageZ = document.getElementById("switchz");

  var imageC = document.getElementById("outputC");
  var imageP = document.getElementById("switchp");
  var fc, fxor1, fxor2;
  fc = document.getElementById("faultc");
  fxor1 = document.getElementById("faultxor1");
  fxor2 = document.getElementById("faultxor2");

  //Stuck at Fault for C
  if (fc.value == "Stuck at 0") {
    imageC.src = "images/ledoff.jpg";
    return;
  } else if (fc.value == "Stuck at 1") {
    imageC.src = "images/ledon.jpg";
    return;
  }

  //Stuck at Fault, Xor1 and Xor2
  if (fxor1.value == "No fault" && fxor2.value == "Stuck at 0") {
    if (
      imageX.src.match("images/switchon.jpg") &&
      imageY.src.match("images/switchoff.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else if (
      imageX.src.match("images/switchoff.jpg") &&
      imageY.src.match("images/switchon.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else imageC.src = "images/ledoff.jpg";
    return;
  } else if (fxor1.value == "No fault" && fxor2.value == "Stuck at 1") {
    if (
      imageX.src.match("images/switchon.jpg") &&
      imageY.src.match("images/switchon.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else if (
      imageX.src.match("images/switchoff.jpg") &&
      imageY.src.match("images/switchoff.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else imageC.src = "images/ledoff.jpg";
    return;
  } else if (fxor1.value == "Stuck at 0" && fxor2.value == "No fault") {
    if (
      imageZ.src.match("images/switchon.jpg") &&
      imageP.src.match("images/switchoff.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else if (
      imageZ.src.match("images/switchoff.jpg") &&
      imageP.src.match("images/switchon.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else imageC.src = "images/ledoff.jpg";
    return;
  } else if (fxor1.value == "Stuck at 0" && fxor2.value == "Stuck at 0") {
    imageC.src = "images/ledoff.jpg";
    return;
  } else if (fxor1.value == "Stuck at 0" && fxor2.value == "Stuck at 1") {
    imageC.src = "images/ledon.jpg";
    return;
  } else if (fxor1.value == "Stuck at 1" && fxor2.value == "No fault") {
    if (
      imageZ.src.match("images/switchoff.jpg") &&
      imageP.src.match("images/switchoff.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else if (
      imageZ.src.match("images/switchon.jpg") &&
      imageP.src.match("images/switchon.jpg")
    )
      imageC.src = "images/ledon.jpg";
    else imageC.src = "images/ledoff.jpg";
    return;
  } else if (fxor1.value == "Stuck at 1" && fxor2.value == "Stuck at 0") {
    imageC.src = "images/ledon.jpg";
    return;
  } else if (fxor1.value == "Stuck at 1" && fxor2.value == "Stuck at 1") {
    imageC.src = "images/ledoff.jpg";
    return;
  }

  //no faults at XOR lines
  if (imageP.src.match("images/switchon.jpg")) {
    if (
      imageX.src.match("images/switchoff") &&
      imageY.src.match("images/switchoff") &&
      imageZ.src.match("images/switchoff")
    ) {
      imageC.src = "images/ledon.jpg";
    } else if (
      imageX.src.match("images/switchoff") &&
      imageY.src.match("images/switchon") &&
      imageZ.src.match("images/switchon")
    ) {
      imageC.src = "images/ledon.jpg";
    } else if (
      imageX.src.match("images/switchon") &&
      imageY.src.match("images/switchoff") &&
      imageZ.src.match("images/switchon")
    ) {
      imageC.src = "images/ledon.jpg";
    } else if (
      imageX.src.match("images/switchon") &&
      imageY.src.match("images/switchon") &&
      imageZ.src.match("images/switchoff")
    ) {
      imageC.src = "images/ledon.jpg";
    } else {
      imageC.src = "images/ledoff.jpg";
    }
  } //P is OFF
  else {
    if (
      imageX.src.match("images/switchoff") &&
      imageY.src.match("images/switchoff") &&
      imageZ.src.match("images/switchoff")
    ) {
      imageC.src = "images/ledoff.jpg";
    } else if (
      imageX.src.match("images/switchoff") &&
      imageY.src.match("images/switchon") &&
      imageZ.src.match("images/switchon")
    ) {
      imageC.src = "images/ledoff.jpg";
    } else if (
      imageX.src.match("images/switchon") &&
      imageY.src.match("images/switchoff") &&
      imageZ.src.match("images/switchon")
    ) {
      imageC.src = "images/ledoff.jpg";
    } else if (
      imageX.src.match("images/switchon") &&
      imageY.src.match("images/switchon") &&
      imageZ.src.match("images/switchoff")
    ) {
      imageC.src = "images/ledoff.jpg";
    } else {
      imageC.src = "images/ledon.jpg";
    }
  }
}

function resetTable() {
  var bodyRef = document
    .getElementById("output")
    .getElementsByTagName("tbody")[0];
  bodyRef.innerHTML = "";
}

function addToTable() {
  var table = document
    .getElementById("output")
    .getElementsByTagName("tbody")[0];
  var row = table.insertRow();
  var ix, iy, iz, ip, ic;
  ix = document.getElementById("inputx");
  iy = document.getElementById("inputy");
  iz = document.getElementById("inputz");
  ip = document.getElementById("inputp");
  ic = document.getElementById("outputC");

  var x, y, z, p, c, count;

  count = 0;
  if (ix.src.match("images/switchon.jpg")) {
    x = 1;
    count += 1;
  } else x = 0;

  if (iy.src.match("images/switchon.jpg")) {
    y = 1;
    count += 1;
  } else y = 0;

  if (iz.src.match("images/switchon.jpg")) {
    z = 1;
    count += 1;
  } else z = 0;

  if (ip.src.match("images/switchon.jpg")) {
    p = 1;
    count += 1;
  } else p = 0;

  if (ic.src.match("images/ledon.jpg")) c = 1;
  else c = 0;

  var expectedOutput = 0;
  if (count % 2) {
    expectedOutput = 1;
  }

  var c0 = document.createElement("td");
  c0.style.width = "50px";
  c0.innerHTML = x;
  row.appendChild(c0);

  var c1 = document.createElement("td");
  c1.style.width = "50px";
  c1.innerHTML = y;
  row.appendChild(c1);

  var c2 = document.createElement("td");
  c2.style.width = "50px";
  c2.innerHTML = z;
  row.appendChild(c2);

  var c3 = document.createElement("td");
  c3.style.width = "50px";
  c3.innerHTML = p;
  row.appendChild(c3);

  var c4 = document.createElement("td");
  c4.style.width = "140px";
  c4.innerHTML = c;
  row.appendChild(c4);

  var c5 = document.createElement("td");
  c5.style.width = "140px";
  c5.innerHTML = expectedOutput;
  row.appendChild(c5);

  if (expectedOutput == c) row.style.backgroundColor = "#A6ECA8";
  else row.style.backgroundColor = "#FFCCCB";
}

function Refresh() {
  window.location = window.location.href;
}

let lastClickedButton = null; // Variable to store the last clicked button

function whereStuckAt(e) {
  const elementToHide = document.getElementById(stuckAt); // Element to hide
  const newStuckAtValue = e.dataset.value; // New `stuckAt` value from button

  // Reset the color of the previously clicked button
  if (lastClickedButton && lastClickedButton !== e) {
    lastClickedButton.style.backgroundColor = "#fff"; // Default color
  }

  if (stuckAt == newStuckAtValue) {
    if (elementToHide) {
      elementToHide.style.visibility = "hidden";
    }
    stuckAt = 0;
    e.style.backgroundColor = "#fff"; // Set color to default when deselected
  } else {
    if (elementToHide) {
      elementToHide.style.visibility = "hidden";
    }
    stuckAt = newStuckAtValue;
    const elementToShow = document.getElementById(stuckAt);
    if (elementToShow) {
      elementToShow.style.visibility = "visible";
    }
    e.style.backgroundColor = "#ff6600"; // Highlight color for selected button
  }

  // Store the currently clicked button as the last clicked button
  lastClickedButton = e;

  // Generate the output and turn on the bulb
  output = answer(
    switches[0].dataset.value,
    switches[1].dataset.value,
    switches[2].dataset.value,
    stuckAt
  );
  turnBulb(output);
}

// funtion to turn switch on and off
function turnSwitch(e) {
  e.src = e.src.includes("off")
    ? "./images/switchon.png"
    : "./images/switchoff.png";
  e.dataset.value = e.dataset.value == 0 ? 1 : 0;
  output = answer(
    switches[0].dataset.value,
    switches[1].dataset.value,
    switches[2].dataset.value,
    stuckAt
  );
  turnBulb(output);
}

// function to turn bulb on and off based on inputs
function turnBulb(output) {
  let bulb = document.querySelector(".bulb");
  bulb.src = output == 0 ? "./images/offg.png" : "./images/ong.png";
}

function answer(A, B, C, stuckAt) {
  if (stuckAt == "0") {
    return result[A][B][C];
  } else if (stuckAt == "1") {
    A = 0;
    return result[A][B][C];
  } else if (stuckAt == "2") {
    A = 1;
    return result[A][B][C];
  } else if (stuckAt == "3") {
    B = 0;
    return result[B][A][C];
  } else if (stuckAt == "4") {
    B = 1;
    return result[B][A][C];
  } else if (stuckAt == "5") {
    C = 0;
    return result[C][A][B];
  } else if (stuckAt == "6") {
    C = 1;
    return result[C][A][B];
  } else if (stuckAt == "7") {
    return C;
  } else if (stuckAt == "8") {
    return C == 0 ? 1 : 0;
  } else if (stuckAt == "9") {
    return 0;
  } else if (stuckAt == "10") {
    return 1;
  }
  return "error";
}

// function to add new row to table
function addResult() {
  let ogoutput =
    result[switches[0].dataset.value][switches[1].dataset.value][
      switches[2].dataset.value
    ];
  let html = `
                     <tr style="background-color:${
                       ogoutput == output ? "#96ff96" : "#f88570"
                     }">
                        <td class="tg-nrix">${switches[0].dataset.value}</td>
                        <td class="tg-nrix">${switches[1].dataset.value}</td>
                        <td class="tg-nrix">${switches[2].dataset.value}</td>
                        <td class="tg-nrix">${
                          stuckAt == 0
                            ? "N/A"
                            : stuckAtButton[stuckAt - 1].innerHTML
                        }</td>
                        <td class="tg-nrix">${
                          result[switches[0].dataset.value][
                            switches[1].dataset.value
                          ][switches[2].dataset.value]
                        }</td>
                        <td class="tg-nrix">${output}</td>
                    </tr>
                    `;
  document.getElementById("insert-here").innerHTML += html;
}

function fillTable(stuckAt) {
  let inner = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        inner += `
                <tr>
                <td class="tg-nrix">${i}</td>
                <td class="tg-nrix">${j}</td>
                <td class="tg-nrix">${k}</td>
                <td class="tg-nrix">${stuckAtarray[stuckAt]}</td>
                <td class="tg-nrix">${result[i][j][k]}</td>
                <td class="tg-nrix">${answer(i, j, k, stuckAt)}</td>
            </tr>`;
      }
    }
  }
  let html = `<table class="tg">
        <thead>
            <tr>
                <th class="tg-b7zx" colspan="3">Input</th>
                <th class="tg-ogub" rowspan="2">Fault</th>
                <th class="tg-ogub" rowspan="2">Output <br>(without Fault)</th>
                <th class="tg-ogub" rowspan="2">Output <br>(with Fault)</th>
            </tr>
            <tr>
                <th class="tg-b7zx">X</th>
                <th class="tg-b7zx">Y</th>
                <th class="tg-b7zx">Z</th>
            </tr>
        </thead>
        <tbody id="insert-here">
            ${inner}
        </tbody>
    </table>`;
  document.getElementById("table-here").innerHTML = html;
}
