const genres = [
    "Fantasy", "Sci-Fi", "Romance", "Mystery", "Horror",
    "Comedy", "Historical", "Slice of Life", "Adventure",
    "Dystopian", "Mythology", "Cyberpunk", "Fairy Tale",
    "Drama", "Gothic", "Urban Fantasy", "Dark Fantasy",
    "Post-Apocalyptic", "Superhero", "Paranormal",
    "Thriller", "Steampunk", "Western", "Crime",
    "Psychological", "Magical Realism", "Time Travel",
    "Space Opera", "Coming of Age", "Political"
];


const objects = [
    "Broken Clock", "Lost Letter", "Crystal Ball",
    "Map with No North", "Pocket Watch",
    "Sword in a Stone", "Magic Pen", "Empty Teacup",
    "Cursed Ring", "Music Box", "Red Umbrella",
    "Old Journal", "Silver Locket", "Typewriter",
    "Lantern", "Locked Door", "Half-Burned Photograph",
    "Glass Key", "Blood-Stained Glove", "Golden Compass",
    "Sealed Envelope", "Strange Coin", "Empty Birdcage",
    "Cracked Mirror", "Worn-Out Boots", "Snow Globe",
    "Rusty Key", "Secret Recipe Book", "Black Feather",
    "Broken Crown"
];


const emotions = [
    "Joy", "Fear", "Anger", "Nostalgia",
    "Guilt", "Awe", "Desperation",
    "Hope", "Jealousy", "Peace",
    "Loneliness", "Wonder", "Regret",
    "Amusement", "Suspicion",
    "Embarrassment", "Relief",
    "Bitterness", "Confusion",
    "Determination", "Pride",
    "Shame", "Grief", "Curiosity",
    "Trust", "Betrayal",
    "Excitement", "Contentment",
    "Frustration", "Anticipation"
];



function randomItem(list) {

    return list[Math.floor(Math.random() * list.length)];

}



function generate() {


    document.getElementById("genre").textContent =
        randomItem(genres);


    document.getElementById("object").textContent =
        randomItem(objects);


    document.getElementById("emotion").textContent =
        randomItem(emotions);


}
