
let choice = "";

// Opening story popup
let ready = confirm(
    "It's midnight. You are alone at Union Station.\n" +
    "The last train is approaching.\n\n" +
    "Are you ready to make your choice?"
);

if (ready) {
    document.getElementById("story").innerHTML =
        "The last train is approaching. What will you do?";

    document.getElementById("choices").style.display = "block";
} else {
    document.getElementById("story").innerHTML =
        "You decided not to begin the story.";
}

// Option 1: Take the Train
function takeTrain() {
    choice = "train";
    updateStory();
}

// Option 2: Leave the Station
function leaveStation() {
    choice = "leave";
    updateStory();
}

// Update the story based on the choice
function updateStory() {
    let image = document.getElementById("storyImage");
    let result = document.getElementById("result");

    if (choice === "train") {
        image.src = "pics/newworld.jpg";
        result.innerHTML =
            "You discover a secret train to another world!";

    } else if (choice === "leave") {
        image.src = "pics/union.jpg";
        result.innerHTML =
            "You are standing outside Union Station.";
    }
}