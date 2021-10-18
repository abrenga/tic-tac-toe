btns = document.querySelectorAll(".box");


function inserisciLaX(btn) {
    btn.textContent = "X";

}

function inserisciLaO(btn) {
    btn.textContent = "O";

}


btns.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log(btn)
        if(btn.textContent)

    }
    )
});
