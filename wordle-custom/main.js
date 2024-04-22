let initialWord = "HELLO";

//define a string for the alphabet
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//define a list of words to use which are 5 letters long
const fiveWords = [
    'ZEBRA', 'XYLOL', 'WRATH', 'VROOM', 'ULTRA', 'TWAIN', 'SWOON', 'RIVEN', 'QUART', 'PRISM',
    'OPINE', 'NYMPH', 'MYTH', 'LYCEE', 'LYMPH', 'KNOLL', 'JUNTA', 'IMPEL', 'HUNCH', 'GYPSY',
    'FROND', 'EPHOD', 'DINGO', 'COMET', 'BLIMP', 'AMITY', 'AGLOW', 'YAHOO', 'ZALMO', 'XEBEC',
    'WRACK', 'VROOM', 'UMIAK', 'TWANG', 'SWART', 'RHINO', 'QUEAN', 'PROMO', 'OVERT', 'NYLGH',
    'MZUNB', 'LYART', 'LYPSK', 'KEEST', 'JINNI', 'IODIC', 'HUNKY', 'GULCH', 'FRUMP', 'ENAMI',
    'DEMIT', 'CAPON', 'BAWDY', 'APORT', 'AIDAS', 'YODEL', 'YAWLS', 'ZAMAN', 'XYSTL', 'WREST',
    'VOZHD', 'UNZIP', 'TWILL', 'SWISH', 'RIVEN', 'QUERY', 'PYRIC', 'OVOID', 'NYMIL', 'MOITY',
    'LYNXO', 'KVASS', 'JOCKO', 'IMBUE', 'HOVER', 'GUYOT', 'FRITH', 'ENOKI', 'DENIM', 'COVEN',
    'BUXOM', 'ABACA', 'ADORE', 'YAMEN', 'YAWNS', 'ZAMAN', 'XENON', 'WRICK', 'VOZHD', 'UNWIN',
    'TWINK', 'SWINE', 'RIVEN', 'QUIRT', 'PYLON', 'OVOID', 'NYJAH', 'MOITY', 'LYNXO', 'KVASS',
    'JOCKO', 'IMBUE', 'HOVER', 'GUYOT', 'FRITH', 'ENOKI', 'DENIM', 'COVEN', 'BUXOM', 'ABACA',
    'ADORE', 'YAMEN', 'YAWNS', 'ZAMAN', 'XENON', 'WRICK', 'VOZHD', 'UNWIN', 'TWINK', 'SWINE',
    'RIVEN', 'QUIRT', 'PYLON', 'OVOID', 'NYJAH', 'MOITY', 'LYNXO', 'KVASS', 'JOCKO', 'IMBUE',
    'HOVER', 'GUYOT', 'FRITH', 'ENOKI', 'DENIM', 'COVEN', 'BUXOM', 'ABACA', 'ADORE', 'YAMEN',
  ];

  const sixWords = [
    "GUITAR", "BANANA", "PURPLE", "COWBOY", "JACKET", "ZOMBIE", "MONKEY", "RABBIT", "YELLOW", "ORANGE",
    "PUDDLE", "BOTTLE", "CANDLE", "WINDOW", "SPIDER", "MUFFIN", "JUNGLE", "PUZZLE", "RIDDLE", "JIGGLE",
    "HUMBLE", "CRUMBS", "BRIDGE", "MIRROR", "TURTLE", "SNOWFL", "PIRATE", "CHEESE", "APPLES", "BUBBLE",
    "FIZZLE", "SIZZLE", "SIZZLY", "CRAZED", "FAIRLY", "BURGER", "WIZARD", "SPIRAL", "JOKING", "CRAVAT",
    "PLAGUE", "GARDEN", "BRANCH", "SPRINK", "WIGGLE", "JIGSAW", "FRIDGE", "ZEBRA", "YOGURT", "CRINGE",
    "CRUNCH", "FLIGHT", "OYSTER", "RAVING", "PANCAK", "YAKIMA", "WALLET", "JACKAL", "JACKET", "TICKLE",
    "TICKLY", "HICCUP", "SNICKY", "SNICKY", "SPRIGS", "SPRITZ", "WHIRLY", "BREEZY", "ZIPPED", "ZIPPER",
    "PEPPER", "COOKIE", "MOBILE", "UNIQUE", "TANGLE", "GALLOP", "TUMBLE", "RUMBLE", "NINJAS", "ROBOTS",
    "ZOOMED", "ZIPPED", "QUIRKY", "HOCKEY", "RHYTHM", "WIZARD", "FIZZLE", "SPROUT", "SPRINT", "MUFFIN",
    "JUGGLE", "JUMBLE", "CIRCUS", "BASKET", "ZOMBIE", "BUBBLE", "SIZZLE", "JIGGLE", "JINGLE", "WIGGLE",
    "DRAGON", "RABBIT", "TURTLE", "CACTUS", "JACKET", "SIZZLY", "JIGSAW", "SPIDER", "MIRROR", "SPRINK",
    "JUMPER", "CRAVAT", "PLAGUE", "CRUNCH", "WIZARD", "WHIRLY", "JOKING", "BREEZY", "HUMBLE", "GUITAR",
    "PURPLE", "MONKEY", "WINDOW", "COWBOY", "BRIDGE", "CRUMBS", "PUZZLE", "CHEESE", "PIRATE", "JUNGLE",
    "PUDDLE", "ZEBRA", "MUFFIN", "FRIDGE", "BOTTLE", "YOGURT", "JOKING", "HUMBLE", "CRUNCH", "PIRATE",
    "CANDLE", "RIDDLE", "SPRIGS", "SPRITZ", "BRANCH", "SPRINT", "PLAGUE", "CRINGE", "HICCUP", "SNICKY",
    "SNICKY", "RUMBLE", "TANGLE", "GALLOP", "TUMBLE", "NINJAS", "ROBOTS", "ZOOMED", "ZIPPED", "QUIRKY",
    "HOCKEY", "RHYTHM", "WIZARD", "FIZZLE", "SPROUT", "MIRROR", "SPIDER", "SPRINK", "BASKET", "JUGGLE",
    "JUMBLE", "CIRCUS", "BUBBLE", "SIZZLE", "JIGGLE", "JINGLE", "WIGGLE", "DRAGON", "RABBIT", "TURTLE",
    "CACTUS", "JACKET", "SPRINT", "SIZZLY", "JIGSAW", "ZOMBIE", "WINDOW", "SPRIGS", "WIGGLE", "WHIRLY",
    "SPRITZ", "BRIDGE", "CRUMBS", "JUMPER", "CRAVAT", "PLAGUE", "CRUNCH", "WIZARD", "BREEZY", "GUITAR",
    "PURPLE", "MONKEY", "WINDOW", "COWBOY", "CHEESE", "PIRATE", "PUZZLE", "JUNGLE", "PUDDLE", "ZEBRA",
    "MUFFIN", "FRIDGE", "BOTTLE", "YOGURT", "CRINGE", "CRUNCH", "HUMBLE", "JOKING", "BRANCH", "SPRINK",
    "CANDLE", "RIDDLE", "SPRIGS", "SPRITZ", "TANGLE", "GALLOP", "TUMBLE", "NINJAS", "ROBOTS", "ZOOMED",
    "ZIPPED", "QUIRKY", "HOCKEY", "RHYTHM", "WIZARD", "FIZZLE", "SPROUT", "MIRROR", "SPIDER", "SPRINK",
    "JUGGLE", "JUMBLE", "CIRCUS", "BASKET", "ZOMBIE", "BUBBLE", "SIZZLE", "JIGGLE", "JINGLE", "WIGGLE",
    "DRAGON", "RABBIT", "TURTLE", "CACTUS", "JACKET", "SIZZLY", "JIGSAW", "SPRINT", "MUFFIN", "MIRROR",
  ];

  const sevenWords = [
    "WIREFOX", "BUZZARD", "JETPACK", "BUCKETS", "SPRINKS", "ZESTFUL", "SHADOWS", "MUFFINS", "RUBIKSC", "WIZARDS",
    "PUZZLES", "JUMPIES", "GALLOPS", "TANGLED", "SPRITES", "ZIGZAGS", "QUICKLY", "HISTORY", "FLICKER", "CHIMNEY",
    "JOGGING", "BUBBLES", "TICKLES", "WIGGLES", "JUGGLES", "HACKERS", "QUARREL", "FIZZLES", "RUMPLES", "CRAVATS",
    "CLOUDED", "BRIDGES", "GARDENS", "CRUMPLE", "CRAFTED", "PLAGUED", "SPRINKY", "TICKLED", "TUMBLER", "WALRUSC",
    "DRAGONS", "RABBITS", "TURTLES", "CACTUSC", "JACKETS", "SIZZLES", "JIGSAWS", "SPRINTS", "MUFFINS", "ZEBRASC",
    "DIZZILY", "CRISPED", "ZESTIER", "QUIRKED", "HOCKEYS", "RHYTHMS", "WIZARDS", "FIZZLED", "SPROUTS", "MIRRORS",
    "SPIDERS", "SPRINKS", "BASKETS", "ZOMBIES", "BUBBLES", "SIZZLES", "JIGGLES", "JINGLES", "WIGGLES", "DRAGONS",
    "RABBITS", "TURTLES", "CACTUSC", "JACKETS", "SIZZLYS", "JIGSAWS", "SPRINTS", "MUFFINS", "ZEBRASC", "JUMPERS",
    "CRAVATS", "PLAGUED", "CRUNCHS", "WIZARDS", "WHIRLYS", "JOKINGS", "BREEZYS", "HUMBLES", "GUITARS", "PURPLES",
    "MONKEYS", "WINDOWC", "COWBOYS", "CHEESES", "PIRATES", "PUZZLES", "JUNGLES", "PUDDLES", "ZEBRAS", "MUFFINS",
    "FRIDGES", "BOTTLES", "YOGURTS", "CRINGES", "CRUNCHS", "HUMBLES", "JOKINGS", "BRANCHS", "SPRINKS", "CANDLES",
    "RIDDLES", "SPRIGGS", "SPRITZS", "BRANCHS", "SPRINTS", "PLAGUES", "CRINGES", "HICCUPS", "SNICKYS", "SNICKYS",
    "RUMBLES", "TANGLES", "GALLOPS", "TUMBLES", "NINJASS", "ROBOTSS", "ZOOMEDS", "ZIPPEDS", "QUIRKYS", "HOCKEYS"
  ];

  const eightWords = [
    "JUMBLING", "CIRCUITS", "BASKETRY", "ZOMBIFIE", "BUBBLING", "SIZZLING", "JIGGLING", "JINGLING", "WIGGLING", "DRAGONET",
    "RABBITRY", "TURTLING", "CACTUSES", "JACKETRY", "SIZZLING", "JIGSAWED", "SPRINTER", "MUFFLING", "ZEBRASIS", "JUMPINGS",
    "CRAVATED", "PLAGUING", "CRUNCHER", "WIZARDLY", "WHIRLIES", "JOKINGLY", "BREEZING", "HUMBLING", "GUITARED", "PURPLING",
    "MONKEYED", "WINDOWED", "COWBOYED", "CHEESEED", "PIRATING", "PUZZLING", "JUNGLING", "PUDDLING", "ZEBRASES", "MUFFLINS",
    "FRIDGING", "BOTTLING", "YOGURTED", "CRINGING", "CRUNCHER", "HUMBLING", "JOKINGLY", "BRANCHES", "SPRINKER", "CANDLING",
    "RIDDLESS", "SPRIGGED", "SPRITZED", "BRANCHES", "SPRINTER", "PLAGUING", "CRINGING", "HICCUPED", "SNICKING", "SNICKING",
    "RUMBLING", "TANGLING", "GALLOPED", "TUMBLING", "NINJASES", "ROBOTICS", "ZOOMEDIN", "ZIPPINGS", "QUIRKIER", "HOCKEYED",
    "RHYTHMIC", "WIZARDRY", "FIZZLING", "SPROUTED", "MIRRORLY", "SPIDERTY", "SPRINKLY", "BASKETED", "ZOMBIFYS", "BUBBLIES",
    "SIZZLIER", "JIGGLIER", "JINGLIER", "WIGGLIER", "DRAGONED", "RABBITED", "TURTLELY", "CACTUSED", "JACKETED", "SIZZLERS",
    "JIGSAWED", "SPRINTED", "MUFFLINS", "ZEBRASES", "JUMPINGS", "CRAVATES", "PLAGUERS", "CRUNCHES", "WIZARDLY", "WHIRLIES",
    "JOKINGLY", "BREEZING", "HUMBLING", "GUITARED", "PURPLING", "MONKEYED", "WINDOWED", "COWBOYED", "CHEESEED", "PIRATING",
    "PUZZLING", "JUNGLING", "PUDDLING", "ZEBRASES", "MUFFLINS", "FRIDGING", "BOTTLING", "YOGURTED", "CRINGING", "CRUNCHER"
  ];

