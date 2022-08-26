const messageContainer = document.querySelector(".message-container");
const userInputBox = document.querySelector("#input-container");

function addRow(text, senderIsMe) {
    let row = document.createElement("div");
    row.className = "row";
    if(text==""){
        row.textContent = Math.random().toString(36).slice(2, 7);
    }else{
        row.textContent = text;
    }
    if(senderIsMe){
        row.style.textAlign = "right";
    }
    messageContainer.appendChild(row);
    messageContainer.lastChild.scrollIntoView();
}

//generate a random text when ArrowUp is pressed
document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key == "ArrowUp") {
        addRow("",false);
    }
});

userInputBox.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        e.preventDefault();
        let input = userInputBox.value;
        console.log(input);
        addRow(input,true);
        userInputBox.value = "";
    }
} )


