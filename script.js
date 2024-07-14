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
    homeStoreEl.textContent = 0;
    guestStoreEl.textContent = 0
}

// Timer

let timeRemaining = 48 * 60; // 48 minutes in seconds
let timerInterval;

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        clearInterval(timerInterval);
        alert('The match has ended!');
    }
}

document.getElementById('n-game').addEventListener('click', function() {
    if (timerInterval) {
        clearInterval(timerInterval); // Clear any existing timer
    }
    timeRemaining = 48 * 60; // Reset time
    updateTimer(); // Initial call to set the timer immediately
    timerInterval = setInterval(updateTimer, 1000); // Start the timer
});