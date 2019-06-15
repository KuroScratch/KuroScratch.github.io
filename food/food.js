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
		console.log(i);
		foods += food[random[i]] + "<br>";
		console.log(food[random[i]]);
	}

		document.getElementById("out").innerHTML = foods;

}


var food = [
"Pancakes",
"Pesto",
"Spaghetti",
"Lasagne",
"Tortellini",
"Nudelauflauf",
"Mac'n'Cheese",
"Maultaschen",
"Spätzle",
"Gebratener Reis",
"Risotto", 
"Curry",
"Ofenkartoffeln",
"Gemüsepfanne",
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