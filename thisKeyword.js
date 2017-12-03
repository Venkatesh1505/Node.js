var venky = {
	printThis : function(){
		console.log("my name is venky");
		console.log(this == venky);
	}
}
venky.printThis();

function printThiss(){
	console.log("this is global function");
	console.log(this == global);
}
printThiss();