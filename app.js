var title = document.getElementsByClassName(".title")
title.className = "title"
function titleName() {

    var title = document.getElementById("name")
    var name = title.value
    var discription = document.getElementById("textarea");
    var input = discription.value
    if (name == "" || input == "") {
        Swal.fire("Title and description are mandatry");
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
        div1.style.display = "block"
    }
}
function backgroundChange(hrefOrGradient) {
    var bg = document.getElementById("receivedText");
    var title = document.getElementById("receivedTitle");

    // Check if the input is a URL (image) or a gradient
    if (hrefOrGradient.startsWith('images/')) {
        // Apply image background
        bg.style.backgroundImage = `url('${hrefOrGradient}')`;
        title.style.backgroundImage = `url('${hrefOrGradient}')`;
    } else {
        // Apply gradient background
        bg.style.backgroundImage = hrefOrGradient;
        title.style.backgroundImage = hrefOrGradient;
    }

    // Apply background styles to both elements
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center';
    title.style.backgroundSize = 'cover';
    title.style.backgroundPosition = 'center';

    return false;  // Prevent default anchor behavior
}



   // Function to edit the note
   function editNote() {
    // Prompt the user for new title and text
    var editTitle = prompt("Enter new Title", document.getElementById('receivedTitle').value);
    var editText = prompt("Enter new Text", document.getElementById('receivedText').value);

    // Update the text areas with new values if provided
    if (editTitle !== null) {
        document.getElementById('receivedTitle').value = editTitle;
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
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