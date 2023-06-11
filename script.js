const marquee = document.createElement("marquee");
marquee.textContent = "Thank you for visiting us!!! Please come again!";
function changeStyle(){
    marquee.style.fontSize = "30px";
    return marquee;
}
changeStyle();
document.querySelector("body").appendChild(marquee);

document.getElementById("button1").addEventListener("click", displayAboutMe());
document.getElementById("button2").addEventListener("click", displayExperience());
document.getElementById("button3").addEventListener("click", displayContacts());

function displayAboutMe(){
    document.getElementById("para").innerHTML = "Brenda Chebet Bii";
   /* let p = document.createElement("p");
    let text;
    text.textContent = "Brenda Chebet Bii";
    p.appendChild(text);
    document.getElementById("details").appendChild("p");
    return details;*/

};

function displayExperience(){
    document.getElementById("para").innerHTML = "I work hard.";
    /*let text;
    text.textContent = "Brenda Chebet Bii";
    document.getElementById("para") = text;
    return para;*/
};

function displayContacts(){
    document.getElementById("para").innerHTML = "bii.brenda.bcb@gmail.com";
};