const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i< players.length; i++) {
        let character = {};
        character.name = players[i];
        character.strength = getRandomStrength();
        character.image = `images/super-${i+1}.png`;
        character.type = i%2 === 1?"villain":"hero";
        detailedPlayers.push(character);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() *100)+1; //for getting the value 0 to 100;
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    for (var i = 0; i < players.length; i++) { //creating multipe players
        fragment =

            `<div class="player">
            <img src="${players[i].image}" alt="">
        <div class="name">${players[i].name}</div>
        <div class="strength">${players[i].strength}</div>
    </div>`;

    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}