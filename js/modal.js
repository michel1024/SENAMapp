
const modalQR = document.getElementById("modalQR");
const modal2D = document.getElementById("modal2D");
const modal3D = document.getElementById("modal3D");
const modalHorario = document.getElementById("modalHorario");

const btnOpenQR = document.getElementById("btnOpenQR");
const btnOpen2D = document.getElementById("btnOpen2D");
const btnOpen3D = document.getElementById("btnOpen3D");
const btnOpenHorario = document.getElementById("btnOpenHorario");

const btnCloseQR = document.getElementById("btnCloseQR");
const btnClose2D = document.getElementById("btnClose2D");
const btnClose3D = document.getElementById("btnClose3D");
const btnCloseHorario = document.getElementById("btnCloseHorario");

const videoFrame = document.getElementById("videoFrame");
const videoBaseURL = "https://www.youtube.com/embed/Me0Q0hwmmrI";

btnOpenQR.onclick = function () {
    modalQR.style.display = "flex";
}

btnOpen2D.onclick = function () {
    modal2D.style.display = "flex";
}

btnOpen3D.onclick = function () {
    modal3D.style.display = "flex";
    videoFrame.src = videoBaseURL + "?autoplay=1&mute=1";
}

btnOpenHorario.onclick = function () {
    modalHorario.style.display = "flex";
}


btnCloseQR.onclick = function () {
    modalQR.style.display = "none";
}

btnClose2D.onclick = function () {
    modal2D.style.display = "none";
}

btnClose3D.onclick = function () {
    modal3D.style.display = "none";
}

btnCloseHorario.onclick = function () {
    modalHorario.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modalQR) {
        modalQR.style.display = "none";
    }

    if (event.target === modal2D) {
        modal2D.style.display = "none";
    }

    if (event.target === modal3D) {
        modal3D.style.display = "none";
    }

    if (event.target === modalHorario) {
        modalHorario.style.display = "none";
    }
}