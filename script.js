//Onclick events for buttons 1, 2 and 3
document.getElementById("button2").addEventListener("click", displayExperience());
document.getElementById("button3").addEventListener("click", displayContacts());
document.getElementById("button1").addEventListener("click", displayAboutMe());

function displayAboutMe(){
    document.getElementById("para").innerHTML = "<h1 class='heading'>About Me</h1>" + "<br>" + 
    "<p class='details'>I am very passionate about programming and web development. I have years of experience in my field.</p>";
};

function displayExperience(){
    document.getElementById("para").innerHTML = "<h1 class='heading'>Work Experience</h1>" + "<br>" + 
    "<p class='details'>I have worked on many projects where I have created several static and dynamic websites for my clients.</p>";
};

function displayContacts(){
    document.getElementById("para").innerHTML = "<h1 class='heading'>Contact Me</h1>" + "<br>" + 
    "<p class='details'>E-mail : bii.brenda.bcb@gmail.com</p>";
};

//Marquee element created and appended
const marquee = document.createElement("marquee");
marquee.textContent = "Thank you for visiting us!!! Please come again!";
function changeStyle(){
    marquee.style.fontSize = "30px";
    return marquee;
}
changeStyle();
document.querySelector("body").appendChild(marquee);