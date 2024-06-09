// Assignment 1 | COMP1073 Client-Side JavaScript

// Create a new speechSynthesis object
const synth = window.speechSynthesis;

// Variables to hold parts of the story
let textToSpeak = "";
let subject = "";
let verb = "";
let adjective = "";
let secondNoun = "";
let place = "";

// Arrays of words from the image
const subjects = [
  "The turkey",
  "The dog",
  "The cat",
  "My teacher",
  "The elephant",
];
const verbs = ["sat on", "danced with", "have seen", "doesn’t like", "kissed"];
const adjectives = ["a funny", "a sunny", "a slimy", "a barking", "a fat"];
const secondNouns = ["monkey", "goat", "bug", "cow", "worm"];
const places = [
  "on the bed",
  "in the car",
  "at the park",
  "on the moon",
  "under the sea",
];

// Object to store images corresponding to each word
const images = {
  "The turkey": "../img/turkey.png",
  "The dog": "../img/shiba.png",
  "The cat": "../img/cat.png",
  "My teacher": "../img/teacher.png",
  "The elephant": "../img/elephant.png",
  "sat on": "../img/people.png",
  "danced with": "../img/dancing.png",
  "have seen": "../img/view.png",
  "doesn’t like": "../img/dislike.png",
  kissed: "../img/kiss.png",
  "a funny": "../img/laugh.png",
  "a sunny": "../img/sunny.png",
  "a slimy": "../img/slime.png",
  "a barking": "../img/bark.png",
  "a fat": "../img/obesity.png",
  monkey: "../img/monkey.png",
  goat: "../img/goat.png",
  bug: "../img/ladybug.png",
  cow: "../img/cow.png",
  worm: "../img/caterpillar.png",
  "on the bed": "../img/bed.png",
  "in the car": "../img/car.png",
  "at the park": "../img/park.png",
  "on the moon": "../img/man-on-the-moon.png",
  "under the sea": "../img/beach.png",
};

// Function to populate word lists
function populateWordLists() {
  populateList(subjects, "nounsList");
  populateList(verbs, "verbsList");
  populateList(adjectives, "adjectivesList");
  populateList(secondNouns, "secondNounsList");
  populateList(places, "placesList");
}

// Helper function to populate a specific list
function populateList(words, id) {
  const ulElement = document.getElementById(id);
  for (const word of words) {
    const liElement = document.createElement("li");
    const imgElement = document.createElement("img");
    imgElement.src = images[word]; // Set the source of the image
    imgElement.alt = word;
    imgElement.style.width = "50px"; // Set the width of the image
    liElement.appendChild(imgElement);
    liElement.appendChild(document.createTextNode(` ${word}`));
    ulElement.appendChild(liElement);
  }
}

// Function to pick a random word from an array
function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to update the story output
function updateStoryOutput() {
  textToSpeak = `${subject} ${verb} ${adjective} ${secondNoun} ${place}`;
  document.getElementById("storyOutput").innerText = textToSpeak;
}

// Event listener for all buttons
document.getElementById("buttonsContainer").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const type = e.target.getAttribute("data-type");
    switch (type) {
      case "noun":
        subject = getRandomWord(subjects);
        break;
      case "verb":
        verb = getRandomWord(verbs);
        break;
      case "adjective":
        adjective = getRandomWord(adjectives);
        break;
      case "secondNoun":
        secondNoun = getRandomWord(secondNouns);
        break;
      case "place":
        place = getRandomWord(places);
        break;
    }
    updateStoryOutput();
  }
});

document.getElementById("speakButton").addEventListener("click", () => {
  speakNow(textToSpeak);
});

document.getElementById("randomStoryButton").addEventListener("click", () => {
  subject = getRandomWord(subjects);
  verb = getRandomWord(verbs);
  adjective = getRandomWord(adjectives);
  secondNoun = getRandomWord(secondNouns);
  place = getRandomWord(places);
  updateStoryOutput();
});

document.getElementById("resetButton").addEventListener("click", () => {
  subject = "";
  verb = "";
  adjective = "";
  secondNoun = "";
  place = "";
  textToSpeak = "";
  document.getElementById("storyOutput").innerText = "";
});

// Function to speak the text
function speakNow(string) {
  const utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

// Populate word lists on page load
populateWordLists();
