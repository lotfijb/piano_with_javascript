// sounds array
const sounds = [];
for (var i = 1; i < 22; i++) {
  let sound = i + ".mp3";
  sounds.push(sound);
}
//keys array
const keys = document.getElementsByClassName("note");

for (let i = 0; i < 27; i++) {
  keys[i].addEventListener("click", () => {
    let mp3 = sounds[Math.round(Math.random() * 20)];
    let audio = new Audio("./sounds/" + mp3);
    audio.play();
  });
}

function myFunction() {
  let mp3 = sounds[Math.round(Math.random() * 20)];
  let audio = new Audio("./sounds/" + mp3);
  audio.play();
  console.log(audio);
}