let guesses = 0;

let maxGuesses = 5;

let wordLength = 5;

//define the colors for the boxes based on the length from the initial word
let colors = [
    "bg-slate-100",
    "bg-slate-200",
    "bg-slate-300",
    "bg-slate-400",
    "bg-slate-500",
    "bg-slate-600",
    "bg-slate-700",
    "bg-slate-800",
    "bg-slate-900",
]

let finalWord = "";

switch(wordLength) {
    case 5:
        finalWord = fiveWords[Math.floor(Math.random() * fiveWords.length)];
    break;
    case 6:
        finalWord = sixWords[Math.floor(Math.random() * sixWords.length)];
    break;
    case 7:
        finalWord = sevenWords[Math.floor(Math.random() * sevenWords.length)];
    break;
    case 8:
        finalWord = eightWords[Math.floor(Math.random() * eightWords.length)];
    break;

}

//get the distance between each letter of the initial word and the final word
let distances = [];
for (let i = 0; i < initialWord.length; i++) {
    let initialLetter = initialWord[i];
    let finalLetter = finalWord[i];

    let initialIndex = alphabet.indexOf(initialLetter);
    let finalIndex = alphabet.indexOf(finalLetter);

    let distance = finalIndex - initialIndex;
    distances.push(distance);
}

console.log(distances);

