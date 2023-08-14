//// Create an object and call it human. Add a name, age, and location property. Give the properties values.

const human = {
    name: "Nadra",
    age: 35,
    location: "Boston"
  };

//// Access the name using dot notation
let name = human.name;
console.log(name);

//// Access the age using square brackets
let age = human['age'];
console.log(age);

//// Use object destructuring to access location
let {location} = human;
console.log(location);


// ACCESS Granted
const bulbasaur = {
    name: 'Bulbasaur',
    abilities: [
      {
        ability: 'overgrow'
      },
      {
        ability: 'chlorophyll'
      }
    ],
    moves: ['razor-wind', 'swords-dance', 'cut'],
    sound: function () {
      console.log('Bulbahhhh!!!!!')
    }
  }
  
  // Print overgrow
  console.log(bulbasaur.abilities[0].ability);
  // Print cut
  console.log(bulbasaur.moves[2]);
  
  // Print Bulbahhhh!!!!!
  bulbasaur.sound();
  
  // Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
  
  bulbasaur.height = 7;
//   console.log(bulbasaur);

  // Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
  bulbasaur['order'] = 1;
//   console.log(bulbasaur);

  // Print an array that contains every single properties in bulbasaur
  let theArray = Object.keys(bulbasaur);
  console.log(theArray);
  // Print every single properties one by one in the console
  for (let i=0; i<theArray.length; i++) {
    console.log(theArray[i])
  };
  // Print an array that contains every single values in bulbasaur
theArray.forEach(Element => {
    console.log(bulbasaur[Element])
});