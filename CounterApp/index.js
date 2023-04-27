let countEl =  document.getElementById("count-el");
let saveEntries = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
    
}

function save() {
    let countDash = count + " - ";
    count = 0;
    countEl.textContent = count;
    saveEntries.textContent += countDash;
    console.log(count);
}

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

//let myAge = 24;
//let humanDogRatio = 7;

//let myDogAge = myAge * humanDogRatio;
//console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//function increment() {
   // console.log("The button was clicked")
//}

//function firstFunction () {
  //  console.log(42)
//}
