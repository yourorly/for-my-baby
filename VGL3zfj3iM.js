var i = 0;
var txt = "Its your special day i hope you enjoy it, i hope we still continue and last forever Iloveyou so much idk if i can go to your birthday, anyways ill be always by your side and feel free to open up no matter the challages don't give up, and don't cry on simple things princess be brave sometimes | 12/15/24";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("elementEl").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();