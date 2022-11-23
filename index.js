// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//a is not an array
//b is an arry


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log(a.map((ele) => ele * 2))


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(" "))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => a > b ? -1 : 1))


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
counter = a.reduce((counter, ele) => { 
    if (counter.hasOwnProperty(ele)) {
        counter[ele] += 1
    } else {
        counter[ele] = 1
    }
    return counter
}, {})
let max = a[0]
Object.keys(counter).forEach((ele) => {
    if (counter[ele] > counter[max]) {
        max = ele;
    }
})
console.log(max)