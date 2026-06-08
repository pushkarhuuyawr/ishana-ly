const startBtn = document.getElementById("startBtn");
const overlay = document.getElementById("overlay");
const card = document.getElementById("card");
const message = document.getElementById("message");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    overlay.style.display = "none";

    card.classList.add("show");

    music.play().catch(()=>{});

    document.body.classList.add("hug");

    createHearts();

    setTimeout(()=>{
        card.classList.add("squeeze");
    },2500);

    setTimeout(()=>{
        message.classList.add("show");
    },5000);
});

function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.className = "heartParticle";
        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random()*window.innerWidth+"px";

        heart.style.bottom = "0px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    },200);
}