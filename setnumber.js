const btn = document.getElementById("setBtn");

btn.addEventListener("click", () => {
    let lower = document.getElementById("lower").value;
    let upper = document.getElementById("upper").value;
    localStorage.setItem("lower", lower);
    localStorage.setItem("upper", upper);

    updateNumberRange();
});

window.addEventListener("load", updateNumberRange);

function updateNumberRange() {
    document.getElementById("numrange").innerText =
        `Number range currently set to: ${localStorage.getItem("lower")} - ${localStorage.getItem("upper")}`;
}
