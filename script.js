const marquee = document.createElement("marquee");
marquee.textContent = "Thank you for visiting us!!! Please come again!";
function changeStyle(){
    marquee.style.fontSize = "30px";
    return marquee;
}
changeStyle();
document.querySelector("body").appendChild(marquee);