let player = {
    name: null,
    gender: "female",
    item1: null,
    item2: null,
    item3: null,
    hp: 10,
    attack: 10,
    speed: 10
};

let charItem02 = "img/no_item.png";
let charItem03 = "img/no_item.png";

uppdateStats();

function uppdateStats() {
    document.getElementById("hpInfo").innerHTML = "hp: " + player.hp;
    document.getElementById("speedInfo").innerHTML = "speed: " + player.speed;
    document.getElementById("attackInfo").innerHTML =
        "attack: " + player.attack;
}

// ---------- gender and name functions ----------- //

function maleGender() {
    var pic = "img/sadida.png";
    document.getElementById("charPic").src = pic.replace();
    player.gender = "male";
}

function femGender() {
    var pic = "img/sadiette.png";
    document.getElementById("charPic").src = pic.replace();
    player.gender = "female";
}

function chName() {
    player.name = getElementByName(nameInput).value;
}
// ------------------ ItemSection01 ---------------- //

let spearButton = document.querySelector("#item101");
let axeButton = document.querySelector("#item102");
let helmetButton = document.querySelector("#item103");
let spearBool = false;
let axeBool = false;
let helmetBool = false;

function spearToggle() {
    spearBool = true;
    spearButton.style.border = "orange 3px solid";
    spearButton.style.borderRadius = "15px";
    player.item1 = "spear";
    player.attack = player.attack + 1;
    player.speed = player.speed + 1;
    let charItem01 = "img/spear.png";
    document.getElementById("char_item101").src = charItem01.replace();
    uppdateStats();
    if (axeBool || helmetBool == true) {
        axeButton.style.border = "#232a22 3px solid";
        helmetButton.style.border = "#232a22 3px solid";
        helmetBool = false;
        axeBool = false;
    }
}

function axeToggle() {
    axeBool = true;
    axeButton.style.border = "orange 3px solid";
    axeButton.style.borderRadius = "15px";
    player.item1 = "axe";
    player.attack = player.attack + 3;
    player.speed = player.speed - 2;
    let charItem01 = "img/axe.png";
    document.getElementById("char_item101").src = charItem01.replace();
    if (spearBool || helmetBool == true) {
        spearButton.style.border = "#232a22 3px solid";
        helmetButton.style.border = "#232a22 3px solid";
        helmetBool = false;
        spearBool = false;
    }
}

function helmetToggle() {
    helmetBool = true;
    helmetButton.style.border = "orange 3px solid";
    helmetButton.style.borderRadius = "15px";
    player.item1 = "helmet";
    let charItem01 = "img/helmet.png";
    document.getElementById("char_item101").src = charItem01.replace();
    if (axeBool || spearBool == true) {
        spearButton.style.border = "#232a22 3px solid";
        axeButton.style.border = "#232a22 3px solid";
        spearBool = false;
        axeBool = false;
    }
}

spearButton.onclick = spearToggle;
axeButton.onclick = axeToggle;
helmetButton.onclick = helmetToggle;

//---------------------------------------------------------------//
// ------------------ ItemSection02 ---------------- //
let docButton = document.querySelector("#item201");
let toolsButton = document.querySelector("#item202");
let armorButton = document.querySelector("#item203");
let docBool = false;
let toolsBool = false;
let armorBool = false;

function docToggle() {
    docBool = true;
    docButton.style.border = "orange 3px solid";
    docButton.style.borderRadius = "15px";
    player.item2 = "document";
    let charItem02 = "img/document.png";
    document.getElementById("char_item102").src = charItem02.replace();
    if (toolsBool || armorBool == true) {
        toolsButton.style.border = "#232a22 3px solid";
        armorButton.style.border = "#232a22 3px solid";
        toolsBool = false;
        armorBool = false;
    }
}

function toolsToggle() {
    toolsBool = true;
    toolsButton.style.border = "orange 3px solid";
    toolsButton.style.borderRadius = "15px";
    player.item2 = "tools";
    let charItem02 = "img/tools.png";
    document.getElementById("char_item102").src = charItem02.replace();
    if (docBool || armorBool == true) {
        docButton.style.border = "#232a22 3px solid";
        armorButton.style.border = "#232a22 3px solid";
        docBool = false;
        armorBool = false;
    }
}

function armorToggle() {
    armorBool = true;
    armorButton.style.border = "orange 3px solid";
    armorButton.style.borderRadius = "15px";
    player.item2 = "armor";
    let charItem02 = "img/armor.png";
    document.getElementById("char_item102").src = charItem02.replace();
    if (docBool || toolsBool == true) {
        docButton.style.border = "#232a22 3px solid";
        toolsButton.style.border = "#232a22 3px solid";
        docBool = false;
        toolsBool = false;
    }
}

//---------------------------------------------------------------//
// ------------------ ItemSection03 ---------------- //
let redPotionButton = document.querySelector("#item301");
let greenPotionButton = document.querySelector("#item302");
let shieldButton = document.querySelector("#item303");
let redPotionBool = false;
let greenPotionBool = false;
let shieldBool = false;

function redPotionToggle() {
    redPotionBool = true;
    redPotionButton.style.border = "orange 3px solid";
    redPotionButton.style.borderRadius = "15px";
    player.item3 = "redpotion";
    let charItem03 = "img/pot_red.png";
    document.getElementById("char_item103").src = charItem03.replace();
    if (greenPotionBool || shieldBool == true) {
        greenPotionButton.style.border = "#232a22 3px solid";
        shieldButton.style.border = "#232a22 3px solid";
        greenPotionBool = false;
        shieldBool = false;
    }
}

function greenPotionToggle() {
    greenPotionBool = true;
    greenPotionButton.style.border = "orange 3px solid";
    greenPotionButton.style.borderRadius = "15px";
    player.item3 = "greenpotion";
    let charItem03 = "img/pot_green.png";
    document.getElementById("char_item103").src = charItem03.replace();
    if (redPotionBool || shieldBool == true) {
        redPotionButton.style.border = "#232a22 3px solid";
        shieldButton.style.border = "#232a22 3px solid";
        redPotionBool = false;
        shieldBool = false;
    }
}

function shieldToggle() {
    shieldBool = true;
    shieldButton.style.border = "orange 3px solid";
    shieldButton.style.borderRadius = "15px";
    player.item3 = "shield";
    let charItem03 = "img/shield.png";
    document.getElementById("char_item103").src = charItem03.replace();
    if (redPotionBool || greenPotionBool == true) {
        redPotionButton.style.border = "#232a22 3px solid";
        greenPotionButton.style.border = "#232a22 3px solid";
        redPotionBool = false;
        greenPotionBool = false;
    }
}

docButton.onclick = docToggle;
toolsButton.onclick = toolsToggle;
armorButton.onclick = armorToggle;
redPotionButton.onclick = redPotionToggle;
greenPotionButton.onclick = greenPotionToggle;
shieldButton.onclick = shieldToggle;

//---------------------------------------------------------------//
