/** 
 * Multiple choice exercise, computing the Encryption Key
 * 
 * Author: Cheenou Thao
 */

(function() {
    "use strict";
    var my_array = [];
    
    var rsaproj_ex3 = {
	option: [0,0,0],


    /*
     * This function creates an array for each variable such that each index coordinates with one another. 
     * NOTE: Due to javascript having a max integer of 9007199254740991, 'm' only goes up to 21 and 'e' only goes up to 12.
    */
	varValues: function(variableIndex) {
	    var i;
        var n;
        var firstPrime;
        var secondPrime;
        var prime_arr = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        var n_arr = [];
        var m_arr = [];
        var e_arr = [];
        var variables = [];
        
 
        // To get values for the 'n' values, we multiply two different prime numbers from the array of prime numbers above
        for(i = 0; i < 4; i++)
        {
            firstPrime = prime_arr[Math.floor((Math.random() * 25))];
            secondPrime = prime_arr[Math.floor((Math.random() * 25))];
            while(secondPrime == firstPrime)
            {
                secondPrime = prime_arr[Math.floor((Math.random() * 25))];      
            }       
            n = firstPrime * secondPrime;
            n_arr[i] = n;
        }
        
        // To get values for the 'm' values, we randomly choose an integer between 1 and 21 or between 1 and n if n is less than 21
        for(i = 0; i < n_arr.length; i++)
        {
            if(n <= 21)
                m_arr[i] = Math.floor((Math.random() * (n-1)) + 1);
            else
                m_arr[i] = Math.floor((Math.random() * 21) + 1);
        }
        
        // To get values for the 'e' values, we randomly choose an integer between 1 and 12 or between 1 and n if n is less than 12
        for(i = 0; i < n_arr.length; i++)
        {
            if(n <= 12)
                m_arr[i] = Math.floor((Math.random() * (n-1)) + 1);
            else
                e_arr[i] = Math.floor((Math.random() * 12) + 1);
        }
        
	   variables[0] = n_arr[variableIndex];
       variables[1] = m_arr[variableIndex];
       variables[2] = e_arr[variableIndex];
       return variables;
	    
	},
	
    
    /*
     * This function computes the Encrypted Key using the chosen values
     */
	answer: function(variableValues) {
        var n = variableValues[0];
        var m = variableValues[1];
        var e = variableValues[2];
        var mToTheE;
        var answer;
	    var temp;
        
        //Computing Answer
        mToTheE = Math.pow(m,e);
        answer = mToTheE % n;
        my_array[0] = answer;

        //Compute a valid random answer after modding 'n' for option 1
        temp = Math.floor((Math.random() * n) + 1);
        while(temp == answer )
        {
            temp = Math.floor((Math.random() * n) + 1);
        }
        my_array[1] = temp;
        
        //Compute a valid random answer after modding 'n' for option 2
        temp = Math.floor((Math.random() * n) + 1);
        while(temp == answer || temp == my_array[1])
        {
            temp = Math.floor((Math.random() * n) + 1);
        }
        my_array[2] = temp;
        
        //Compute a valid random answer after modding 'n' for option 3
        temp = Math.floor((Math.random() * n) + 1);
        while(temp == answer || temp == my_array[1] || temp == my_array[2])
        {
            temp = Math.floor((Math.random() * n) + 1);
        }
        my_array[3] = temp;
        
	    rsaproj_ex3.option[0] = my_array[1];
	    rsaproj_ex3.option[1] = my_array[2];
	    rsaproj_ex3.option[2] = my_array[3];
	    return my_array[0];
	},

    };

    window.rsaproj_ex3 = window.rsaproj_ex3 || rsaproj_ex3;
}());
