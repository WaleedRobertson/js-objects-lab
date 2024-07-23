const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],


    
}

//   console.log(game)

/* Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
Solve Exercise 3 here: */
game.difficulty = 'hard';

 

// /* Exercise 4
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
// Solve Exercise 4 here: */

 game.party.push('Pikachu');
//  console.log(game)

// /* Exercise 5
// 1. Choose three more Pokémon from the `pokemon` array and add them to your party.
// 2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
// Solve Exercise 5 here:
// */
// // console.dir(pokemon, { maxArrayLength: null })

 game.party.push('Charmander', 'Hypno', 'Rhydon');
//   console.log(game)

// /*Exercise 6
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
// Solve Exercise 6 here:
// */
for (let i = 0; i < game.gyms.length; i++) {
    easyGyms = [game.gyms[i].difficulty < 3]
    console.log(easyGyms)
}




// /* Exercise 7
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?
// Solve Exercise 7 here: */
// // *** Array element Hypno is at his final level of evolution 

console.dir(pokemon, { maxArrayLength: null })
game.party.splice(0, 2, 'Raicho', 'Charmeleon');
game.party.splice(3, 1, 'Rhyperior');

//  console.log(game);

// /* Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.
// Solve Exercise 8 here: */

for (i = 0; i < game.party.length; i++) {
    console.log(game.party[i])
}

// /* Exercise 9
// 1. Can you print out all the starter Pokémon from the `pokemon` array?
// 2. Think about how you can identify a starter Pokémon and then log their names.
// Solve Exercise 9 here: */

for (let i = 0; i < pokemon.length; i ++){
    if (pokemon.starter === true){
    console.log(pokemon.name)
}
}

// console.log(game)
   

/*Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything
After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Solve Exercise 10 here: */

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj)
  };

  game.catchPokemon('Pokemon1'); 


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
    const pokeballItem = this.items.find(item => item.name === "pokeball");
    if (pokeballItem) {
        pokeballItem.quantity--;
    }
};

// Exercise 12
// 1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
//  (change the value of `complete` in the qualifying objects from false to true).

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true;
    }
}

console.log(game)

// Exercise 13
// 1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
// 2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

// This method should:
//   - Not accept any arguments.
//   - Initially create a constant `gymTally`, which is an object that has two 
//     properties: `completed` and `incomplete`, both of which are initially set to 0.
//   - Iterate through the objects in the `game.gyms` array and update the 
//     properties on `gymTally` as follows: 
//     - `completed` should count how many gyms in the array have a value of `true` 
//       for their `completed` property. 
//     - `incomplete` should count how many gyms in the array have a value of 
//       `false` for their `completed` property.
//   - Log the value of `gymTally`.
//   - The method should not return anything.

// For example, if five gym objects have a value of `true` on their `completed` property and three gym 
// objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

function gymStatus () {
    const gymTally = { completed: 0, incomplete: 0 };

    for (let i = 0; i < this.gyms.length; i++) {
        if (this.gyms[i].completed) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    }

    console.log(gymTally);
}

// Exercise 14
// 1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

// This method should:
//   - Not accept any arguments.
//   - Count the number of Pokemon in the party.
//   - return the found number of Pokemon in the party.

function partyCount()  {
    return this.party.length;
}

// Exercise 15
// 1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
// (change the value of `complete` in the qualifying objects from false to true).

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 8) {
        game.gyms[i].completed = true;
    }
}

console.log(game)



































































