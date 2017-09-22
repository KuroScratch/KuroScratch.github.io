// downloaded amount of RAM in Byte
var dld = 0;

// RAM increase in Byte
var perclick = 128;
var speed = 256;

// upgrade costs
var speedupgrade = 1024*16;
var clickupgrade = 1024*8;

// main button clicked once?
var started = false;

// total
var total = 0;
var timesclicked = 0;
var timewasted = 0;

// returns unit for given number
function whatunit(number) {
	if (number > Math.pow(2,80)) {
		return "YB (YottaByte)";
	} else {
		if (number > Math.pow(2, 70)) {
			return "ZT (ZettaByte)";
		} else {
			if (number > Math.pow(2, 60)) {
				return "EB (ExaByte)";
			} else {
				if (number > Math.pow(2, 50)) {
					return "PB (PetaByte)";
				} else {
					if (number > Math.pow(2, 40)) {
						return "TB";
					} else {
						if (number > Math.pow(2, 30)) {
							return "GB";
						} else {
							if (number > Math.pow(2, 20)) {
								return "MB";
							} else {
								if (number > Math.pow(2, 10)) {
									return "KB";
								} else {
									return "Byte";
								}
							}
						}
					}
				}
			}
		}
	}
}

// converts and adds unit to given number
function converter(number) {
	var temp = number;
	var unit = whatunit(number);

	switch (unit) {
		case "YB (YottaByte)": 
			return (temp / Math.pow(2, 80)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "ZT (ZettaByte)": 
			return (temp / Math.pow(2, 70)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "EB (ExaByte)": 
			return (temp / Math.pow(2, 60)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "PB (PetaByte)":
			return (temp / Math.pow(2, 50)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "TB":
			return (temp / Math.pow(2, 40)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "GB":
			return (temp / Math.pow(2, 30)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "MB":
			return (temp / Math.pow(2, 20)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "KB":
			return (temp / Math.pow(2, 10)).toFixed(2).replace(/\.00$/,"") + unit;
			break;
		case "Byte":
			return temp.toFixed(2).replace(/\.00$/,"") + unit;
			break;
	}
}
 
// main button
function but() {
	if (started) {
		dld += perclick;
		total += perclick;
		timesclicked++;
		document.getElementById("downloaded").innerHTML = "Downloaded " + converter(dld) + " of RAM.";
		document.getElementById("sum").innerHTML = "You wasted " + timewasted + " seconds clicked " + timesclicked + " times and downloaded a total of " + converter(total) + " of RAM.";
	} else {
		started = true;
		timesclicked ++;
		document.getElementById("dlpclick").innerHTML = "Downloading " + converter(perclick) + " per click"
		document.getElementById("sum").innerHTML = "You wasted " + timewasted + " seconds clicked " + timesclicked + " times and downloaded a total of " + converter(total) + " of RAM.";
	}
}

//speedupgrade multiplier
var speedmult = 1.4;
//speedupgrade cost multiplier
var speedcostmult = 1.8;

//TODO setters for speedupgr. and speedcostupgr. multipliers
//fun setspeedmult
function setspeedmult() {
	speedmult = Number(document.getElementById("dlspeedmult").value);
}
//fun setspeedcostmult
function setspeedcostmult() {
	speedcostmult = Number(document.getElementById("dlspeedcostmult").value);
}

// speedupgrade button
function incrspd() {
	if (dld > speedupgrade) {
		speed *= speedmult;
		dld -= speedupgrade;
		speedupgrade *= speedcostmult;
		document.getElementById("dlspeed").innerHTML = "Current download speed: " + converter(speed) + "/s";
		document.getElementById("downloaded").innerHTML = "Downloaded " + converter(dld) + " of RAM.";
		document.getElementById("speedbtn").innerHTML = converter(speedupgrade) + " RAM";
	} else {
		return window.alert("Not enough RAM!");
	}
}

//clickupgrade multiplier
var clickmult = 1.5;
//clickupgrade cost multiplier
var clickcostmult = 2.5;

//TODO setters for clickupgr. and clickcostupgr. multipliers
//fun setclickmult
function setclickmult() {
	clickmult = Number(document.getElementById("clickspeedmult").value);
}
//fun setclickcostmult
function setclickcostmult() {
	clickcostmult = Number(document.getElementById("clickspeedcostmult").value);
}

// clickupgrade button
function incrclck() {
	if (dld > clickupgrade) {
		perclick *= clickmult;
		dld -= clickupgrade;
		clickupgrade *= clickcostmult;
		document.getElementById("dlpclick").innerHTML = "Downloading " + converter(perclick) + " per click"
		document.getElementById("downloaded").innerHTML = "Downloaded " + converter(dld) + " of RAM.";
		document.getElementById("clickbtn").innerHTML = converter(clickupgrade) + " RAM";
	} else {
		return window.alert("Not enough RAM!")
	}
}

// increase per second
setInterval(
	function () {
		if (started) {
			dld += speed;
			total += speed;
			timewasted++;
			document.getElementById("downloaded").innerHTML = "Downloaded " + converter(dld) + " of RAM.";
			document.getElementById("sum").innerHTML = "You wasted " + timewasted + " seconds clicked " + timesclicked + " times and downloaded a total of " + converter(total) + " of RAM.";
		}
	}
	, 1000) 




// easter egg sound
function play() {
  	var audio = document.getElementById("audio");
  	audio.volume = 0.7;
  	audio.play();
  }
