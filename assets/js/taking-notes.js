//  Taking-Notes App Functions */

let submitButton = document.getElementById("submit-note");
let userInput = document.getElementById("note-input");
let list = document.getElementById("notes-list");

// Simulates button click on enter

userInput.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        // click on the button element is the trigger 
        submitButton.click();
    }
});


// Get stored list items if they are on page 

let currentList = localStorage.getItem("listItem");
if (currentList) {
    list.innerHTML = currentList;
}

//   Create a new list item when clicking on the "Add" button and saves the list to Local Storage
/**
 *  @description gets the input value from notes input, saves it as a new list item and saves the list to Local Storage
 */

function addToList() {
    let newItemValue = document.getElementById("note-input").value;
    //check if the required field  message was filled out
    let requiredMsg = document.querySelector("#note-item-required");

    // if there is nothing in input field
    if (newItemValue == null || newItemValue == "") {
        //if required field message is already there
        if (requiredMsg == null) {
            requiredMsg = document.createElement("div");
            requiredMsg.id = "note-item-required";
            requiredMsg.innerText = "Please add a note, the content is empty!";

            let reqWrapper = document.getElementById("note-input-wrapper");
            reqWrapper.appendChild(requiredMsg);
        }
    } else {
        //creates li element for notes 
        let newItem = document.createElement("li");
        newItem.className = "note-item";
        let newItemContent = document.createTextNode(newItemValue);
        // button delete 
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.className = "btn-delete";
        // Appends text and elements inside li
        newItem.appendChild(newItemContent);
        newItem.appendChild(deleteBtn);
        list.appendChild(newItem);


        //clears user input field and remove required message
        userInput.value = "";
        if (requiredMsg) {
            requiredMsg.remove();
        }
        //save the list in Local storage
        localStorage.setItem("listItem", list.innerHTML);
    }
}

//Removes only an list item from list

document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.className === "btn-delete") {
        //delete parent node
        event.target.parentNode.remove();
        //update with new list the local storage
        localStorage.setItem("listItem", list.innerHTML);
    }
});


/**
 * @description Clears all notes from the list
 */
function clearList() {
    if (confirm("This will clear your notes list. Are you sure?")) {
        let currentList = localStorage.removeItem("listItem");
        //remove first child nodes while there are some
        while (list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
    } else {

    }


    return false;
}