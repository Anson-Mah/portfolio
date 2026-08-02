let click_counter = 0
console.log(click_counter);

function action1() {
  if (click_counter==100) {
    document.getElementById("text_above").innerHTML = "";
    let video = document.createElement("video");
    video.classList.add('video');
    video.setAttribute('id', 'video');
    video.setAttribute('src', 'mapi_11_amleto.mov');
    video.setAttribute('autoplay', true);
    document.body.appendChild(video);
    // Changes the background color of the body in order to match the video. 
    setTimeout(changeBody, 11300);
    function changeBody() {
      document.body.style.backgroundColor='#8C8171';
    }
    setTimeout(changeBodyAgain, 161000);
    function changeBodyAgain() {
      document.body.style.backgroundColor='blanchedalmond';
    }
  } else if (click_counter>87) {
    // Resets the button's CSS values of top & left to its default positions.  
    document.getElementById("button_a").style.top='';
    document.getElementById("button_a").style.left='';
    document.getElementById("text_above").innerHTML = "Doing that is way too exhausting for me...";
    // Mutes all the Music
    let audio_files=document.querySelectorAll("audio");
    audio_files.forEach(audio_files => {
      audio_files.muted=true;
    });
  } else if (click_counter==86 || click_counter==87) {
    document.getElementById("text_above").innerHTML = "";
    // Temprarily disables the button so it has time to hover around the screen. 
    document.getElementById("button_a").disabled = true;
    setTimeout(enableButton, 1500);
  } else if (click_counter==85) {
    document.getElementById("text_above").innerHTML = "";
  } else if (click_counter==84) {
    // Moves the button to a random place on the screen. 
    let y=(Math.random()*40)-40;
    let x=(Math.random()*40)-40;
    document.getElementById("button_a").style.top=`${y}vh`;
    document.getElementById("button_a").style.left=`${x}vw`;
    console.log(y);
    console.log(x);
    document.getElementById("text_above").innerHTML = "";
  } else if (click_counter>74) {
    document.getElementById("text_above").innerHTML = "";
  } else if (click_counter>64) {
    document.getElementById("text_above").innerHTML = "I should've picked a more difficult problem...";
  } else if (click_counter==64) {
    // Makes the user solve a quadratic equation in order to proceed.
    document.getElementById("button_a").disabled = true;
    document.getElementById("text_above").innerHTML = "This should waste some of your time.";
    document.getElementById("text_above").style.bottom='17.5vh';
    document.getElementById("quadratic_equation_div").style.visibility='visible';
  } else if (click_counter>49 && click_counter%2==0 && click_counter<64) {
    // Plays another song on top of all the already playing ones.
    // The function is called every other click. 
    the_amazing_music_man();
    document.getElementById("text_above").innerHTML = "Hopefully this will get you to stop :3";
  } else if (click_counter>38) {
    document.getElementById("text_above").innerHTML = "Hopefully this will get you to stop :3";
  } else if (click_counter==38) {
    // Calls a function that plays a random song from a handpicked catalogue.
    the_amazing_music_man();
    document.getElementById("text_above").innerHTML = "Hopefully this will get you to stop :3";
  } else if (click_counter>37) {
    document.getElementById("text_above").innerHTML = "";
  } else if (click_counter>32) {
    document.getElementById("text_above").innerHTML = "...";
  } else if (click_counter==32) {
    // Changes the button text from "CLICK ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" to "Don't Click Me."
    document.getElementById("text_above").innerHTML = "";
    document.getElementById("button_a").innerHTML = "Don't Click Me.";
    document.getElementById("button_a").style.width="9em";
  } else if (click_counter>25) {
    document.getElementById("text_above").innerHTML = "Please stop.";
  } else if (click_counter>18) {
    document.getElementById("text_above").innerHTML = "You can stop now...";
  } else if (click_counter>9) {
    document.getElementById("text_above").innerHTML = "That's alot of clicking...";
  } else {
    document.getElementById("text_above").innerHTML = "Thank You :3";
  }
  click_counter+=1;
  console.log(click_counter);
  document.getElementById("click_counter").innerHTML = `Clicks: ${click_counter}`;
}

