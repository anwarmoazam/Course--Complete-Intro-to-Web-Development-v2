
document.querySelector(`.clk`).addEventListener("click", function(event)
{
    // alert("Clicked")
    console.log("Hello")
    btnClk(event.target.innerText);
})

function btnClk(value)
{
    console.log(value)
}
// console.log(element.innertText);