const messageContainer = document.querySelector("#message-container");
const userInputBox = document.querySelector("#input-container");
const sendButton = document.querySelector("#sendbtn");
const refreshRate = 2000; //check for new messages every 2 seconds

// Generate a random username : https://stackoverflow.com/a/38622545/17627866
const MY_USERNAME = Math.random().toString(36).slice(2, 7);
userInputBox.placeholder = `Enter message. Your username is ${MY_USERNAME}.`;

let currentRowIndex = -1; // n-th row in spreadsheet has index (n-1)
let lastUser = ""; //name of last person who posted a message
let lastPostDate = ""; //date of last message

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

function updateMessages() {
    function onSuccess(spreadsheetData) {
        //spreadsheetData is a 2d array.
        // first column contains date
        // second column contains username
        // third colummn contains message

        const lastRowIndex = spreadsheetData.length - 1;

        function formatDate(date){
            //initial date format : Sat Aug 27 20:41:13 GMT+04:00 2022
            //return 27 Aug 2022
            date = date.split(' ');
            let year = date[date.length-1];
            let day = date[2];
            let month = date[1];
            return `${day} ${month} ${year}`;
        }

        for (let i = currentRowIndex + 1; i <= lastRowIndex; i++) {
            let msg = spreadsheetData[i][0];
            let date = spreadsheetData[i][1];
            let user = spreadsheetData[i][2];

            if(formatDate(lastPostDate)!=formatDate(date)){
                addDateBox(formatDate(date));
            }

            if(lastUser!= user && user != MY_USERNAME){
                addUsernameBox(user);
            }

            if(user==MY_USERNAME) addMessage(msg, true);
            else addMessage(msg, false);

            lastUser = user;
            lastPostDate = date;
        }

        currentRowIndex = lastRowIndex;
    }
    google.script.run.withSuccessHandler(onSuccess)
        .getSpreadsheetData();
}

function saveToSpreadsheet() {
    //ignore empty messages
    if (userInputBox.value == "") return;

    //TESTING : display message 
    addMessage(userInputBox.value, true);

    //send username and message to spreadsheet
    //google.script.run.addNewRow(username, userInputBox.value);

    //reset userInputBox
    userInputBox.value = "";
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

sendButton.addEventListener("click", saveToSpreadsheet)

//refresh messages every 2 seconds
// setInterval(updateMessages, refreshRate);
