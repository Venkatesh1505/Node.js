function placeAnOrder(orderNumber){
	console.log("Order placed : ",orderNumber);
	cookAndDeliverFood(function(){
		console.log("Customer order delivered : ",orderNumber);
	});
}
function cookAndDeliverFood(callback){
	setTimeout(callback,5000);
}
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
