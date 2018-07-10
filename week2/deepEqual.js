let o1 = {here: {is: "an"}, object: 2};
let o2 = {here: {is: "an"}, object: 2};

console.log(deepEqual(o1, o2));

function deepEqual(obj1, obj2) {
	if(isObject(obj1) && isObject(obj2)) //if they're both objects
	{
		
		//obtain the keys
		let keys1 = Object.keys(obj1);
		let keys2 = Object.keys(obj2);

		if(keys1.length == keys2.length) //if they have the same number of keys
		{

			for(let i = 0; i < keys1.length; i++) //for each key in object 1
			{
				if(keys2.includes(keys1[i])) //check if it's a key for object 2
				{
					if(!deepEqual(obj1[keys1[i]], obj2[keys2[i]])) //if so, check property val
					{
						return false; //if vals are different, return false
					}
				} else {
					return false; //if not a key for object 2, return false
				}
			}
		} else {
			return false;
		}

	} else { //if they're not objects
		return obj1 === obj2; //simply compare and return the value
	}

	return true;
}

function isObject(o) {
	if(typeof(o) == "object" && o != "null")
	{
		return true;
	}

	return false;
}