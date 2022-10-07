const bassElement = document.querySelector(".bass-drum");
const crashElement = document.querySelector(".crash");
const floortomElement = document.querySelector(".floor-tom");
const hihatElement = document.querySelector(".hi-hat");
const hightomElement = document.querySelector(".high-tom");
const mediumtomElement = document.querySelector(".medium-tom");
const rideElement = document.querySelector(".ride");
const snareElement = document.querySelector(".snare");
const cool = document.querySelector("#cool");
const funky = document.querySelector("#funky");
const fruity = document.querySelector("#fruity");
const reset = document.querySelector("#reset");

let colorChange = document.querySelectorAll(".colorChange");
bassElement.addEventListener("click", () => {
    const bass = new Audio();
    bass.src = "assets/bass-drum.wav";
    bass.play();
})
crashElement.addEventListener("click", () => {
    const crash = new Audio();
    crash.src = "assets/crash.wav";
    crash.play();
})
floortomElement.addEventListener("click", () => {
    const floortom = new Audio();
    floortom.src = "assets/floor-tom.wav";
    floortom.play();
})
hihatElement.addEventListener("click", () => {
    const hihat = new Audio();
    hihat.src = "assets/hi-hat.wav";
    hihat.play();
})
hightomElement.addEventListener("click", () => {
    const hightom = new Audio();
    hightom.src = "assets/high-tom.wav";
    hightom.play();
})
mediumtomElement.addEventListener("click", () => {
    const mediumtom = new Audio();
    mediumtom.src = "assets/medium-tom.wav";
    mediumtom.play();
})
rideElement.addEventListener("click", () => {
    const ride = new Audio();
    ride.src = "assets/ride.wav";
    ride.play();
})
snareElement.addEventListener("click", () => {
    const snare = new Audio();
    snare.src = "assets/snare.wav";
    snare.play();
})

cool.addEventListener("click", () => {
    
    document.body.style.backgroundImage = "url(assets/drumkit-blue.png)";
    for(let i=0; i<colorChange.length; i++) {
        colorChange[i].addEventListener("mouseover", () => {
            colorChange[i].style.webkitBoxShadow = "0px 0px 33px 26px rgba(45,27,246,0.86)";
            colorChange[i].style.mozBoxShadow = "0px 0px 33px 26px rgba(45,27,246,0.86)";
            colorChange[i].style.boxShadow = "0px 0px 33px 26px rgba(45,27,246,0.86)";
        })
        colorChange[i].addEventListener("mouseout", () => {
            colorChange[i].style.webkitBoxShadow = "";
            colorChange[i].style.mozBoxShadow = "";
            colorChange[i].style.boxShadow = "";
        })
    }
});

funky.addEventListener("click", () => {
    
    document.body.style.backgroundImage = "url(assets/drumkit-green.png)";
    for(let i=0; i<colorChange.length; i++) {
        colorChange[i].addEventListener("mouseover", () => {
            colorChange[i].style.webkitBoxShadow = "0px 0px 33px 26px rgba(147,244,80,0.86)";
            colorChange[i].style.mozBoxShadow = "0px 0px 33px 26px rgba(147,244,80,0.86)";
            colorChange[i].style.boxShadow = "0px 0px 33px 26px rgba(147,244,80,0.86)";
        })
        colorChange[i].addEventListener("mouseout", () => {
            colorChange[i].style.webkitBoxShadow = "";
            colorChange[i].style.mozBoxShadow = "";
            colorChange[i].style.boxShadow = "";
        })
    }
});
fruity.addEventListener("click", () => {
    
    document.body.style.backgroundImage = "url(assets/drumkit-pink.png)";
    for(let i=0; i<colorChange.length; i++) {
        colorChange[i].addEventListener("mouseover", () => {
            colorChange[i].style.webkitBoxShadow = "0px 0px 33px 26px rgba(218,64,177,0.86)";
            colorChange[i].style.mozBoxShadow = "0px 0px 33px 26px rgba(218,64,177,0.86)";
            colorChange[i].style.boxShadow = "0px 0px 33px 26px rgba(218,64,177,0.86)";
        })
        colorChange[i].addEventListener("mouseout", () => {
            colorChange[i].style.webkitBoxShadow = "";
            colorChange[i].style.mozBoxShadow = "";
            colorChange[i].style.boxShadow = "";
        })
    }
});
reset.addEventListener("click", () => {
    
    document.body.style.backgroundImage = "url(assets/drumkit-white.png)";
    for(let i=0; i<colorChange.length; i++) {
        colorChange[i].addEventListener("mouseover", () => {
            colorChange[i].style.webkitBoxShadow = "0px 0px 33px 26px rgba(255,255,255,0.86)";
            colorChange[i].style.mozBoxShadow = "0px 0px 33px 26px rgba(255,255,255,0.86)";
            colorChange[i].style.boxShadow = "0px 0px 33px 26px rgba(255,255,255,0.86)";
        })
        colorChange[i].addEventListener("mouseout", () => {
            colorChange[i].style.webkitBoxShadow = "";
            colorChange[i].style.mozBoxShadow = "";
            colorChange[i].style.boxShadow = "";
        })
    }
});




