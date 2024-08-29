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
        var receivedTitle = document.getElementById("receivedTitle")
        receivedTitle.value = name
        var received = document.getElementById("receivedText")
        received.value = input

        title.value = ""
        discription.value = ""
        var div2 = document.getElementById("div2")
        div2.style.display = "block"
        var div1 = document.getElementById("div1")
        div1.style.display = "none"
    }
}
   // Function to edit the note
   function editNote() {
    // Prompt the user for new title and text
    var editTitle = prompt("Enter new Title", document.getElementById('receivedTitle').value);
    var editText = prompt("Enter new Text", document.getElementById('receivedText').value);

    // Update the text areas with new values if provided
    if (editTitle !== null) {
        document.getElementById('receivedTitle').value = editTitle;
    }
    if (editText !== null) {
        document.getElementById('receivedText').value = editText;
    }
}
function goBack() {
    var div2 = document.getElementById("div2")
    div2.style.display = "none"
    var div1 = document.getElementById("div1")
    div1.style.display = "block"
}
function discard() {
    var received = document.getElementById("receivedText")
    received.value = ""
    var receivedTitle = document.getElementById("receivedTitle")
    receivedTitle.value = ""
}

function startTimer() {
    // Function to format numbers to two digits
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    // Update the time every second
    setInterval(() => {
        const now = new Date();
        const hours = formatNumber(now.getHours() % 12);
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

// var selectedBackground = ""; 

// function bg() {
//     var modalContent = document.getElementsByClassName("modal-content")[0];
//     var items = document.getElementsByClassName("dropdown-menu");

//     for (var i = 0; i < items.length; i++) {
//         items[i].onclick = function(event) {
//             event.preventDefault();
//             selectedBackground = this.href;  
//             modalContent.style.backgroundImage = "url(" + selectedBackground + ")";
//             modalContent.style.backgroundSize = "cover";
//             modalContent.style.backgroundPosition = "center";
//         };
//     }
// }