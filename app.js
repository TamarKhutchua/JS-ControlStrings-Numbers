// let radius = 4;
// console.log("\nRadius of Circle: " + radius);
// let area = Math.PI * (radius * radius);
// console.log("\nArea of Circle: " + area);
// let circumference = 2 * (Math.PI * radius);
// console.log("\nPerimeter of Circle: " + circumference);
// let cube = radius * radius * radius;
// let volume = (4 / 3) * Math.PI * cube;
// console.log("\nVolume of Sphere: " + volume);

let square = Math.pow(5, 2); // 5 to power 2 ( 5 x 5 )
let cube = Math.pow(4, 3); // 4 to power 3 ( 4 x 4 x 4 )
console.log("\nLargest Positive: " + Math.max(square, cube));
console.log("\nSmallest Positive: " + Math.min(square, cube));
square *= -1;
cube *= -1;
console.log("\nLargest Negative: " + Math.max(square, cube));
console.log("\nSmallest Negative: " + Math.min(square, cube));
