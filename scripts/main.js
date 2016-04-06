


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
	
	document.getElementById("result1").innerHTML = "The sum of all multiples of 3 or 5 below " + topBoundary + " is: " + result;
	
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
	
	document.getElementById("result2").innerHTML = "The sum of all even Fibonacci numbers below " + topBoundary + " is: " + result;
	
	return;
}

var nextPrime = function (value){
	if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}

var find_primes = function (limit) {
	
	var value = 0, result = [];
	
	value = nextPrime(value);
	result.push(value);
	
	for (var i = 0; result[i] < limit; i++) {
		value = nextPrime(value);
		result.push(value);
	}
	
	result.splice(result.length-1,1);
	
	return result;
}

var largest_prime_factor = function () {
	
	var number = document.getElementById("number").value;
	
	//create an array that will hold all primes below half the value of number
	var primes_array = find_primes(Math.floor(number/2));
	
	//create and populate an array of all primes that are factors of number
	var prime_factors = [];
	for (i = 0; i < primes_array.length; i++){
		if (number % primes_array[i] === 0){
			prime_factors.push(primes_array[i]);
		}
	}
	
	document.getElementById("result3").innerHTML = "The prime factors of " + number + " are: " + prime_factors;
	
	return;
}







