let offeredFlavors = [];
let userInputString = null;
const froyoFlavors = {
                      vanilla: 0,
                      strawberry: 0,
                      coffee: 0,
                      cherry: 0,
                      banana: 0,
                      raspberry: 0,
                      blackberry: 0,
                      pomegranate: 0,
                      apple: 0,
                      chocolate: 0,
                      pineapple: 0
}; 

logOfferedFlavores();

let chosenFlavors = getUserFlavors();

printOutput(createMyOrder(getFlavorCounts(chosenFlavors, offeredFlavors)));

function logOfferedFlavores(){
 
    offeredFlavors = ["vanilla",
                      "strawberry",
                      "coffee",
                      "cherry",
                      "banana",
                      "raspberry",
                      "blackberry",
                      "pomegranate",
                      "apple",
                      "chocolate",
                      "pineapple"];

 console.log("Those are all available flavors in froyo: " + offeredFlavors);                        
}

function getUserFlavors(){

  const userInputString = prompt(
       "Please enter froyo flavors from available flavors separated by commas.");

  let chosenFlavorsArray = userInputString.split(",");

  console.log("chosen flavors: " +  chosenFlavorsArray);
  
  return chosenFlavorsArray;
}

function getFlavorCounts(chosenFlavorsArray, offeredFlavors){
    
    let flavor = null; 

    for(let i = 0; i < chosenFlavorsArray.length; i++){
      for(let j = 0; j < offeredFlavors.length; j++){
        //console.log("chosen flavor array [i] " + chosenFlavorsArray[i]);
        //console.log("offered Flavors [j] " + offeredFlavors[j]);
        //console.log ("i:" + i + ",j:" + j)
         if(chosenFlavorsArray[i] == offeredFlavors[j]){
            flavor =  chosenFlavorsArray[i];
            froyoFlavors[flavor] ++;
            //console.log("flavor: " + flavor);
            break;
         }    
           
      } 
    }  

    //console.log("flavors: " + Object.keys(froyoFlavors));
    //console.log("counted flavors: " + Object.values(froyoFlavors));
    return froyoFlavors;
}

function createMyOrder(froyoFlavors){
    
    let nonChosenFlavores = [];

    for (const key in froyoFlavors){
      if(froyoFlavors[key] == 0){
         //console.log("key: " + key);
         nonChosenFlavores.push(key);            
      } 
    }    
    
    for (let i = 0; i < nonChosenFlavores.length; i++){
      //console.log("key to delete: " + nonChosenFlavores[i]);
      let deleteKey = nonChosenFlavores[i];  
      delete froyoFlavors[deleteKey];
    }  

    //console.log("flavors: " + Object.keys(froyoFlavors));
    //console.log("counted flavors: " + Object.values(froyoFlavors));  
    
    return froyoFlavors;       
}    

function printOutput(froyoFlavors){
    console.log("The final order of the customer is: " + JSON.stringify(froyoFlavors));
}