//split the word into its letters
let letters = initialWord.split("");

//make the letters uppercase
letters = letters.map((letter) => letter.toUpperCase());

let givenDiv = document.createElement("div");
givenDiv.className = "flex flex-row gap-2";

//create a div for each letter which is a box
// letters.forEach((letter) => {
//     let box = document.createElement("div");
//     box.className = "box bg-slate-300 w-12 h-12 text-center font-semibold text-2xl p-2 ring-1 ring-slate-300";
//     box.innerHTML = letter;
//     givenDiv.appendChild(box);
// });

function updateGuessBoard(){

    guesses = 0;

    //clear the guesses
    document.getElementById("guesses").innerHTML = "";

    for (let i = 0; i < maxGuesses; i++) {
        let row = document.createElement("div");
        row.id = `row-${i}`;
        row.className = "flex flex-row gap-2 my-2";
        for (let j = 0; j < wordLength; j++) {
            let box = document.createElement("div");
            box.className = "box sm:w-16 sm:h-16 h-12 w-12 text-center font-semibold text-2xl p-2 bg-slate-300";
            row.appendChild(box);
        }
        document.getElementById("guesses").appendChild(row);
    }
}

updateGuessBoard();

function updateLength(){
    //clear the word
    console.log("updateLength")
}
    
