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
//game.difficulty = 'hard';

 

// /* Exercise 4
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
// Solve Exercise 4 here: */

 //game.party.push('Pikachu');
 //console.log(game)

// /* Exercise 5
// 1. Choose three more Pokémon from the `pokemon` array and add them to your party.
// 2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
// Solve Exercise 5 here:
// */
// // console.dir(pokemon, { maxArrayLength: null })

 //game.party.push('Charmander', 'Hypno', 'Rhydon');
  //console.log(game)

// /*Exercise 6
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
// Solve Exercise 6 here:
// */
 //for (let i = 0; i < game.gyms.length; i++) {
     //easyGyms = [game.gyms[i].difficulty < 3]
     //console.log(easyGyms)
 //}




// /* Exercise 7
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?
// Solve Exercise 7 here: */
// // *** Array element Hypno is at his final level of evolution 

// // console.dir(pokemon, { maxArrayLength: null })
 //game.party.splice(0, 2, 'Raicho', 'Charmeleon');
 //game.party.splice(3, 1, 'Rhyperior');

 // console.log(game);

// /* Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.
// Solve Exercise 8 here: */

//for (i = 0; i < game.party.length; i++) {
   //console.log(game.party[i])
 //}

// /* Exercise 9
// 1. Can you print out all the starter Pokémon from the `pokemon` array?
// 2. Think about how you can identify a starter Pokémon and then log their names.
// Solve Exercise 9 here: */

 for (let i = 0; i < pokemon.length; i ++){
     if (pokemon.starter === 'true'){
     console.log(pokemon.name)
 }
 }

console.log(game)
   

/*Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything
After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Solve Exercise 10 here: */


//  console.dir(pokemon, { maxArrayLength: null }con

































