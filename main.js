function inc() {
    document.querySelector("p").classList.remove("remove");
    document.querySelector("h2").classList.remove("remove");
    document.querySelector("p").classList.add("add");
    document.querySelector("h2").classList.add("add");
    }
    function dec() {
    document.querySelector("p").classList.remove("add");
    document.querySelector("h2").classList.remove("add");
    document.querySelector("p").classList.add("remove");
    document.querySelector("h2").classList.add("remove");
    }
document.querySelector(".increase").onclick = inc;
document.querySelector(".decrement").onclick=dec;