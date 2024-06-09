//document.querySelector("h1").innerHTML = "Good Bye";

//document.body.querySelector("ul").firstElementChild.innerHTML="payel";
//document.body.querySelector("ul").lastElementChild.innerHTML = "024";

//document.getElementsByTagName("li")[1].style.backgroundcolor ="red";
function player1() {
    var dice = document.getElementById('dice');
    var result = Math.floor(Math.random()*6)+1;
    dice.innerHTML = result;
}
function player2() {
    var dicee = document.getElementById('dicee');
    var result = Math.floor(Math.random()*6)+1;
    dicee.innerHTML = result;
}



