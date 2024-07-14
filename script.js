let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");


document.addEventListener("click", function(event) {
    let homeScoreEl = document.getElementById("home-score")
    let homeScore = parseInt(homeScoreEl.textContent);

    let guestScoreEl = document.getElementById("guest-score")
    let guestScore = parseInt(guestScoreEl.textContent);

    if (event.target.id === "add-one-home") {
        homeScoreEl.textContent = homeScore + 1
    } else if (event.target.id === "add-two-home") {
        homeScoreEl.textContent = homeScore + 2
    } else if (event.target.id === "add-three-home") {
        homeScoreEl.textContent = homeScore + 3
    } else if (event.target.id === "add-one-guest") {
        guestScoreEl.textContent = guestScore + 1
    } else if (event.target.id === "add-two-guest") {
        guestScoreEl.textContent = guestScore + 2
    } else if (event.target.id === "add-three-guest") {
        guestScoreEl.textContent = guestScore + 3
    }
        
});

// function add1Home() {
//     homeScore += 1
//     homeStoreEl.textContent = homeScore;
//     console.log("Nice!")
// }

// function add2Home() {
//     homeScore += 2
//     homeStoreEl.textContent = homeScore;
//     console.log("Nice!")
// }

// function add3Home() {
//     homeScore += 3
//     homeStoreEl.textContent = homeScore;
//     console.log("Nice!")
// }

// function add1Guest() {
//     guestScore += 1
//     guestStoreEl.textContent = guestScore;
//     console.log("Oh no!")
// }

// function add2Guest() {
//     guestScore += 2
//     guestStoreEl.textContent = guestScore;
//     console.log("Oh no!")
// }

// function add3Guest() {
//     guestScore += 3
//     guestStoreEl.textContent = guestScore;
//     console.log("Oh no!")
// }

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore
}