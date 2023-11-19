//Windows Prompt for user to enter Froyo Flavor

const userInput = prompt("Enter your favorite froyo flavors,Seperate with a comma:", "Enter Froyo Goodness Here");

//Parsing user input into Flavor Array


//place holder for flavor array
const observedFlavors = {};

function userFlavors(userInput) {

    const flavorsArray = userInput.split(",");
//for loop to add to array
    for (let i = 0; i < flavorsArray.length; i++) {
        const flavor = flavorsArray[i];
        observedFlavors[flavor] = true;
    }
}


//print user input into flavor array
userFlavors(userInput);

console.log(observedFlavors);
    
