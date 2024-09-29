// Island Setup
let island = ['-', 'T', 'T', '-', '-'];

// Step 1: Log out how many moves there are in the island
console.log(`There are ${island.length} moves in the island\n`);

// Step 2: Loop through each position in the array and check if there's a treasure
let treasureCount = 0;

for (let i = 0; i < island.length; i++) {
  if (island[i] === 'T') {
    console.log(`Treasure found at move ${i + 1} :)`);
    treasureCount++;
  } else {
    console.log(`No treasure found :(`);
  }
}

// Step 3: Log out how many treasures there are in the island
console.log(`\nThere were ${treasureCount} treasures in the island`);
