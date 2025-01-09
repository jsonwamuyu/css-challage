window.onresize = screen;
window.onload = screen;

function screen() {
    myLength = window.innerWidth;
    document.getElementById('mytext').innerHTML = "Width : " + myLength;
    document.getElementsByClassName('mytexttwo')
}