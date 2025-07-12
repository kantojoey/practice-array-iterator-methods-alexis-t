// Instructions
// Complete each of the following tasks by writing code to manipulate the provided
// arrays. Your solution should only use the array methods covered in the lesson:
// push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(),
// concat(), slice(), splice(), sort(), and reverse(). Submit the final version of
// the arrays as specified after each task.

console.log("Task 1: Using forEach()");
// 1. Create an array of five of your favorite cities.
let coolCities = ["New York", "St. Louis", "San Diego", "Mexico City"];
// 2. Use forEach( ) to log each city name to the console in uppercase.
// 3. Submit the output format by adding comments to the code.
coolCities.forEach((city) => {
    console.log(city.toUpperCase());
});
//Output:
//NEW YORK
//ST. LOUIS
//SAN DIEGO
//MEXICO CITY

console.log("\nTask 2: Transforming with map()");
// 1. Create an array called numbers with the numbers 1-5.
let numbers = [1, 2, 3, 4, 5];
// 2. Use map( ) to create an array where each number is squared. Call this array
// squares.
let squares = numbers.map(num => num ** 2);
// 3. Log the new array.
console.log(squares);
// 4. Submit the output by adding comments to the code.
//Output: [1, 4, 9, 16, 25]

console.log("\nTask 3: Filtering with filter()");
// 1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and
// 100.
let scores = [85, 42, 90, 75, 30, 100];
// 2. Use filter ( ) to create a new array containing only the scores greater than or
// equal to 80. Call this array highScores.
let highScores = scores.filter(score => score >= 80);
// 3. Log the new array.
console.log(highScores);
// 4. Submit the output by adding comments to the code.
//Output: [85, 90, 100]

console.log("\nTask 4: Finding with find() and findIndex()");
// 1. Create an array called favoriteFood that contains a list of your favorite
// dishes. Try to add 5 or 6 elements.
let favoriteFood = ["Taco", "Chicken Alfredo", "Tikka Masala", "Enchiladas", "Ramen", "Sushi"];
// 2. Use find() to locate the first food with more than 4 letters.
console.log(favoriteFood.find(food => food.length > 4));
//Output: "Chicken Alfredo"
// 3. Use findIndex( ) to find the index of that fruit.
console.log(favoriteFood.findIndex(food => food.length > 4));
//Output: 1
