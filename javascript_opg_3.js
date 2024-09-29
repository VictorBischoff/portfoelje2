// Function to generate a random startup name
function getStartupName() {
  // Array 1: First part of the startup name
  const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

  // Array 2: Second part of the startup name
  const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

  // Randomly select a word from each array
  const firstPart = firstWords[Math.floor(Math.random() * firstWords.length)];
  const secondPart = secondWords[Math.floor(Math.random() * secondWords.length)];

  // Return the combination as the startup name
  return `Your startup name could be: ${firstPart} ${secondPart}`;
}

// Example of how it works:
console.log(getStartupName());
console.log(getStartupName());
