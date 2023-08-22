//! 1- Create an initial array called studentNames with the following student names in this order: "Alice", "Bob", "Charlie", "David", "Eve".

//? 2- Insert the name "Frank" after "Charlie" in the studentNames array.

//? 3- Remove "David" from the studentNames array.

//? 4- Add "Grace" and "Helen" to the end of the studentNames array.

//? 5- Replace "Bob" with "John" in the studentNames array.

//? 6- Display the final studentNames array to the console.

// * Answer:1/2

// const Names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Names.splice(3, 0, "Frank");
// console.log(Names);

// * Answer:3

// const Names = ["Alice", "Bob", "Charlie", "Frank", "David", "Eve"];
// Names.splice(4, 1);
// console.log(Names);

// * Answer:4

// const Names = ["Alice", "Bob", "Charlie", "Frank", "David", "Eve"];
// Names.push("Grace", "Helen");
// console.log(Names);

// * Answer:5

const Names = ["Alice", "Bob", "Charlie", "Frank", "David", "Eve"];
Names.splice(1, 1, "John");
console.log(Names);
