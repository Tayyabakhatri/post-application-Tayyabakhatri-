var title = document.getElementsByClassName(".title")
title.className = "title"
function titleName() {

    var title = document.getElementById("name")
    var name = title.value
    var discription = document.getElementById("textarea");
    var input = discription.value
    if (name == "" || input == "") {
        alert("Title and discription are required field")
    } else {
        var receivedTitle= document.getElementById("receivedTitle")
        receivedTitle.value=name
        var received = document.getElementById("receivedText")
        received.value = input

        title.value = ""
        discription.value = ""
    }

}
function discard() {
    var received = document.getElementById("receivedText")
    received.value = ""
    var receivedTitle= document.getElementById("receivedTitle")
    receivedTitle.value=""
}

function startTimer() {
    // Function to format numbers to two digits
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    // Update the time every second
    setInterval(() => {
        const now = new Date();
        const hours = formatNumber(now.getHours()%12);
        const minutes = formatNumber(now.getMinutes());
        const seconds = formatNumber(now.getSeconds());

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;

        // Update seconds and toggle blink class for blink effect
        const secondsElement = document.getElementById('seconds');
        secondsElement.textContent = seconds;

        // Toggle the blink effect class
        secondsElement.classList.toggle('blink');
    }, 1000);
}

// Start the timer
startTimer();
