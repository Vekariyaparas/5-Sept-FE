var myvar;

function load() {
    myvar = setTimeout("mywebside()", 2000);
}

function mywebside() {
    document.getElementById("loader").style = "display:none;"
    document.getElementById("maindiv").style = "display:block;"
}