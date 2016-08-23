/*global Chance, chance, Snap, console, alert*/
var centerH = window.innerWidth / 2,
    centerV = window.innerHeight / 2,
    boundSize = window.innerWidth / 3,
    quarterSize = boundSize / 4,
    xStart = centerH - (boundSize / 2),
    yStart = centerV - (boundSize / 2),
    
    //seededChance is only used to generate the hashes, then those values are used for URLs and Colors, sizes, etc.
    seededChance = new Chance(chance.hash({length: 3}));

//COLORS
var palette = [["422ef4", "ff84a8", "ffdd8e", "ffffff"], //load these from a txt file?
               ["000000", "ff6050", "95e2e7", "fff8d3"],
               ["1b1e9b", "c342a3", "44c0ff", "f6d579"],
               ["1e2e62", "f9517e", "44c0ff", "dce8eb"],
               ["3a1464", "ef3c25", "fbb03b", "ffffff"],
               ["1b1e9b", "e1116a", "ffcd06", "75d9f8"],
               ["921e51", "c93559", "66d3a9", "fff8d3"],
               ["cc3e3e", "ff6050", "75d9f8", "ffffff"],
               ["094bd1", "ffcd06", "93e3da", "fff5c5"],
               ["000000", "147dff", "cccccc", "ffffff"],
               ["000000", "fa2cc4", "02feff", "ffffff"],
               ["000000", "147dff", "ffff02", "ffffff"],
               ["c64f4f", "7594ff", "eadcb9", "c2fff6"],
               ["000000", "4d4d4d", "cccccc", "ffffff"],
               ["000000", "ff6050", "cccccc", "ffffff"],
               ["000000", "ff6050", "cccccc", "ffffff"],
               ["000000", "fa2cc4", "cccccc", "ffffff"],
               ["000000", "e1116a", "147dff", "ffffff"]];

function genArt(g) {
    "use strict";
    
    var s = new Snap("#svg").attr({
            viewBox: "0 0 " + window.innerWidth + " " + window.innerHeight,
            width: "100%",
            height: "100%"
        }),
        
        // TO DO: Iterate through rect[] dyanamically instead of hardcoding all this in....
        bg = s.circle(centerH, centerV, 5000, 5000), //big ass circle for the bg
        rect0 = s.rect(xStart, yStart, quarterSize, quarterSize),
        rect1 = s.rect(xStart + (quarterSize), yStart, quarterSize, quarterSize),
        rect2 = s.rect(xStart + (quarterSize * 2), yStart, quarterSize, quarterSize),
        rect3 = s.rect(xStart + (quarterSize * 3), yStart, quarterSize, quarterSize),
        rect4 = s.rect(xStart, yStart + quarterSize, quarterSize, quarterSize),
        rect5 = s.rect(xStart + quarterSize, yStart + quarterSize, quarterSize, quarterSize),
        rect6 = s.rect(xStart + (quarterSize * 2), yStart + quarterSize, quarterSize, quarterSize),
        rect7 = s.rect(xStart + (quarterSize * 3), yStart + quarterSize, quarterSize, quarterSize),
        rect8 = s.rect(xStart, yStart + (quarterSize * 2), quarterSize, quarterSize),
        rect9 = s.rect(xStart + quarterSize, yStart + (quarterSize * 2), quarterSize, quarterSize),
        rect10 = s.rect(xStart + (quarterSize * 2), yStart + (quarterSize * 2), quarterSize, quarterSize),
        rect11 = s.rect(xStart + (quarterSize * 3), yStart + (quarterSize * 2), quarterSize, quarterSize),
        rect12 = s.rect(xStart, yStart + (quarterSize * 3), quarterSize, quarterSize),
        rect13 = s.rect(xStart + quarterSize, yStart + (quarterSize * 3), quarterSize, quarterSize),
        rect14 = s.rect(xStart + (quarterSize * 2), yStart + (quarterSize * 3), quarterSize, quarterSize),
        rect15 = s.rect(xStart + (quarterSize * 3), yStart + (quarterSize * 3), quarterSize, quarterSize),
        
        gen = new Chance(g),
        shade = gen.integer({min: 0, max: 15});

    //ATTRIBUTES
    bg.attr({fill: "#" + palette[shade][3] });  //creates a background color thats always the lightest shade
    // TO DO: Iterate through dyanamically instead of hardcoding all this in....
    rect0.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect1.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect2.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect3.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect4.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect5.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect6.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect7.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect8.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect9.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect10.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect11.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect12.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect13.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect14.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
    rect15.attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
}

function generateHash() {
    "use strict";
    location.replace('http://127.0.0.1:59225/#' + seededChance.hash({length: 3}));
    genArt(seededChance.hash({length: 3}));
}

function checkPage() {
    "use strict";
    var sPath = window.location.pathname,
        sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    
    if (sPage === "index.html") {
        generateHash();
    }
}

function sameHash() {
    "use strict";
    var sHash = window.location.hash.substring(window.location.hash.lastIndexOf('#') + 1);
    console.log(sHash);
    genArt(sHash);
}

var s;
window.onload = function () {
    "use strict";
    sameHash();
};

window.onkeydown = function (e) {
    "use strict";
    switch (e.keyCode) {
    case 37:
        generateHash();
        break;
    case 38:
        generateHash();
        break;
    case 39:
        generateHash();
        break;
    case 40:
        generateHash();
        break;
    }
};