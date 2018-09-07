var one = document.querySelector('.one');
var two = document.querySelector('.two');


function outputWH(box) {
    var width = box.offsetWidth;
    var height = box.offsetHeight;
    box.textContent = 'Width: '+ width + 'px, Height' + height + 'px.';
}

outputWH(one);
outputWH(two);