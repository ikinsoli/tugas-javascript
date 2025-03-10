console.log("Halo dari JavaScript!");
// 1. Area of rectangle
let length = 5;
let width = 3;
let areaRectangle = length * width;
console.log("Area of rectangle:", areaRectangle); // Output: 15

// 2. Diameter, circumference, and area of a circle
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let areaCircle = Math.PI * radius * radius;
console.log("Diameter:", diameter);
console.log("Circumference:", circumference.toFixed(4));
console.log("Area:", areaCircle.toFixed(3));

// 3. Third angle of triangle
let a = 80;
let b = 65;
let c = 180 - a - b;
console.log("Third angle:", c); // Output: 35

// 4. Difference between two dates (in days)
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
let diffInTime = date2.getTime() - date1.getTime();
let diffInDays = diffInTime / (1000 * 3600 * 24);
console.log("Date difference in days:", diffInDays); // Output: 2

// 5. Print name initials in uppercase
let fullName = "John Doe";
let names = fullName.split(" ");
let initials = names.map(n => n[0].toUpperCase()).join("");
console.log("Initials:", initials); // Output: JD
