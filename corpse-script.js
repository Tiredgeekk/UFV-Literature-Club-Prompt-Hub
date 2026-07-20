// =====================================
// LITERARY EXQUISITE CORPSE
// JAVASCRIPT
// =====================================



let totalWriters = 0;

let currentWriter = 1;

let storyParts = [];

let storyInfo = {

    characters: "",
    setting: "",
    genre: "",
    prompt: ""

};




// =====================================
// START STORY
// =====================================


function startStory() {


    storyInfo.characters =
        document.getElementById("characters").value;


    storyInfo.setting =
        document.getElementById("setting").value;


    storyInfo.genre =
        document.getElementById("genre").value;


    storyInfo.prompt =
        document.getElementById("prompt").value;



    totalWriters =
        parseInt(document.getElementById("writer-count").value);



    if (!totalWriters || totalWriters < 2) {

        alert("Please enter at least 2 writers!");

        return;

    }




    storyParts = [];

    currentWriter = 1;



    showWritingInfo();



    changeScreen("writing-screen");


}







// =====================================
// PASS DEVICE
// =====================================


function readyWriter() {


    showWritingInfo();


    changeScreen("writing-screen");


}







// =====================================
// SHOW CURRENT WRITER INFO
// =====================================


function showWritingInfo() {



    document.getElementById("writer-number").textContent =

        "✒️ Writer " + currentWriter + " of " + totalWriters;




    document.getElementById("display-characters").textContent =

        storyInfo.characters || "None provided";



    document.getElementById("display-setting").textContent =

        storyInfo.setting || "None provided";



    document.getElementById("display-genre").textContent =

        storyInfo.genre || "None provided";



    document.getElementById("display-prompt").textContent =

        storyInfo.prompt || "None provided";



    document.getElementById("writer-input").value = "";



}







// =====================================
// SUBMIT WRITER PARAGRAPH
// =====================================


function submitLine() {



    let paragraph =

        document.getElementById("writer-input").value.trim();




    if (paragraph === "") {


        alert("Please write something before continuing!");


        return;

    }




    storyParts.push(paragraph);




    if (currentWriter >= totalWriters) {


        revealStory();


    }


    else {


        currentWriter++;


        changeScreen("pass-screen");


    }


}







// =====================================
// REVEAL FINAL STORY
// =====================================


function revealStory() {



    document.getElementById("final-characters").textContent =

        storyInfo.characters || "None provided";



    document.getElementById("final-setting").textContent =

        storyInfo.setting || "None provided";



    document.getElementById("final-genre").textContent =

        storyInfo.genre || "None provided";




    let finalBox =

        document.getElementById("final-story");



    finalBox.innerHTML = "";




 storyParts.forEach((part) => {


    let paragraph = document.createElement("p");


    paragraph.className = "story-paragraph";


    paragraph.textContent = part;


    finalBox.appendChild(paragraph);


});




    changeScreen("reveal-screen");


}







// =====================================
// CHANGE SCREENS
// =====================================


function changeScreen(screenID) {



    document.getElementById("setup-screen").classList.add("hidden");

    document.getElementById("pass-screen").classList.add("hidden");

    document.getElementById("writing-screen").classList.add("hidden");

    document.getElementById("reveal-screen").classList.add("hidden");




    document.getElementById(screenID).classList.remove("hidden");


}







// =====================================
// RESET
// =====================================


function resetGame() {



    storyParts = [];

    currentWriter = 1;

    totalWriters = 0;



    document.getElementById("characters").value = "";

    document.getElementById("setting").value = "";

    document.getElementById("genre").value = "";

    document.getElementById("prompt").value = "";

    document.getElementById("writer-count").value = 6;



    changeScreen("setup-screen");


}
