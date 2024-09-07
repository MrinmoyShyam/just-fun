const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const gif = document.getElementById("gif");
const question = document.getElementById("question");
const buttons = document.querySelector(".buttons");

let newGifUrl = "https://media.tenor.com/Y3bJsdez11QAAAAj/cute-spin-cute-bubu.gif"; // Change this to the GIF you want to display after clicking "Yes"

noBtn.addEventListener("mouseover", function () {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", function () {
    // Change the GIF
    gif.src = newGifUrl;

    // Update the text above the GIF
    question.innerText = "Me too!";

    // Add the text below the GIF
    let talkText = document.createElement("p");
    talkText.innerText = "Let's talk";
    talkText.style.marginTop = "20px";
    talkText.style.fontSize = "24px";
    talkText.style.fontWeight = "bold";
    document.querySelector(".gif-container").appendChild(talkText);

    // Hide the buttons after clicking "Yes"
    buttons.style.display = "none";
});
