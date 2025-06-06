function calculateChaiIngredients(numberOfCups){
    // standard recipe for 1cup of chai
    const water = 200; //in ml
    const milk = 50; // in ml
    const teaLeaves = 1; // tablespoons
    const sugar = 2; // tablespoons

    // calculate the total ingredients
    const totalWater = numberOfCups * water;
    const totalMilk = numberOfCups * milk;
    const totalTeaLeaves = numberOfCups * teaLeaves;
    const totalSugar = numberOfCups * sugar;

    //console output
    console. log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea leaves:${totalTeaLeaves} tablespoons`);
    console.log(`Sugar: ${totalSugar} tablespoon`);
    console.log("\nEnjoy your Chai Bora!");
}

    //Prompting user input
    const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    const numberOfCups = Number(input);
    if(!isNaN(numberOfCups) && numberOfCups>0){
        calculateChaiIngredients(numberOfCups);
    }else {
        console.log("Please enter a valid number of cups");
    }
