const messageContainer = document.querySelector("#message-container");
const userInputBox = document.querySelector("#input-container");
const sendButton = document.querySelector("#sendbtn");

// Generate a random username : https://stackoverflow.com/a/38622545/17627866
const USERNAME = Math.random().toString(36).slice(2, 7);
userInputBox.placeholder = `Enter message. Your username is ${USERNAME}.`;

function addMessage(text, sentText) {
    let row = document.createElement("div");
    row.className = "row";

    let messageBubble = document.createElement("textarea");
    messageBubble.className = "message-bubble";
    messageBubble.readOnly = true;
    messageBubble.cols = 40;

    //for random text
    if (text == "") {
        messageBubble.textContent = Math.random().toString(36).slice(2, 10);
    } else {
        messageBubble.textContent = text;
    }

    if (sentText) {
        messageBubble.classList.add("sent-text");
        // messageBubble.style.textAlign = "right";
        //add margin right
    } else {
        messageBubble.classList.add("received-text");
        // messageBubble.style.textAlign = "left";
        //add margin left to bubble
    }
    row.appendChild(messageBubble);
    messageContainer.appendChild(row);
    messageContainer.lastChild.scrollIntoView();
}

function addUsernameBox(username) {
    let row = document.createElement("div");
    row.className = "row";
    let usernameContainer = document.createElement("div");
    usernameContainer.className = "username-bubble";
    usernameContainer.textContent = username;
    row.appendChild(usernameContainer);
    messageContainer.appendChild(row);
}
function addDateBox(date) {
    let row = document.createElement("div");
    row.className = "row";
    let dateContainer = document.createElement("div");
    dateContainer.className = "date-bubble";
    dateContainer.textContent = date;
    row.appendChild(dateContainer);
    messageContainer.appendChild(row);
}

//For testing purposes, 
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        addMessage("", false);
    }
    if (e.key == "ArrowDown") {
        addMessage("", true);
    }
    if (e.key == "ArrowRight") {
        addUsernameBox("username");
    }
    if (e.key == "ArrowLeft") {
        addDateBox("22 Aug 2022");
    }
});

sendButton.addEventListener("click", (e) => {
    let input = userInputBox.value;
    console.log(input);
    if (input != "") addMessage(input, true);
    userInputBox.value = "";
})


