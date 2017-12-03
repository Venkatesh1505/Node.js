var venky = {
	favFood : "Briyani",
	favSeries : "Friends"
};

var Naga = venky;
Naga.favFood = "Maggi";
console.log("Naga fav food : ",Naga.favFood);
console.log("venky fav food : ",venky.favFood);