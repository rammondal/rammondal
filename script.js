const btn = document.getElementById("giftBtn");
const card = document.getElementById("card");
const timer = document.getElementById("timer");

// Birthday Date (15 July 2026)
const birthday = new Date("July 15, 2026 00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        timer.innerHTML = "🎉 Happy Birthday! 🎂";

        return;

    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    timer.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCountdown,1000);

updateCountdown();

btn.onclick = function () {

    card.classList.remove("hidden");

    btn.innerHTML = "🎉 Happy Birthday!";

    // Confetti Explosion
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

}
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function(){

    if(!playing){

        music.play();

        musicBtn.innerHTML="🔊";

        playing=true;

    }else{

        music.pause();

        musicBtn.innerHTML="🎵";

        playing=false;

    }

}
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();