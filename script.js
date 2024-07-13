let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function add1Home() {
    homeScore += 1
    homeStoreEl.textContent = homeScore;
    console.log("Nice!")
}

function add2Home() {
    homeScore += 2
    homeStoreEl.textContent = homeScore;
    console.log("Nice!")
}

function add3Home() {
    homeScore += 3
    homeStoreEl.textContent = homeScore;
    console.log("Nice!")
}

function add1Guest() {
    guestScore += 1
    guestStoreEl.textContent = guestScore;
    console.log("Oh no!")
}

function add2Guest() {
    guestScore += 2
    guestStoreEl.textContent = guestScore;
    console.log("Oh no!")
}

function add3Guest() {
    guestScore += 3
    guestStoreEl.textContent = guestScore;
    console.log("Oh no!")
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore
}