//get elements home-sl, away-sl and store in variables home, and away

//initial value of home points
let homePoint = 0;

//initial value of away points
let awayPoint = 0;

//using DOM to select home element
let home = document.getElementById('home-sl');

//used .textContent to reassign the parameter of the HTML document selected
home.textContent = 0;
//using DOM to select away element

let away = document.getElementById('away-sl');
//used textContent to reassign the parameter of the HTML document selected
away.textContent = 0;


//implement function

function addOneToHome() {
    //adding one to to the initial home point
    homePoint += 1;

    home.textContent = homePoint;
}

function addTwoToHome() {
    //adding two to to the initial home point
    homePoint += 2;

    home.textContent = homePoint;
}

function addThreeToHome() {
    //adding three to to the initial home point
    homePoint += 3;

    home.textContent = homePoint;
}

function subtractOneFromeHome(){
    //subtracting one point from the home team
    homePoint = homePoint-1;
    
    home.textContent = homePoint;
}

//away points

function addOneToAway() {
    //adding one to to the initial away point
    awayPoint += 1;

    away.textContent = awayPoint;
}

function addTwoToAway() {
    //adding two to to the initial home point
    awayPoint += 2;

    away.textContent = awayPoint;
}

function addThreeToAway() {
    //adding three to to the initial home point
    awayPoint += 3;

    away.textContent = awayPoint;
}

function subtractOneFromeAway(){
    //subtracting one point from the home team
    awayPoint = awayPoint-1;
    
    away.textContent = awayPoint;
}


function newQuarter() {
    //new quarter stores the previous scores in a marquee
    //assigning the textContent of the home value in the DOM
    let me = home.textContent;

    let you = away.textContent;

    let result = document.getElementById("result");
    
     //concatenating our previous and recent results to the marquee
    result.textContent += "  Home " + me + " - " + " Away " + you;

}

let form = document.getElementById("teamSelectForm");

function newGame() {
form.style.display = "inline";

    homePoint = 0;

    home.textContent = homePoint;

    awayPoint = 0 ;

    away.textContent = awayPoint;

    home.style.color = "red";

    away.style.color = "red";

    let result = document.getElementById("result");

    result.textContent = " ";
}

function win() {

    if (homePoint > awayPoint) {

        home.style.color = "green";

        away.style.color = "red";

    } else if(awayPoint > homePoint) {

        away.style.color = "green";

        home.style.color = "red";
    } else if( you == me) {
        away.style.color = "orange";

        home.style.color = "orange";
    }
}

let firstTeam = document.getElementById("homeText");

let secondTeam = document.getElementById("awayText");

function submitForm() {
    let firstTa = document.getElementById("homeTeam").value;

    let secondTa = document.getElementById("awayTeam").value;

    if (firstTa == " "){
        alert("Wrong input");
    }else if(secondTa == "") {
        alert("wrong input");
    }else{
        firstTeam.textContent = firstTa;

        secondTeam.textContent = secondTa;

        form.style.display = "none";
    }
    

    


}