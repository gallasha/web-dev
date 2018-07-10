function range(start, end, inc=(end < start) ? -1: 1) { //inc is default 1, -1 
	let r = []; //initialize an empty array
	
	if(inc >= 1) {
		//positive inc loop
		for (let i = start; i <= end; i += inc) { 
		
		r.push(i); //add the value to the back
		//r[i - start] = i; //this works too
		}
	} else {
		//negative inc loop
		for (let i = start; i >= end; i += inc) { 
		
		r.push(i); //add the value to the back
		//r[i - start] = i; //this works too
		}
	}

	return r; //return the array
}

function sum(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i]; //increment it
	}

	return sum;
}

console.log(sum(range(1,10)));