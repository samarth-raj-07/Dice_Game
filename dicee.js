var name1= prompt("Player1, enter your name");
document.querySelectorAll("p")[0].innerHTML=name1;

var name2= prompt("Player2, enter your name");
document.querySelectorAll("p")[1].innerHTML=name2;

var randomNumber1=Math.random();
var ans=Math.floor(randomNumber1*6+1);


// instead of this big if-eles, i should have made a var 
// var randomImage="dice"+randomNumber+".png";
//this would have made code very easy;

if (ans==1){
    document.querySelector("img").setAttribute("src","images/dice1.png")
    
}
else if (ans==2){
    document.querySelector("img").setAttribute("src","images/dice2.png")
}else if (ans==3){
    document.querySelector("img").setAttribute("src","images/dice3.png")
}
else if (ans==4){
    document.querySelector("img").setAttribute("src","images/dice4.png")
}
else if (ans==5){
    document.querySelector("img").setAttribute("src","images/dice5.png")
}
else if (ans==6){
    document.querySelector("img").setAttribute("src","images/dice6.png")
}

var randomNumber2=Math.random();
var ans2=Math.floor(randomNumber2*6+1);

if (ans2==1){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png")
    //or could have used queryselectorall;
    
}
else if (ans2==2){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png")
}else if (ans2==3){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png")
}
else if (ans2==4){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png")
}
else if (ans2==5){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png")
}
else if (ans2==6){
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png")
}

if (ans>ans2){
    document.querySelector("h1").innerHTML="🚩 "+name1+" Wins";
}
else if(ans<ans2){
    document.querySelector("h1").innerHTML=name2+" Wins"+" 🚩";
}else{
    document.querySelector("h1").innerHTML="Tie!";
}