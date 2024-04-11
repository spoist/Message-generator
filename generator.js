// Lists of nouns, verbs, and adjectives
const nouns = ["dog", "computer", "banana", "happiness", "darkness"];
const verbs = ["sings", "codes", "eats", "feels", "spreads"];
const adjectives = ["purple", "digital", "moldy", "contagious", "eternal"];

function generateJoke() {
  /*Generates a random, nonsensical joke using three random elements.
  Returns:
      A string containing the generated joke.
  */

  // Choose random elements from each list
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  // Combine the elements into a joke sentence
  const joke = `Why did the ${randomAdjective} ${randomNoun} ${randomVerb}?`;

  return joke;
}

// Generate and print a random joke
const randomJoke = generateJoke();
console.log(randomJoke);