// The function that plays a random song by Taylor Swift.
function the_amazing_music_man() {
  // An array listing the tracks of three Taylor Swift albums.
  const very_sigma_music = [
    'Music/BABY LAUGH JERSEY FUNK - VHM4D.mp3',
    'Music/Catch Me If You Can - KSI.mp3',
    'Music/Cupid Gay Version - edd2e.mp3',
    'Music/Doja (Remix) - Central D & Lil Nas X.mp3',
    'Music/Jelly House - Rizzler.mp3',
    'Music/Last Night (Gay Remix) - Morgan Wallen.mp3',
    'Music/Lumi Athena - ICEWHORE!.mp3',
    'Music/OH NO NO NO FUNK - DJ KVNXD.mp3',
    'Music/Skibidi Toilet Theme Song.mp3',
    'Music/Sticking Out Your Gyatt For The Rizzler.mp3',
    'Music/Thick Of It - KSI.mp3',
    'Music/TV Off (Gay Remix) - Dasgasdom3.mp3',
  ]

  //Picks a random song from the array.
  let random_song = very_sigma_music[Math.floor(Math.random()*very_sigma_music.length)];

  //Creates an audio element.
  let skibidi = document.createElement("audio");
  skibidi.classList.add('skibidi');
  skibidi.setAttribute('src', `${random_song}`);
  skibidi.setAttribute('autoplay', true);
  skibidi.setAttribute('loop', true);
  document.body.appendChild(skibidi);
  console.log(skibidi);
}

function action2() {
  // Moves the button to a random place when hovered. Only works if the button's click counter is equal to 87 or 88. 
  if (click_counter==87 || click_counter==88) {
    let y=(Math.random()*40)-40;
    let x=(Math.random()*40)-40;
    document.getElementById("button_a").style.top=`${y}vh`;
    document.getElementById("button_a").style.left=`${x}vw`;
    console.log(y);
    console.log(x);
    document.getElementById("text_above").innerHTML = "There's no way that you can keep up with this!";
  }
}

function enableButton() {
  document.getElementById("button_a").removeAttribute('disabled');
  document.getElementById("text_above").style.bottom='';
}

// This variable must be declared outside the function check_answer() in order for it to not reset when that function is called. 
let attempts = 0

function check_answer() {
  event.preventDefault();
  let answer1 = document.getElementById("answer1").value;
  let answer2 = document.getElementById("answer2").value;
  if (answer1 == -1 && answer2 == 3 || answer1 == 3 && answer2 == -1 ) {
    alert("Your answer is correct!\nYou may proceed!");
    setTimeout(hide_popup, 1000);
    function hide_popup() {
      document.getElementById("quadratic_equation_div").style.transition="visibility 3s, opacity 3s";
      document.getElementById("quadratic_equation_div").style.opacity="0";
      document.getElementById("quadratic_equation_div").style.visibility="hidden";
      setTimeout(enableButton, 3100);
    }
  } else if (answer1 == '' || answer2 == '') {
    // Does nothing if one of the answers are blank.
  } else if (attempts==10) {
    alert("Your answer is incorrect.\nYou may try again to answer the problem correctly.");
    attempts+=1;
    console.log(attempts);
    let quadratic_formula=document.createElement("img");
    quadratic_formula.setAttribute('src', 'https://wikimedia.org/api/rest_v1/media/math/render/svg/6dca3ce631f83b33ad881aed5f6e12e2f6c3afbd')
    quadratic_formula.setAttribute('id', 'quadratic_formula')
    document.body.appendChild(quadratic_formula);
  } else if (attempts>0) {
    alert("Your answer is incorrect.\nYou may try again to answer the problem correctly.");
    attempts+=1;
    console.log(attempts);
  } else {
    alert("Wrong. A nuclear weapon is now heading towards your direction.");
    alert("You may try again to answer the problem correctly.");
    attempts+=1;
    console.log(attempts);
  }
}