function showKeys(){
    console.log('showKeys')
    document.getElementById("key_body").style.visibility = "visible";
    document.getElementById("key_body").style.height = "auto";
    document.getElementById("keyButton").innerHTML = "Hide"
}

function handleKeyToggle(){
    console.log('handleKeyToggle')
    if(document.getElementById("key_body").style.visibility == "hidden"){
        showKeys();
    }
    else{
    document.getElementById("key_body").style.visibility = "hidden";
    document.getElementById("key_body").style.height = "0px";
    document.getElementById("keyButton").innerHTML = "Show"

    }
}

function createRow(word){

    if(word == ""){
        return;
    }

    if(word.length < wordLength){
        alert("Word is too short");
        return;
    }

    //clear the distances
    distances = [];

    let row = document.createElement("div");
    row.className = "flex flex-row gap-2 mt-2";
    // based on the input, create a box for each letter
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        //calculate the distance between the letter and the final word
        let letterDistance = alphabet.indexOf(letter) - alphabet.indexOf(finalWord[i]);
        distances.push(letterDistance); 

        let box = document.createElement("div");
        //set the color based on the distance
        
        //since there are only 10 colors, we need to make sure the distance is within the range
        let colorIndex = Math.min(Math.abs(letterDistance), colors.length - 1);
        console.log(colorIndex)
        let color = colors[colorIndex];

        if (letter == finalWord[i]) {
            console.log('match')
            color = "bg-green-200";
        }

        box.className = `box w-16 h-16 text-center font-semibold text-2xl p-4 ${color}`;
        if (color.includes("bg-slate-")) {
            box.classList.add("text-white");
        }
        box.innerHTML = letter;
        row.appendChild(box);
        document.getElementById("in").value = "";
    }
    console.log(distances)

    guesses++;
    // document.getElementById("guesses").appendChild(row);

    //replace the boxes in the (guesses) row with the new row
    document.getElementById(`row-${guesses - 1}`).replaceWith(row);

//win condition
if (word == finalWord) {
    alert("Correct!");
}

if (guesses == maxGuesses && word != finalWord){
    document.getElementById("in").visible = false;
    alert("You lost. The word was " + finalWord + ".");
}
else{
    document.getElementById("in").focus
}
}

document.getElementById("givenWord").appendChild(givenDiv);
//add the initial word to the page
// document.getElementById("givenWord").innerHTML = initialWord;

// event listener for enter
document.getElementById("in").addEventListener("keyup", function (event) {

    let word = document.getElementById("in").value.toUpperCase();

    if(event.key == 'Enter'){
        createRow(word)
    }
});

function updateGuessCalled(){
    //this function is called when the user changes the length of the word
    maxGuesses = document.getElementById("guessesInput").value;
    updateGuessBoard();
}

function updateLengthCalled(){
    wordLength = document.getElementById("lengthInput").value;
    console.log(wordLength)
    updateGuessBoard()
}

document.getElementById("in").addEventListener("keyup", checkInput);

function checkInput(){

    console.log('checkInput')
    //check to make sure the length of the input is the same as the length of the word
    let input = document.getElementById("in").value;
    if (input.length > wordLength){
        //cut the input
        console.log('cutting')
        document.getElementById("in").value = input.substring(0, wordLength);
    }
}