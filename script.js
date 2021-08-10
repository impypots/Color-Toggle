let pinkufoclick = document.getElementById("circlepink1");
let circlepink2 = document.getElementById("circlepink2");
let bluerocketclick = document.getElementById("circleblue1");
let circleblue2 = document.getElementById("circleblue2");
let pinkufo = document.getElementById("pinkufo");
let bluerocket = document.getElementById("bluerocket");
let title = document.getElementById("title");

pinkufoclick.addEventListener("click", ()=> {
    if (pinkufo.style.filter="contrast(0%)") {
        pinkufo.style.filter="contrast(100%)"
        bluerocket.style.filter="contrast(0%)"
        pinkufoclick.style.background="#ff6969ff"
        circlepink2.style.background="#ff3a3aff"
        bluerocketclick.style.background="#ffcacaff"
        circleblue2.style.background="#ffdadaff"
        document.body.style.background="#ffaaaaff"
        title.style.color = "white"
        title.style.background = "black"
    }
});

bluerocketclick.addEventListener("click", ()=> {
    if (bluerocket.style.filter="contrast(0%)") {
        bluerocket.style.filter="contrast(100%)"
        pinkufo.style.filter="contrast(0%)"
        bluerocketclick.style.background = "#6cc3ecff"
        circleblue2.style.background = "#3fb1e6ff"
        pinkufoclick.style.background = "#9dd7f3ff"
        circlepink2.style.background = "#dbf0fbff"
        document.body.style.background = "#89cff0ff"
        title.style.color = "black"
        title.style.background = "white"
    }
});

