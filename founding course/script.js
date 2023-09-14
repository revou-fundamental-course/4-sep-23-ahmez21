function persegi() {
    var tooglepersegi = document.getElementById("optionpersegi");
    if (tooglepersegi.style.display === "block") {
        tooglepersegi.style.display = "none";
    } else {
        tooglepersegi.style.display = "block";
    }
  }
  function hasilhitungpersegi() {
    let sisi = document.getElementById("sisi").value;
    let rumusluaspersegi= "L = S x S";
    let caraluaspersegi = "L = " + sisi + " x " + sisi;
    let luaspersegi = "L = " + sisi * sisi;
    let rumuskelilingpersegi = "K = 4 x S";
    let carakelilingpersegi = "K = 4 " + " x " + sisi;
    let kelilingpersegi = "K =" + 4 * sisi;
    document.getElementById("rumusluaspersegi").innerHTML= rumusluaspersegi;
    document.getElementById("caraluaspersegi").innerHTML= caraluaspersegi;
    document.getElementById("resultluaspersegi").innerHTML= luaspersegi;
    document.getElementById("rumuskelilingpersegi").innerHTML= rumuskelilingpersegi;
    document.getElementById("carakelilingpersegi").innerHTML= carakelilingpersegi;
    document.getElementById("resultkelilingpersegi").innerHTML= kelilingpersegi;
    }
function resetpersegi() {
        document.getElementsById("inputluassection").reset();
    }
function persegipanjang() {
    var tooglepanjang = document.getElementById("optionpersegipanjang");
    if (tooglepanjang.style.display === "block") {
        tooglepanjang.style.display = "none";
    } else {
        tooglepanjang.style.display = "block";
    }
  }
function hasilhitungpersegipanjang() {
    let panjang = document.getElementById("sisi-panjang").value;
    let lebar = document.getElementById("sisi-lebar").value;
    let rumus= "L = P x l"
    let caraluas = "L = " + panjang + "x" + lebar
    let luas = "L = " + panjang * lebar;
    let rumuskeliling = "K = 2 (P+l)"
    let carakeliling = "K = 2 " + "(" + panjang + "+" + lebar + ")"
    let keliling = "K =" + 2 * (parseInt (panjang) + parseInt(lebar));
    document.getElementById("rumusluas").innerHTML= rumus;
    document.getElementById("caraluas").innerHTML= caraluas;
    document.getElementById("resultluaspersegipanjang").innerHTML= luas;
    document.getElementById("rumuskeliling").innerHTML= rumuskeliling;
    document.getElementById("carakeliling").innerHTML= carakeliling;
    document.getElementById("resultkelilingpersegipanjang").innerHTML= keliling;
    }
function resetpersegipanjang() {
        document.getElementsById("inputluassectioN").reset();
    }