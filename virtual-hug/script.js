let progress = 0;

const loader = setInterval(() => {

    progress++;

    document.getElementById("bar")
        .style.width = progress + "%";

    document.getElementById("percent")
        .innerText = progress + "%";

    if (progress >= 100) {

        clearInterval(loader);

        document.getElementById(
            "loadingScreen"
        ).style.display = "none";

        document.getElementById(
            "mainContent"
        ).style.display = "block";

        startStory();
    }

}, 30);

function showScene(id) {

    document
        .querySelectorAll(".scene")
        .forEach(scene =>
            scene.classList.remove("active")
        );

    document
        .getElementById(id)
        .classList.add("active");
}

function startStory() {

    showScene("scene1");

    setTimeout(() => {

        showScene("scene2");

    }, 3000);

    setTimeout(() => {

        showScene("scene3");

        createHearts();

    }, 6000);

    setTimeout(() => {

        typeMessage();

    }, 8500);
}

function typeMessage() {

const text =

`Helloooo!! Ishanaa!!

Thank you for everything.

Every moment with you feels special.

Your self doubts may never disappear completely,
but neither will the reminders that you're amazing.

Everyone makes mistakes.
We both probably made a lot.
It's okay.
We move forward.

One more thing...

leave this thought of cutting off.

The way this friendship has been...
needs no change.

No stepping out of it.

You're stuck with me forever. 😌

Luvv Uhhh ❤️`;

let i = 0;

const target =
document.getElementById("typedText");

const timer = setInterval(() => {

    target.innerHTML += text[i];

    i++;

    if(i >= text.length){

        clearInterval(timer);
    }

}, 35);
}

function createHearts(){

    setInterval(()=>{

        let heart =
        document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=
        Math.random()*100+"vw";

        heart.style.fontSize=
        (20+Math.random()*20)+"px";

        heart.style.animationDuration=
        (5+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },9000);

    },250);
}

function createPetals(){

    setInterval(()=>{

        let petal =
        document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=
        Math.random()*100+"vw";

        petal.style.fontSize=
        (20+Math.random()*15)+"px";

        petal.style.animationDuration=
        (6+Math.random()*5)+"s";

        document.body.appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },12000);

    },350);
}

createPetals();

document
.getElementById("musicBtn")
.onclick = () => {

    document
    .getElementById("music")
    .play();
};