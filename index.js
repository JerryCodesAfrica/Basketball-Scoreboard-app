//get elements home-sl, away-sl and store in variables home, and away
let homePoint = 0;

let awayPoint = 0;

let home = document.getElementById('home-sl')
home.textContent = 0;

let away = document.getElementById('away-sl');
away.textContent = 0;


//implement function

function addOneToHome() {
    homePoint += 1;
    home.textContent = homePoint;
}

function addTwoToHome() {
    homePoint += 2;
    home.textContent = homePoint;
}

function addThreeToHome() {
    homePoint += 3;
    home.textContent = homePoint;
}

//away points

function addOneToAway() {
    awayPoint += 1;
    away.textContent = awayPoint;
}

function addTwoToAway() {
    awayPoint += 2;
    away.textContent = awayPoint;
}

function addThreeToAway() {
    awayPoint += 3;
    away.textContent = awayPoint;
}

function highlightWinner() {
    console.log(homePoint)
}
// let pointA = away.textContent;

// if(pointH > pointA)

function newGame() {
    homePoint = 0;
    home.textContent = homePoint;
    awayPoint = 0 ;
    away.textContent = awayPoint;
}

function win() {
    let me = home.textContent;
    let you = away.textContent;
    if (me > you) {
        home.style.color = "green";
        away.style.color = "red";
    } else {
        away.style.color = "green";
        home.style.color = "red";
    }
}