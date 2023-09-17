




let id;


for (i = 1; i < 10; i++) {
    id = `hole` + i;
    function gethole(index) {
        let holeHasMole;

        holeHasMole = document.getElementById(index);
        holeHasMole.onclick = function () {
            if (holeHasMole.classList.contains('hole_has-mole')) {

                let dead = document.getElementById(`dead`);
                dead.textContent = Number(dead.textContent) + 1;

                if (dead.textContent == 9) {
                    alert(`win!`)
                    dead.textContent = 0;
                    lost.textContent = 0;
                }

            } else {

                let lost = document.getElementById(`lost`);
                lost.textContent = Number(lost.textContent) + 1;

                if (lost.textContent == 5) {
                    console.log(holeHasMole, id);
                    alert(`lose...`)
                    lost.textContent = 0;
                    dead.textContent = 0;
                }
                
            }
        }

    }

    gethole(id);
}





