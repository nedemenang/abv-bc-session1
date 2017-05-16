
module.exports = {
//computeAverage: (num1, num2, num3) => {

	aritGeo: (array) =>
	{

		if(array.length < 1) return 0;

		let difference = array[1] - array[0];
		let ratio = array[1] / array[0];

		let isArithmetic = true;
		let isGeometric = true;

		for(let i = 0; i < array.length - 1; i++)
		{
		    if( array[i + 1] - array[i] !== difference )
		      isArithmetic = false;
		    if(array[i + 1] / ratio !== array[i])
		      isGeometric = false;
		}

		if(isArithmetic === true)
		    return "Arithmetic";
		else if(isGeometric === true)
		    return"Geometric";
		else
		    return -1;
	},

	findMinMax: (array) =>
	{
		if(array.length < 1) return 0;

		  let minValue = array[0];
		  let maxValue = array[0];
		  let outputArray = [];
		  for (let i = 0; i < array.length; i++) {
		        if (array[i] < minValue) 
		        {
		            minValue = array[i];
		        }
		        
		        if(array[i] > maxValue)
		        {
		          maxValue = array[i];
		        }
		    }
		    
		    if(minValue === maxValue)
		    {
		      outputArray.push(minValue);
		    }
		    else
		    {
		      
		      outputArray.push(minValue);
		      outputArray.push(maxValue);
		    }
		    return outputArray;
	}
}

