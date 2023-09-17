// 2 задание

let cookie = document.getElementById(`cookie`);
let clickCounter = document.getElementById(`clicker__counter`);
let size = 0;


function countByClick() {

    if (size == 0) {

        size++;
        cookie.width = 300;
        cookie.height = 300;
        clickCounter.textContent++;

    } else if (size == 1) {

        size--;
        cookie.width = 200;
        cookie.height = 200;
        clickCounter.textContent++;
        
    }
}

cookie.onclick = countByClick;

