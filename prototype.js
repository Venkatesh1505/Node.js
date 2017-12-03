function User(){
	this.name = "";
	this.score = 100;
	this.giveScore = function(targetPlayer){
		targetPlayer.score += 1
		console.log(this.name + "gave 1 point to "+ targetPlayer.name);
	}
}
var venky = new User();
venky.name = "venky";
var naga = new User();
naga.name = "naga";
venky.giveScore(naga);
console.log("Score : "+ naga.score);
User.prototype.attack = function(targetPlayer){
	targetPlayer.score -= 3;
	console.log(this.name + "attacked "+ targetPlayer.name);
}
naga.attack(venky);
console.log("Score : "+ venky.score);
