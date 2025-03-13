const countdownDate = new Date("June 21, 2025 00:00:00").getTime();
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const x = setInterval(async function() {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = "<p class='h2'>"+days+"</p>";
    document.getElementById("hours").innerHTML = "<p class='h2'>"+hours+"</p>";
    document.getElementById("minutes").innerHTML = "<p class='h2'>"+minutes+"</p>";
    document.getElementById("seconds").innerHTML = "<p class='h2'>"+seconds+"</p>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        await delay(3000);
        window.location.href = "m0I4ycyYEP.html";
    }
}, 1000);

const messages = [
    "ILOVEYOU 4ever",
    "Ang Cute mo😖",
    "Huggy :<",
    "IMYSM Baby",
    "Wee Woo Wee Woo",
    "My Star✨",
    "Die With A Smile",
    "Ssik Please 🥺"
];
let messageIndex = 0;

const messageInterval = setInterval(function() {
    document.getElementById("message").innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}, 3000);