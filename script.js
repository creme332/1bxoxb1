const messageContainer = document.querySelector("#message-container");
const userInputBox = document.querySelector("#input-container");
const sendButton =  document.querySelector("#sendbtn");

function addRow(text, sentText) {
    let row = document.createElement("div");
    row.className = "row";
    
    let messageBubble = document.createElement("textarea");
    messageBubble.className = "message-bubble";
    messageBubble.readOnly = true;
    messageBubble.cols = 40;

    if(sentText){
        messageBubble.classList.add("sent-text");
        messageBubble.textContent = text;
        // messageBubble.style.textAlign = "right";
        //add margin right
    }else{
        messageBubble.classList.add("received-text");
        messageBubble.textContent = Math.random().toString(36).slice(2, 7);
        // messageBubble.style.textAlign = "left";
        //add margin left to bubble
    }
    row.appendChild(messageBubble);
    messageContainer.appendChild(row);
    messageContainer.lastChild.scrollIntoView();
}

function addUsername(){

}
//generate a random text when ArrowUp is pressed
document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key == "ArrowUp") {
        addRow("",false);
    }
    if (e.key == "ArrowDown") {
        addRow("",true);
    }
});

sendButton.addEventListener("click", (e)=>{
        let input = userInputBox.value;
        console.log(input);
        if(input!="")addRow(input,true);
        userInputBox.value = "";
} )


