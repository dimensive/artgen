/*global Chance, chance, Snap, console, alert, window, location,*/
/*jslint plusplus: true*/

var centerH = window.innerWidth / 2,
    centerV = window.innerHeight / 2,
    boundSize = window.innerWidth / 3,
    quarterSize = boundSize / 4,
    xStart = centerH - (boundSize / 2),
    yStart = centerV - (boundSize / 2),

    seededChance = new Chance(chance.hash({length: 3}));

    //seededChance is only used to generate the hashes, then those values are used for URLs and Colors, sizes, etc.

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
    
    console.log("genArt " + g);

    //new snap viewbox
    var s = new Snap("#svg").attr({
            viewBox: "0 0 " + window.innerWidth + " " + window.innerHeight,
            width: "100%",
            height: "100%"
        }),
        
        bg = s.circle(centerH, centerV, 5000, 5000), //big ass circle as a background for now (find a better bg solution???)

        gen = new Chance(g),
        shade = gen.integer({min: 0, max: 15}),

        x = 0,
        y = 0;

    var nodes = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];

    for (x = 0; x < nodes.length; x++) {
        var node = nodes[x];
        for (y = 0; y < node.length; y++) {
            node[y] = s.rect(xStart + (quarterSize * x), yStart + (quarterSize * y), quarterSize, quarterSize);
            node[y].attr({fill: "#" + palette[shade][gen.integer({min: 0, max: 3})]});
        }
    }

    bg.attr({fill: "#" + palette[shade][3] });  //creates a background color thats always the lightest shade
}

function generateHash() {
    "use strict";
    console.log("generateHash" + seededChance.hash({length: 3}));
    //location.replace(location.protocol  + '/#' + seededChance.hash({length: 3}));
    location.hash = seededChance.hash({length: 3}); // this replaces line directly above, but now shows thing/index.html#gen
    genArt(seededChance.hash({length: 3}));
}


//generates art based on the same hash
//if its the first window being loaded then it is
function sameHash() {
    "use strict";
    var seededChance = new Chance(chance.hash({length: 3}));
    var sHash = window.location.hash.substring(window.location.hash.lastIndexOf('#') + 1);
    console.log("sameHash " + sHash);
    genArt(sHash);
}

var s;
window.onload = function () {
    "use strict";
    console.log("onLoad");
    //generateHash();
    //hoverTest();
    sameHash();
};

window.onkeyup = function (e) {
    "use strict";
    switch (e.keyCode) {
    case 37:
        console.log("onkeyup");
        generateHash();
        break;
    case 38:
        console.log("onkeyup");
        generateHash();
        break;
    case 39:
        console.log("onkeyup");
        generateHash();
        break;
    case 40:
        console.log("onkeyup");
        generateHash();
        break;
    }
};
