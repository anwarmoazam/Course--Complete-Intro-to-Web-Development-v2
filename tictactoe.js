let players = ["X","O"];
let currentPlayer = players[Math.floor(Math.random()*players.length)]
document.querySelector("div.container p").innerText = `Current Player : ${currentPlayer}`;
let boxes = document.querySelectorAll(".col");
boxes.forEach(function addEventListenertoBoxes(box) {
    box.addEventListener("click", function boxClickHandler(event){
        event.target.innerText = currentPlayer;
    })
})
