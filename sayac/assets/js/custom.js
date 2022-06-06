
var sayac = 0;
var sayi = document.getElementById("sayi");

var t;
function arttir() {
    t = setInterval(function () {
        sayac += 1;
        sayi.innerHTML = sayac;
    }, 1000);
    sayi.classList.remove("color");
}

function azalt() {
    t = setInterval(function () {
        sayac -= 1;
        sayi.innerHTML = sayac;
    }, 1000);
    sayi.classList.remove("color");
}

function durdur(){
    clearInterval(t);
    sayi.classList.add("color");
}
