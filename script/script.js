const input = document.querySelectorAll("input");
const h6 = document.querySelectorAll("h6");
const h5 = document.querySelector("h5");
const form = document.querySelector("form");

let cont = 0, removeClass, addClass, msg;

form.addEventListener("submit", (el) => {
    el.preventDefault();

    for (let i = 0; i < input.length; i += 1) {
        if (input[i].value == "") {
            h6[i].style.opacity = "1";
            cont = 0;
        } else {
            h6[i].style.opacity = "0";
            cont += 1;
        }
    }

    if (cont === input.length) {
        msg = "Sucesso!";
        removeClass = "fail";
        addClass = "sucess";
        authenticateInputs(h5, removeClass, addClass, msg)
        clearInputs();
    } else {
        msg = "Campos obrigatórios não registrados.";
        removeClass = "sucess";
        addClass = "fail";
        authenticateInputs(h5, removeClass, addClass, msg);
        cont = 0;
    }
})

function clearInputs() {
    for (let i = 0; i < input.length; i += 1) {
        input[i].value = "";
    }
}

function authenticateInputs(element, removeClass, addClass, msg) {
    element.classList.remove(removeClass);
    element.style.opacity = "1";
    element.innerHTML = msg;
    element.classList.add(addClass);
}