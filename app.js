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
        receivedTitle.innerHTML=name
        var received = document.getElementById("receivedText")
        received.innerHTML = input

        title.value = ""
        discription.value = ""
    }

}
function discard() {
    var received = document.getElementById("receivedText")
    received.innerHTML = ""
    var receivedTitle= document.getElementById("receivedTitle")
    receivedTitle.innerHTML=""
}

