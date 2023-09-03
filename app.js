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

let bodyTemp = 98.6;
console.log("Ceiling: " + Math.ceil(bodyTemp));
console.log("Floor: " + Math.floor(bodyTemp));
console.log("Round: " + Math.round(bodyTemp));
console.log("\nImprecision: " + 81.66 * 15);
console.log("Corrected: " + (81.66 * 100 * 15) / 100);
console.log("\nFloat: " + Math.PI);
console.log("Commuted: " + Math.round(Math.PI * 100) / 100);

let i,
  rand,
  temp,
  nums = [];
let str = "\n\nYour Six Lucky Numbers: ";
for (i = 1; i < 60; i++) {
  nums[i] = i;
}
for (i = 1; i < 60; i++) {
  rand = Math.ceil(Math.random() * 59);
  temp = nums[i];
  nums[i] = nums[rand];
  nums[rand] = temp;
}
for (i = 1; i < 7; i++) {
  str += nums[i];
  if (i !== 6) {
    str += " - ";
  }
}
console.log(str);
