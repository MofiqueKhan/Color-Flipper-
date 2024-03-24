const colors = ["green" , "red" ,"red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "brown", "cyan", "magenta", "teal", "gray", "navy"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}