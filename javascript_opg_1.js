// Step 1: Create an array that holds the grades
let grades = [91, 84, 77, 65, 90, 87, 74, 58, 83, 68];

// Step 2: Log out how many grades there are
console.log(`There are ${grades.length} grades in the class\n`);

// Step 3: Classify each grade
function classifyGrade(grade) {
  if (grade >= 90) return 'A';
  else if (grade >= 80) return 'B';
  else if (grade >= 70) return 'C';
  else if (grade >= 60) return 'D';
  else return 'F';
}

// Step 4: Evaluate overall class performance
function evaluatePerformance(average) {
  if (average >= 90) return "Excellent";
  else if (average >= 80) return "Good";
  else if (average >= 70) return "Satisfactory";
  else return "Needs Improvement";
}

// Step 5: Determine the highest, lowest, and average grade
let highestGrade = Math.max(...grades);
let lowestGrade = Math.min(...grades);
let sumOfGrades = grades.reduce((sum, grade) => sum + grade, 0);
let averageGrade = sumOfGrades / grades.length;

// Output list of all grades with their corresponding categories
console.log("Grades:");
grades.forEach(grade => {
  console.log(`${grade}: ${classifyGrade(grade)}`);
});

// Output class performance
console.log(`\nOverall Class Performance: ${evaluatePerformance(averageGrade)}\n`);

// Step 6: Output highest, lowest, and average grades
console.log(`Highest Grade: ${highestGrade} (${classifyGrade(highestGrade)})`);
console.log(`Lowest Grade: ${lowestGrade} (${classifyGrade(lowestGrade)})`);
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
