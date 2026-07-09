// =================================
// UFV Literature Club Prompt Hub
// Shared JavaScript
// =================================


// List of all generators
const generators = [
    "fiction-roulette.html",
    "crossover-fiction.html",
    "first-last-line.html",
    "literary-scategories.html"
];


// =================================
// Surprise Me Button
// =================================

function surpriseGenerator() {

    const randomGenerator =
        generators[Math.floor(Math.random() * generators.length)];


    window.location.href = randomGenerator;

}



// =================================
// Page Load Animation
// =================================

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("loaded");

});
