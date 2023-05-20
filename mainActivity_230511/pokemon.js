// DE GUZMAN, Gymuel D.

// trainer constructor
function Trainer(name, pokeTeam){
	this.name = name;
	this.pokeTeam = pokeTeam;
};


// pokemon constructor
function Pokemon(name, level, spMove){
	this.name = name;
	this.level = level;
	this.atkPts = Math.round(5 + (level * 2.2));
	this.hpPts = (10 + (level * 5));
	this.maxHp = this.hpPts;
	this.spMove = spMove;

	// faint when lost
	this.faint = function(){
		console.log(this.name, "has fainted!");
	}

	// basic attack common to all pokemon
	this.tackle = function(){
		console.log(this.name, "used TACKLE.")
	}

	// special attack, has more damage
	this.special = function(){
		console.log(this.name, "used", this.spMove , ".")
	}

	// lessens health when attacked
	this.takeDmg = function(dmgPts){
		this.hpPts = this.hpPts - dmgPts;
		if (this.hpPts <= 0){
			this.hpPts = 0;
		}
		console.log(this.name + "'s HP went down to " + this.hpPts + "/" + this.maxHp + ".")
	}
};

// instantiating user pokemon objects
let pikachu = new Pokemon("PIKACHU", 16, "THUNDER BOLT");
let charmander = new Pokemon("CHARMANDER", 14, "FLAMETHROWER");
let greninja = new Pokemon("GRENINJA", 17, "HYDRO PUMP");
let bulbasaur = new Pokemon("BULBASAUR", 15, "VINE WHIP");

// instantiating foe pokemon objects
let chikorita = new Pokemon("CHIKORITA", 17, "RAZOR LEAF");
let onix = new Pokemon("ONIX", 16, "ROCK THROW");
let geodude = new Pokemon("GEODUDE", 16, "ROCK SMASH");
let marshtomp = new Pokemon("MARSHTOMP", 14, "MUD SLIDE");

// instantiating trainers, containing pokemon list
let you = new Trainer("Ash", [pikachu, charmander, greninja, bulbasaur]);
let foe = new Trainer("Brock", [chikorita, onix, geodude, marshtomp]);

// randomizing function for auto generated foe actions
function random(min, max) {
    return Math.round(Math.random() * (max - min) ) + min;
};


		
// main battle sequence
function battle(){
	// Foe pokemon selection using random 
	foeIndex = random(0, (foe.pokeTeam.length));
	console.log(foe.name, "has brought out his", foe.pokeTeam[foeIndex].name + "!");
	console.log(" ");

	
	// Player pokemon selection using user input
		console.log("Choose your Pokemon:");
		for (let i = 0; i < you.pokeTeam.length; i++){
			console.log("[" + i + "] " + you.pokeTeam[i].name)
		};
		let youIndex = prompt("Choose your Pokemon: ")
		while(you.pokeTeam[youIndex].hpPts <= 0){
			console.log("You can't use fainted Pokemons. Please choose again.")
			youIndex = prompt("Choose your Pokemon: ")
		}
		console.log("I choose you,", you.pokeTeam[youIndex].name,"[Lvl", you.pokeTeam[youIndex].level + "]!");
		console.log(" ");


	// Pokemon vs pokemon battle sequence
	while (you.pokeTeam[youIndex].hpPts > 0 || foe.pokeTeam[foeIndex].hptPts > 0){

		// Player attack sequence
		console.log("Choose your next action:")
		console.log("     [0] Tackle");
		console.log("     [1]", you.pokeTeam[youIndex].spMove);
		console.log(" ");

		let youMove = prompt("Make your move:");
		if (youMove == 0){
			you.pokeTeam[youIndex].tackle();
			foe.pokeTeam[foeIndex].takeDmg(you.pokeTeam[youIndex].atkPts);
		} else if (youMove == 1) {
			you.pokeTeam[youIndex].special();
			foe.pokeTeam[foeIndex].takeDmg(Math.round(you.pokeTeam[youIndex].atkPts * 1.2));
		} else{
			console.log("Invalid Input");
		};
		console.log(" ");

		if(foe.pokeTeam[foeIndex].hpPts <= 0){
			foe.pokeTeam[foeIndex].faint();
			break;
		}


		// Enemy attack sequence
		let foeMove = random(0, 1);
		if (foeMove == 0){
			foe.pokeTeam[foeIndex].tackle();
			you.pokeTeam[youIndex].takeDmg(foe.pokeTeam[foeIndex].atkPts);
		} else if (foeMove == 1) {
			foe.pokeTeam[foeIndex].special();
			you.pokeTeam[youIndex].takeDmg(Math.round(foe.pokeTeam[foeIndex].atkPts * 1.2));
		}
		console.log(" ");

		if(you.pokeTeam[youIndex].hpPts <= 0){
			you.pokeTeam[youIndex].faint();
			break;
		}
	}
}


// main function
function main(){
	console.log(foe.name, "has challenged ", you.name, "in a Pokemon Battle!");
	battle();
}

// main call
main();