
var random1=Math.floor(Math.random()*6)+1; //1-6

var randomImg= "dice" + random1 + ".png";
var randomImgsource= "images/" + randomImg;


var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgsource);


//dice2

var random2=Math.floor(Math.random()*6)+1;

var randomImg = "dice" + random2 + ".png";
var randomImgsource =  "images/" + randomImg;

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgsource);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins!!!";
}
else if(random1==random2){
    document.querySelector("h1").innerHTML="Oops! its A Draw!!"
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!!!";
}