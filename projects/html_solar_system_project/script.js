// Date: 20-21 January, 2024
// Name: Anson Mah

// Start of Colonise Functions
function suncolonise() {
    var random = Math.floor(Math.random()*2)+1;
    if (random==1) {
        const div=document.getElementById("sun");
        div.style.backgroundImage="url('images/colonies/sun.png')";
    }
    else {
        const div=document.getElementById("sun");
        div.style.backgroundImage="url('images/colonies/niue.png')";
    }
}

function mercurycolonise() {
    const div=document.getElementById("mercury");
    div.style.backgroundImage="url('images/colonies/mercury.png')";
}

function venuscolonise() {
    const div=document.getElementById("venus");
    div.style.backgroundImage="url('images/colonies/venus.png')";
}

function earthcolonise() {
    const div=document.getElementById("earth");
    div.style.backgroundImage="url('images/colonies/earth.png')";
}

function marscolonise() {
    const div=document.getElementById("mars");
    div.style.backgroundImage="url('images/colonies/mars.png')";
}

function jupitercolonise() {
    const div=document.getElementById("jupiter");
    div.style.backgroundImage="url('images/colonies/jupiter.png')";
}

function saturncolonise() {
    const div=document.getElementById("saturn");
    div.style.backgroundImage="url('images/colonies/saturn.png')";
}

function uranuscolonise() {
    const div=document.getElementById("uranus");
    div.style.backgroundImage="url('images/colonies/uranus.png')";
}

function neptunecolonise() {
    const div=document.getElementById("neptune");
    div.style.backgroundImage="url('images/colonies/neptune.png')";
}
// End of Colonise Functions

// Start of Decolonise Functions
function sundecolonise() {
    const div=document.getElementById("sun");
    div.style.backgroundImage="url('images/sun.png')";
}

function mercurydecolonise() {
    const div=document.getElementById("mercury");
    div.style.backgroundImage="url('images/mercury.png')";
}

function venusdecolonise() {
    const div=document.getElementById("venus");
    div.style.backgroundImage="url('images/venus.png')";
}

function earthdecolonise() {
    const div=document.getElementById("earth");
    div.style.backgroundImage="url('images/earth.png')";
}

function marsdecolonise() {
    const div=document.getElementById("mars");
    div.style.backgroundImage="url('images/mars.png')";
}

function jupiterdecolonise() {
    const div=document.getElementById("jupiter");
    div.style.backgroundImage="url('images/jupiter.png')";
}

function saturndecolonise() {
    const div=document.getElementById("saturn");
    div.style.backgroundImage="url('images/saturn.png')";
}

function uranusdecolonise() {
    const div=document.getElementById("uranus");
    div.style.backgroundImage="url('images/uranus.png')";
}

function neptunedecolonise() {
    const div=document.getElementById("neptune");
    div.style.backgroundImage="url('images/neptune.png')";
}
// End of Decolonise Functions