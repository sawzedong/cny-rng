const scrollEl = document.getElementById("scroll");
const numberEl = document.getElementById("number");
const btn = document.getElementById("drawBtn");
const closebtn = document.getElementById("closeBtn");
const rollerRight = document.getElementsByClassName("right")[0];
const rollerLeft = document.getElementsByClassName("left")[0];

function randomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", () => {
    isScrollOpen = true;

    btn.disabled = true;
    closebtn.disabled = true;

    const lower = parseInt(localStorage.getItem("lower"));
    const upper = parseInt(localStorage.getItem("upper"));

    const num = randomNumber(lower, upper);
    numberEl.textContent = num;

    scrollEl.classList.add("open");
    rollerRight.classList.add("open");
    rollerLeft.classList.add("open");

    setTimeout(() => {
        document.getElementById("drawBtn").classList.add("dnone");
        document.getElementById("closeBtn").classList.remove("dnone");
        numberEl.classList.add("fast");

        fireworks = document.getElementsByClassName("firework");
        for (let i = 0; i < 3; i++) {
            fireworks[i].classList.add("start");
            fireworks[i].classList.remove("dnone");
        }
    }, 810);

    setTimeout(() => {
        btn.disabled = false;
        closebtn.disabled = false;
    }, 1600);
});

closeBtn.addEventListener("click", () => {
    btn.disabled = true;
    closebtn.disabled = true;

    scrollEl.classList.remove("open");
    rollerRight.classList.remove("open");
    rollerLeft.classList.remove("open");
    numberEl.textContent = "?";

    setTimeout(() => {
        document.getElementById("closeBtn").classList.add("dnone");
        document.getElementById("drawBtn").classList.remove("dnone");
        numberEl.classList.remove("fast");

        fireworks = document.getElementsByClassName("firework");
        for (let i = 0; i < 3; i++) {
            fireworks[i].classList.remove("start");
            fireworks[i].classList.add("dnone");
        }
    }, 810);

    setTimeout(() => {
        btn.disabled = false;
        closebtn.disabled = false;
    }, 1600);
});
