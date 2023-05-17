// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
        for (let i = 1; i <= count; i++){
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(100);
// // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age){
    let oldEnoughMsg = `Congrats ${name}! you can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait to drive`;

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Grant", 24);
checkAge("Hazel",4);
// Exercise 3
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0){
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }    
}
console.log(checkQuadrant(1,1));
console.log(checkQuadrant(0,0));
// Exercise 4
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c){
        return `Equilateral`;
     } else if (a == b || b == c || a == c) {
    return `Isosceles`;
     } else {
        return `Scalene`;
     }
    } else {
        return `Not a valid triangle.`;
    }
    } 
    
    console.log(checkTriangle(1, 2, 2));
    console.log(checkTriangle(1, 1, 2));
    console.log(checkTriangle(2, 3, 4));
    console.log(checkTriangle(4, 4, 4));
