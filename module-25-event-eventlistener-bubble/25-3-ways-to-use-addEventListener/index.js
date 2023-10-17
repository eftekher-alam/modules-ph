// way - 2
function bgGreen() {
    const body = document.getElementsByTagName("h1");
    body[0].style.backgroundColor = "green";
}

// way - 3
//with normal function
const btnBlue = document.getElementById("btn-blue");
btnBlue.onclick = makeBlue;
function makeBlue() {
    document.querySelector("h1").style.backgroundColor = "blue";
}

//with anonymous function
// const btnBlue = document.querySelector("#btn-blue");
// btnBlue.onclick = function () {
//     document.querySelector("h1").style.backgroundColor = "blue";
// }


//way-4

// const btnRed = document.querySelector("#btn-red");
// btnRed.addEventListener("click", makeRed);
// function makeRed() {
//     document.querySelector("h1").style.backgroundColor = "red";
// }

// const btnRed = document.querySelector("#btn-red");
// btnRed.addEventListener("click", function () {
//     document.querySelector("h1").style.backgroundColor = "red";
// });

document.querySelector("#btn-red").addEventListener("click", function () {
    document.querySelector("h1").style.backgroundColor = "red";
});
