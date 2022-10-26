//ARRAY TO STORE THE NAMES 
let names = ['Cathy', 'Emmy', 'Mercy', 'Barbra', 'Julie'];


//DO WHILE LOOP

//Declaring and intializing variable index
let index = 0;

do {

   //Checking for index value at every iteration
    if (index == 3)
    {

    //Printing the result if the index value equals
   console.log('This is my name : ' + names[3]);

    }
  
  //Incrementing the index value by 1
    index++;

//Checking the condition before the next iteration 
} while ( index < names.length );


//FOR OF LOOP
for (let name of names) 
{
    //Checking for name Barbra at every iteration
    if (name == 'Barbra')
    {
	
  //Printing the result if the name equals 
  console.log('This is my name : ' + name)
   
 }
}


//FOR EACH LOOP
names.forEach(function (name, index) 
{
	//Checking for name Barbra at every iteration
	if (name == 'Barbra')
    {

	//Printing the result if the name equals 
	console.log('This is my name : ' + name)

    }

});


