function pr() {
    var a = document.getElementById("qty").value;
    var b = document.getElementById("price").value;
    var c = a * b;
    document.getElementById("tot", +c).innerHTML = c;
}