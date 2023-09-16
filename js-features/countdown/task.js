// 1 задание

let timer = document.getElementById("timer");

function count() {

    setTimeout(() => {


        if (timer.textContent !== "0") {

            timer.textContent = timer.textContent - 1;
            count();

        } else if (timer.textContent == 0) {

            window.location = `file.sc2replay`;
            return alert(`Вы победили в конкурсе!`);

        }
    }, 1000)
}

count()


