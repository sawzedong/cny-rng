const btn = document.getElementById("setBtn");
const testBtn = document.getElementById("testBtn");

btn.addEventListener("click", () => {
    let lower = document.getElementById("lower").value;
    let upper = document.getElementById("upper").value;
    localStorage.setItem("lower", lower);
    localStorage.setItem("upper", upper);

    updateNumberRange();
});

testBtn.addEventListener("click", () => {
    var audio = new Audio("./firework.mp3");
    audio.play();
});

window.addEventListener("load", updateNumberRange);

function updateNumberRange() {
    document.getElementById("numrange").innerText =
        `Number range currently set to: ${localStorage.getItem("lower")} - ${localStorage.getItem("upper")}`;
}
