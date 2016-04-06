


var multiples_of_3_and_5 = function() {
	
	var topBoundary = document.getElementById("usrLimit").value;
	var mulList = [];
	var result = 0;
	
	//populate an array that contains all multiples of 3 or 5 below topBoundary
	for (i = 1; i < topBoundary; i++) {
		if (i%3 === 0 || i%5 ===0) {
			mulList.push(i);
		}
	}
	
	var numMul = mulList.length;
	
	//add together all the numbers in mulList and return the sum
	for(i = 0; i<mulList.length; i++){
		result += mulList[i];
	}
	
	document.getElementById("numOfMultiples").innerHTML = numMul;
	document.getElementById("limit").innerHTML = topBoundary;
	document.getElementById("multipleSum").innerText = result;
	
	return;
}

