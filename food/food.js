var random = [];

function randomNumber() {
	return rng = Math.floor(Math.random() * Math.floor(food.length));
}

function numberArray() {

	var temp;
	random = [];

	while(random.length < 5) {
		temp = randomNumber();
		if (random.indexOf(temp) == -1) {
			random.push(temp);
		}
	}

}

var foods = "";

function foodomizer() {
	numberArray();

	for (var i = 0; i < 5; i++) {
		foods += food[random[i]] + "<br>";
	}

		document.getElementById("out").innerHTML = foods;

}

// Ü, ü     \u00dc, \u00fc
// Ä, ä     \u00c4, \u00e4
// Ö, ö     \u00d6, \u00f6
// ß        \u00df


var food = [
"Pancakes",
"Pesto",
"Spaghetti",
"Lasagne",
"Tortellini",
"Nudelauflauf",
"Mac'n'Cheese",
"Maultaschen",
"Sp\u00e4tzle",
"Gebratener Reis",
"Risotto", 
"Curry",
"Ofenkartoffeln",
"Gem\u00fcsepfanne",
"Schnitzel",
"Was mit Fisch",
"Tomate-Mozzarella Huhn",
"Chicken Tendies",
"Ofentoast",
"Pizza",
"Flammkuchen",
"Chili",
"Shakshuka",
"Kartoffelgratin",
"Pita",
"Schupfnudel-Paprika Pfanne"
];
