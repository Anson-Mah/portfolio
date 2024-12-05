// Date: 22 February, 2024
// Name: Anson Mah

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
    // Mutes the Taylor Swift songs
    let audio_files=document.querySelectorAll("audio");
    audio_files.forEach(audio_files => {
      audio_files.muted=true;
    });
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
    // Plays another Taylor Swift song on top of all the already playing ones.
    // The function is called every other click. 
    taylor_swift();
    document.getElementById("text_above").innerHTML = "I hope you like Taylor Swift :3";
  } else if (click_counter>38) {
    document.getElementById("text_above").innerHTML = "I hope you like Taylor Swift :3";
  } else if (click_counter==38) {
    // Calls a function that plays a random song by Taylor Swift.
    taylor_swift();
    document.getElementById("text_above").innerHTML = "I hope you like Taylor Swift :3";
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
function taylor_swift() {
  // An array listing the tracks of three Taylor Swift albums.
  const taylorSwiftSongs = [
    //1989 (Taylor's Version)
    'Taylor Swift Songs/1989 TV/01 Welcome To New York.mp3',
    'Taylor Swift Songs/1989 TV/02 Blank Space.mp3',
    'Taylor Swift Songs/1989 TV/03 Style.mp3',
    'Taylor Swift Songs/1989 TV/04 Out Of The Woods.mp3',
    'Taylor Swift Songs/1989 TV/05 All You Had To Do Was Stay.mp3',
    'Taylor Swift Songs/1989 TV/06 Shake It Off.mp3',
    'Taylor Swift Songs/1989 TV/07 I Wish You Would.mp3',
    'Taylor Swift Songs/1989 TV/08 Bad Blood.mp3',
    'Taylor Swift Songs/1989 TV/09 Wildest Dreams.mp3',
    'Taylor Swift Songs/1989 TV/10 How You Get The Girl.mp3',
    'Taylor Swift Songs/1989 TV/11 This Love.mp3',
    'Taylor Swift Songs/1989 TV/12 I Know Places.mp3',
    'Taylor Swift Songs/1989 TV/13 Clean.mp3',
    'Taylor Swift Songs/1989 TV/14 Wonderland.mp3',
    'Taylor Swift Songs/1989 TV/15 You Are In Love.mp3',
    'Taylor Swift Songs/1989 TV/16 New Romantics.mp3',
    'Taylor Swift Songs/1989 TV/17 Slut!.mp3',
    'Taylor Swift Songs/1989 TV/18 Say Do Not Go.mp3',
    'Taylor Swift Songs/1989 TV/19 Now That We Do Not Talk.mp3',
    'Taylor Swift Songs/1989 TV/20 Suburban Legends.mp3',
    'Taylor Swift Songs/1989 TV/21 Is It Over Now.mp3',

    //Lover
    'Taylor Swift Songs/Lover/01 I Forgot That You Existed.mp3',
    'Taylor Swift Songs/Lover/02 Cruel Summer.mp3',
    'Taylor Swift Songs/Lover/03 Lover.mp3',
    'Taylor Swift Songs/Lover/04 The Man.mp3',
    'Taylor Swift Songs/Lover/05 The Archer.mp3',
    'Taylor Swift Songs/Lover/06 I Think He Knows.mp3',
    'Taylor Swift Songs/Lover/07 Miss Americana & The Heartbreak Prince.mp3',
    'Taylor Swift Songs/Lover/08 Paper Rings.mp3',
    'Taylor Swift Songs/Lover/09 Cornelia Street.mp3',
    'Taylor Swift Songs/Lover/10 Death By A Thousand Cuts.mp3',
    'Taylor Swift Songs/Lover/11 London Boy.mp3',
    'Taylor Swift Songs/Lover/12 Soon You Will Get Better.mp3',
    'Taylor Swift Songs/Lover/13 False God.mp3',
    'Taylor Swift Songs/Lover/14 You Need To Calm Down.mp3',
    'Taylor Swift Songs/Lover/15 Afterglow.mp3',
    'Taylor Swift Songs/Lover/16 ME!.mp3',
    'Taylor Swift Songs/Lover/17 It Is Nice To Have A Friend.mp3',
    'Taylor Swift Songs/Lover/18 Daylight.mp3',

    //Speak Now (Taylor's Version)
    'Taylor Swift Songs/Speak Now TV/01 Mine.mp3',
    'Taylor Swift Songs/Speak Now TV/02 Sparks Fly.mp3',
    'Taylor Swift Songs/Speak Now TV/03 Back To December.mp3',
    'Taylor Swift Songs/Speak Now TV/04 Speak Now.mp3',
    'Taylor Swift Songs/Speak Now TV/05 Dear John.mp3',
    'Taylor Swift Songs/Speak Now TV/06 Mean.mp3',
    'Taylor Swift Songs/Speak Now TV/07 The Story Of Us.mp3',
    'Taylor Swift Songs/Speak Now TV/08 Never Grow Up.mp3',
    'Taylor Swift Songs/Speak Now TV/09 Enchanted.mp3',
    'Taylor Swift Songs/Speak Now TV/10 Better Than Revenge.mp3',
    'Taylor Swift Songs/Speak Now TV/11 Innocent.mp3',
    'Taylor Swift Songs/Speak Now TV/12 Haunted.mp3',
    'Taylor Swift Songs/Speak Now TV/13 Last Kiss.mp3',
    'Taylor Swift Songs/Speak Now TV/14 Long Live.mp3',
    'Taylor Swift Songs/Speak Now TV/15 Ours.mp3',
    'Taylor Swift Songs/Speak Now TV/16 Superman.mp3',
    'Taylor Swift Songs/Speak Now TV/17 Electric Touch.mp3',
    'Taylor Swift Songs/Speak Now TV/18 When Emma Falls In Love.mp3',
    'Taylor Swift Songs/Speak Now TV/19 I Can See You.mp3',
    'Taylor Swift Songs/Speak Now TV/20 Castles Crumbling.mp3',
    'Taylor Swift Songs/Speak Now TV/21 Foolish One.mp3',
    'Taylor Swift Songs/Speak Now TV/22 Timeless.mp3',
  ]

  //Picks a random song from the array.
  let random_song = taylorSwiftSongs[Math.floor(Math.random()*taylorSwiftSongs.length)];

  //Creates an audio element.
  let swiftie = document.createElement("audio");
  swiftie.classList.add('swiftie');
  swiftie.setAttribute('src', `${random_song}`);
  swiftie.setAttribute('autoplay', true);
  swiftie.setAttribute('loop', true);
  document.body.appendChild(swiftie);
  console.log(swiftie);
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