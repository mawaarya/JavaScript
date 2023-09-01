//let a = 2;
//let b = 3;
//let c = a + b;
//console.log(c);

let a = 2;
let b = 3;
let c = 4;
let d = 5;
let e = ((b + a) * c) / (a * b * b) + (a - d);
//3+2*4/2*3*3+2=5
console.log(e);

let x = 100;
let y = 80;
if (x > y) {
    console.log("lulus");
} else {
    console.log("tidak lulus");
}

let bulan = 2;
let tanggal = 20;
let zodiak = "belum dibuat "
if (bulan == 1) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "aquarius";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "taurus";
    }
}
if (bulan == 2) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "havenu";
    }
    if (tanggal > 19 && tanggal < 30) {
        zodiak = "syalom"
    }
}
if (bulan == 3) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "havenu";
    }
    if (tanggal > 19 && tanggal < 30) {
        zodiak = "syalom"
    }
}
if (bulan == 4) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "hewani";
    }
    if (tanggal > 19 && tanggal < 30) {
        zodiak = "libra"
    }
}
if (bulan == 5) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "tahu"
    }
    if (tanggal > 19 && tanggal < 30) {
        zodiak = "virgo"
    }
}
if (bulan == 6) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "scorpion"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "upin"
    }
}
if (bulan == 7) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "mail"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "susanti"
    }
}
if (bulan == 8) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "ipin"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "devi"
    }
}
if (bulan == 9) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "abah"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "atok"
    }
}
if (bulan == 10) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "uncle"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "ehsan"
    }
}
if (bulan == 11) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "jarjit"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "ah tong"
    }
}
if (bulan == 12) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "fizi"
    }
    if (tanggal < 19 && tanggal < 30) {
        zodiak = "ijat"
    }
}
console.log(zodiak);