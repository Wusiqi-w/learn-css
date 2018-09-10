var section = document.querySelector('section');
var createBtn = document.querySelector('.create');
var resetBtn = document.querySelector('.reset');


function createBox() {
    var box = document.createElement('div');
    box.textContent = 'This is a box';
    section.appendChild(box);
}

createBtn.onclick = createBox;


resetBtn.onclick = function() {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }
    createBox();
    createBox();
    createBox();
}