//Question 1

let score = 30;

if (score > 75){
	console.log("A");
}else if(score > 64 && score < 75){
	console.log("B");
}else if(score > 54 && score < 65){
	console.log("C");
}else if(score > 44 && score < 55){
	console.log("D");
}else{
	console.log("FAIL");
}

//Question 2
for (let i = 0; i <= 10; i++){
	if ((i % 2) == 0){
		console.log(i +" is Divisible by 2");
	}else{
		console.log(i + " is Not divisible by 2");
	}
}
