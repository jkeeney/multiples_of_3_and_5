


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

var even_fibonacci_sum = function () {
	
	var topBoundary = document.getElementById("fibLimit").value;
	var fibSeq = [1, 1];
	var result = 0;
	
	//populate an array that contains the Fibonacci sequence up to the topBoundary
	while(fibSeq[fibSeq.length-1] < topBoundary){
		fibSeq.push(fibSeq[fibSeq.length-2] + fibSeq[fibSeq.length-1]);
	}
	
	var numFib = fibSeq.length-1;
	
	for (i = 0; i < numFib; i++){
		
		if (fibSeq[i]%2 === 0){
			result += fibSeq[i];
		}
		
	}
	
	document.getElementById("numOfValues").innerHTML = numFib;
	document.getElementById("fibSetLimit").innerHTML = topBoundary;
	document.getElementById("evenSum").innerHTML = result;
	
	return;
}